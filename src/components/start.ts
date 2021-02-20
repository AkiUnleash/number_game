import { Component } from './abstract-component'
import { NumberButton } from './number-button'
import { QuestionDisplay } from './question'
import { Standby } from './standby'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {
  private elementStart: HTMLElement
  constructor() {
    super('start-button', 'app')

    this.elementStart = this.element.querySelector(
      '#start'
    ) as HTMLInputElement;

    this.configure()

  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.elementStart.addEventListener('click', this.clickHandler.bind(this))
  }

  // 埋め込むアクション
  private clickHandler(event: Event) {
    // エレメント削除
    this.element.remove();

    // 開始待機へ画面遷移
    new Standby();
  }
}