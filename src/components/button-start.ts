import { Component } from './abstract-component'
import { Standby } from './screen-standby'
import { Autobind } from '../util/autobind'
import { Validator } from '../util/varidetor'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ButtonStart extends Component<HTMLDivElement, HTMLInputElement> {
  private restart: boolean

  constructor(
    hostElementId: string,
    restart: boolean = false,
  ) {

    super('start-button', hostElementId)

    // リスタート時はボタンの文字列を変更
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
    // 通常スタート時の処理
    if (this.restart === false) {
      // ニックネーム名の取得
      const elementUsername = document.getElementById('name_field') as HTMLInputElement;
      stateOperation.setUsername(elementUsername.value)

      // ニックネームのバリデーション
      const validator = new Validator(stateOperation.getUsername())
      if (!validator.required() || !validator.Maxlength(10)) {
        const feedbackEl = document.getElementById('feedback')! as HTMLDivElement
        feedbackEl.textContent = validator.getErrorMessage()
        return
      }
    } else {
      // ポイントの初期化
      stateOperation.setPointInitialize()
    }

    // 効果音再生
    soundOperation.tap_button_play()

    // エレメント削除
    this.allremove()

    // 開始待機へ画面遷移
    new Standby();
  }
}