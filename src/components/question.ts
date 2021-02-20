import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class QuestionDisplay extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('question', 'question_app', false)
    stateOperation.setQuestion();
    this.renderContent()
  }

  configure() { }

  renderContent() {
    const q = stateOperation.getQuestion()
    const listEl = document.getElementById('question_app')! as HTMLDivElement;
    let fragment = document.createDocumentFragment();

    for (const Item of q) {
      const cn = this.element.cloneNode(true)
      cn.textContent = Item
      fragment.appendChild(cn);
    }
    listEl.appendChild(fragment);
  }

}