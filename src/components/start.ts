import { Component } from './abstract-component'
import { NumberButton } from './number-button'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('start-button', 'app')
    this.configure()
    console.log(this.element);
  }

  configure() {
    // ボタンクリック時のアクション
    this.element.addEventListener('click', this.submitHandler.bind(this))
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    this.element.remove()
    for (const n of this.arrayshuffle([...Array(9)].map((_, i) => i + 1))) {
      new NumberButton(n)
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