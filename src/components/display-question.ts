import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class DisplayQuestion extends Component<HTMLDivElement, HTMLInputElement> {
  assignedState: any[];

  constructor() {
    super('question', 'question_app', false)

    this.assignedState = []

    stateOperation.setQuestion();

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
    const q = stateOperation.getQuestion()
    const listEl = document.getElementById('question_app')! as HTMLDivElement;
    const newEl = document.createElement('div');
    newEl.classList.add('question__item--brank')
    let fragment = document.createDocumentFragment();

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
    const listEl = document.getElementById('question_app')! as HTMLDivElement;
    listEl.innerHTML = ''
  }

}