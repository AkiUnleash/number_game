import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class DisplayQuestion extends Component<HTMLDivElement, HTMLInputElement> {
  assignedState: any[];

  constructor() {
    super('question', 'question_app', false)

    this.assignedState = []

    // 問題の追加
    stateOperation.setQuestion();

    // 問題変更時に実行される関数を蓄積
    stateOperation.addListener((question: any[], flg: string) => {
      if (flg === 'question') {
        this.assignedState = question
        this.elementRemove()
        this.renderContent()
      }
    })

    this.renderContent()
  }

  configure() { }

  renderContent() {
    // クエスチョンの状況を取得し、描画する。
    const q = stateOperation.getQuestion()
    const listEl = document.getElementById('question_app')! as HTMLDivElement;
    const newEl = document.createElement('div');
    let fragment = document.createDocumentFragment();

    newEl.classList.add('question__item--brank')
    for (let elemntCount: number = q.length; elemntCount < 5; elemntCount++) {
      fragment.appendChild(newEl);
    }

    for (const Item of q) {
      const cn = this.element.cloneNode(true)
      cn.textContent = Item
      fragment.appendChild(cn);
    }

    listEl.appendChild(fragment);
  }

  elementRemove() {
    // question_appの削除
    const listEl = document.getElementById('question_app')! as HTMLDivElement;
    listEl.innerHTML = ''
  }

}