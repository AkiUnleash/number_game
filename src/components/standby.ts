import { Component } from './abstract-component'
import { NumberButton } from './number-button'
import { QuestionDisplay } from './question'

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
    this.element.remove();
    new QuestionDisplay();
    for (const n of this.arrayshuffle([...Array(10)].map((_, i) => i))) {
      new NumberButton(n);
    }
  }

  // 配列のシャッフル
  private arrayshuffle(array: number[]) {
    for (let i = array.length; 1 < i; i--) {
      const k = Math.floor(Math.random() * i);
      [array[k], array[i - 1]] = [array[i - 1], array[k]];
    }
    return array;
  }

}