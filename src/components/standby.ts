import { Component } from './abstract-component'
import { NumberButton } from './number-button'
import { QuestionDisplay } from './question'
import { GameScreen } from './game-screen'

export class Standby extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(private _count: number = 3) {
    super('standby', 'app')

    this.configure()
  }

  async configure() {
    // ３秒間待つ
    let cnt = await this._countDown(this._count);
    this.element.textContent = cnt.toString()
    cnt = await this._countDown(cnt)
    this.element.textContent = cnt.toString()
    cnt = await this._countDown(cnt)

    // ゲーム画面表示
    this._gameScreenShow()
  }

  // 待機表示
  private _countDown(time: number) {
    return new Promise<number>(resolve => {
      setTimeout(function () {
        resolve(--time);
      }, 1000)
    }
    )
  }

  // 埋め込むアクション
  private _gameScreenShow() {
    // 表示されているエレメント削除
    this.element.remove();

    // ゲームスクリーンの表示
    new GameScreen();

    // 問の表示
    new QuestionDisplay();

    // 数字入力ボタンの設置
    new NumberButton();

  }


}