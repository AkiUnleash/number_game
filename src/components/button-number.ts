import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ButtonNumber extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('number-button', 'oparation', false)
    this.configure()

    // Listenerに関数を蓄積
    stateOperation.addListener((_: any[], flg: string) => {
      if (flg === 'number' && stateOperation.getMode() === 'nomal') {
        this.changeElement()
      }
    })
  }

  // 数字ボタンのエレメントを削除
  elementRemove() {
    const listEl = document.getElementById('oparation')! as HTMLDivElement;
    listEl.innerHTML = ''
  }

  configure() {
    // 数字入力ボタンを挿入する場所を指定。
    const listEl = document.getElementById('oparation')! as HTMLDivElement;
    let fragment = document.createDocumentFragment();

    // 0から9まで繰り返す
    for (const Item of this._arrayshuffle([...Array(10)].map((_, i) => i))) {
      // ID付与
      this.element.id = Item.toString()
      // 取得したエレメントをクローン
      const cn = this.element.cloneNode(true);
      cn.textContent = Item.toString();
      cn.addEventListener('click', (e) => { this._clickHandler(Item.toString()) });
      // 蓄積
      fragment.appendChild(cn);
    }
    // 蓄積したエレメントを設置
    listEl.appendChild(fragment);
  }

  // ボタンの再描画
  changeElement() {
    // 数字入力ボタンを挿入する場所を指定。
    const listEl = document.getElementById('oparation')! as HTMLDivElement;
    let fragment = document.createDocumentFragment();

    // IDをキーにエレメントを取得
    for (const Item of this._arrayshuffle([...Array(10)].map((_, i) => i))) {
      let thisEl = document.getElementById(Item.toString())! as HTMLDivElement;
      const cn = thisEl.cloneNode(true);
      cn.addEventListener('click', (e) => { this._clickHandler(Item.toString()) });
      fragment.appendChild(cn);
    }
    // 現状の描画を削除
    this.elementRemove()
    // 蓄積したエレメントを設置
    listEl.appendChild(fragment);
  }

  // クリック時の処理
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