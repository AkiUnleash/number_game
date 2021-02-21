import { Component } from './abstract-component'
import { Standby } from './standby'
import { stateOperation } from '../state/state'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {
  private elementStart: HTMLElement
  private elementUsername: HTMLInputElement

  constructor() {
    super('start-button', 'app')

    this.elementStart = this.element.querySelector(
      '#start'
    ) as HTMLInputElement;

    this.elementUsername = this.element.querySelector(
      '#name_field'
    ) as HTMLInputElement;

    this.configure()

  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.elementStart.addEventListener('click', this.clickHandler.bind(this))
  }

  // 埋め込むアクション
  private clickHandler(event: Event) {
    // ユーザー名保管
    stateOperation.setUsername(this.elementUsername.value)

    // エレメント削除
    this.element.remove();

    // 開始待機へ画面遷移
    new Standby();
  }

  private getUsername() {

  }
}