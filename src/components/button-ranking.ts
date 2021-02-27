import { Component } from './abstract-component'
import { ScreenRanking } from './screen-ranking'
import { Autobind } from '../util/autobind'

export class ButtonRanking extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('ranking-button', 'app')
    this.configure();
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler)
  }

  // 埋め込むアクション
  @Autobind
  private clickHandler(event: Event) {

    // エレメント削除
    this.allremove()

    new ScreenRanking()
  }
}
