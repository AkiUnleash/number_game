import { Component } from './abstract-component'
import imageSoundOn from '../assets/images/sound-on.png'
import imageSoundOff from '../assets/images/sound-off.png'
import { Autobind } from '../util/autobind'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ButtonSound extends Component<HTMLDivElement, HTMLInputElement> {
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
    // サウンド状況の指定
    stateOperation.setSound()

    // サンド画像の切り替え
    if (stateOperation.getSound()) {
      this.element.src = imageSoundOn
    } else {
      this.element.src = imageSoundOff
    }

    // シーンに合わせて音楽を再生
    soundOperation.now()
  }
}