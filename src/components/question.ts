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
    this.element.textContent = q;
    console.log(stateOperation.getQuestion());
  }

}