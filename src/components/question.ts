import { Component } from './abstract-component'

export class QuestionDisplay extends Component<HTMLDivElement, HTMLInputElement> {
  constructor() {
    super('question', 'app')
    this.renderContent()
  }

  configure() { }

  renderContent() {
    console.log(this.element);
    this.element.textContent = (Math.floor(Math.random() * 100000 - 1)).toString();
  }

}