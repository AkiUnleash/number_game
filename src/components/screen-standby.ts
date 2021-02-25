import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { ScreenGameplay } from './screen-gameplay'
import { DisplayQuestion } from './display-question'
import { DisplayTimer } from './display-gametimer'
import { DisplayPoint } from './display-gamepoint'
import { DisplayUsername } from './display-username'
import { ButtonNumber } from './button-number'
import { soundOperation } from '../util/sound'

export class Standby extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(private _count: number = 3) {
    super('standby', 'app')
    stateOperation.setScreen('standby')
    soundOperation.now()
    this.configure()
  }

  async configure() {
    // ３秒間待つ
    let cnt = await this._countDown(this._count);
    this.element.textContent = cnt.toString()
    soundOperation.countdown_play()
    cnt = await this._countDown(cnt)
    this.element.textContent = cnt.toString()
    soundOperation.countdown_play()
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
    new ScreenGameplay();

    //  ユーザー名表示
    new DisplayUsername()

    //  ポイント表示
    new DisplayPoint()

    // 問の表示
    new DisplayQuestion();

    // 数字入力ボタンの設置
    new ButtonNumber();

    // カウントダウンの設置
    new DisplayTimer();
  }
}