import { Component } from './abstract-component'
import imageSoundOn from '../images/sound-on.png'
import imageSoundOff from '../images/sound-off.png'
import { Autobind } from '../util/autobind'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class SoundButton extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('sound-button', 'footer')
    this.element.src = imageSoundOff
    this.configure()
  }

  configure() {
    this.element.addEventListener('click', this.clickHandler)
  }

  // 埋め込むアクション
  @Autobind
  private clickHandler() {
    stateOperation.setSound()

    if (stateOperation.getSound()) {
      this.element.src = imageSoundOn
    } else {
      this.element.src = imageSoundOff
    }

    soundOperation.now()
  }
}