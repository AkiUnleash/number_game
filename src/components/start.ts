import { Component } from './abstract-component'
import { NumberButton } from './number-button'
import { QuestionDisplay } from './question'

export class StartButton extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('start-button', 'app')
    this.configure()
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler.bind(this))
  }

  // 埋め込むアクション
  private clickHandler(event: Event) {
    event.preventDefault();
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