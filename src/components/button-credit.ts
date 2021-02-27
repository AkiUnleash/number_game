import { Component } from './abstract-component'
import { ScreenCredit } from './screen-credit'
import { Autobind } from '../util/autobind'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ButtonCredit extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('credit-button', 'optionbutton-postion')
    this.configure();
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler)
  }

  // 埋め込むアクション
  @Autobind
  private clickHandler(event: Event) {

    soundOperation.tap_button_play()
    stateOperation.setPointInitialize()

    // エレメント削除
    this.allremove()

    new ScreenCredit()
  }
}
