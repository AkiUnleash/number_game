import { Component } from './abstract-component'
import { ScreenGamestart } from './screen-gamestart'
import { Autobind } from '../util/autobind'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ButtonTop extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('top-button', 'topbutton-potion')
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

    new ScreenGamestart()
  }
}