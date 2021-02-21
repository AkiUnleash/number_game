import { Component } from './abstract-component'
import { GameStart } from './gamestart'

export class TopButton extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('top-button', 'topbutton-potion')
    this.configure();
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler.bind(this))
  }

  // 埋め込むアクション
  private clickHandler(event: Event) {
    // エレメント削除
    this.allremove()

    new GameStart()
  }
}
