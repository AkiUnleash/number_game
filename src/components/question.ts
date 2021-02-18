import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class QuestionDisplay extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('question', 'app')
    stateOperation.setQuestion();
    this.renderContent()
  }

  configure() { }

  renderContent() {
    const q = stateOperation.getQuestion()
    const listEl = document.getElementById('Question_no')! as HTMLDivElement;
    listEl.textContent = "";
    for (const Item of q) {
      const listItem = document.createElement('div');
      listItem.textContent = Item;
      listEl.appendChild(listItem);
    }
  }

}