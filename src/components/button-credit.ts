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

    // 効果音
    soundOperation.tap_button_play()

    // ポイントの初期化
    stateOperation.setPointInitialize()

    // エレメント削除
    this.allremove()

    // クレジット画面の表示
    new ScreenCredit()
  }
}
