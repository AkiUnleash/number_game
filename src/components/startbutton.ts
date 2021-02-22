import { Component } from './abstract-component'
import { Standby } from './standby'
import { stateOperation } from '../state/state'
import { Autobind } from '../util/autobind'
import { Validator } from '../util/varidetor'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {
  private restart: boolean

  constructor(
    hostElementId: string,
    restart: boolean = false,
  ) {

    super('start-button', hostElementId)

    this.restart = restart;
    if (this.restart === true) {
      this.element.textContent = "RESTART";
    }

    this.configure()
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler)
  }

  // 埋め込むアクション
  @Autobind
  private clickHandler() {
    // ユーザー名保管
    if (this.restart === false) {
      const elementUsername = document.getElementById('name_field') as HTMLInputElement;
      stateOperation.setUsername(elementUsername.value)

      // ニックネームのバリデーション
      const validator = new Validator(stateOperation.getUsername())
      if (!validator.required() || !validator.Maxlength(10)) {
        const feedbackEl = document.getElementById('feedback')! as HTMLDivElement
        feedbackEl.textContent = validator.getErrorMessage()
        return
      }
    }

    // エレメント削除
    this.allremove()

    // 開始待機へ画面遷移
    new Standby();
  }
}