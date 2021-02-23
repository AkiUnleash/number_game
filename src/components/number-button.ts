import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class NumberButton extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('number-button', 'oparation', false)
    this.configure()
  }

  configure() {
    // 数字入力ボタンを挿入する場所を指定。
    const listEl = document.getElementById('oparation')! as HTMLDivElement;
    let fragment = document.createDocumentFragment();

    // 0から9まで繰り返す
    for (const Item of this._arrayshuffle([...Array(10)].map((_, i) => i))) {
      // 取得したエレメントをクローン
      const cn = this.element.cloneNode(true);
      cn.textContent = Item.toString();
      cn.addEventListener('click', () => { this._clickHandler(Item.toString()) });
      // 蓄積
      fragment.appendChild(cn);
    }
    // 蓄積したエレメントを設置
    listEl.appendChild(fragment);
  }

  private _clickHandler(count: string) {
    stateOperation.checkTheAnswer(count);
    soundOperation.tap_number_play()
  }

  // 配列のシャッフル
  private _arrayshuffle(array: number[]) {
    for (let i = array.length; 1 < i; i--) {
      const k = Math.floor(Math.random() * i);
      // 配列同士を入れ替える。
      [array[k], array[i - 1]] = [array[i - 1], array[k]];
    }
    return array;
  }
}