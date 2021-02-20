import { Component } from './abstract-component'
import { NumberButton } from './number-button'
import { QuestionDisplay } from './question'

export class Standby extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(private _count: number = 3) {
    super('standby', 'app')

    this.configure()
  }

  configure() {
    this._countDown()

  }

  private _countDown() {
    let countDown = () => {
      this.element.textContent = this._count.toString()
      const id = setTimeout(() => { countDown(); }, 1000);
      if (this._count === 0) {
        this.clickHandler()
        clearTimeout(id)
      } else {
        this._count--
      }
    }
    countDown()
  }

  // 埋め込むアクション
  private clickHandler() {
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