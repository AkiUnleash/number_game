import { Component } from './abstract-component'
import { Standby } from './standby'
import { stateOperation } from '../state/state'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('start-button', 'startbutton-postion')
    this.configure()
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler.bind(this))
  }

  // 埋め込むアクション
  private clickHandler(event: Event) {

    // ユーザー名保管
    const elementUsername = document.getElementById('name_field') as HTMLInputElement;
    stateOperation.setUsername(elementUsername.value)

    // エレメント削除
    this.allremove()

    // 開始待機へ画面遷移
    new Standby();

  }

}