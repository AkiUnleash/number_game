import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class NumberButton extends Component<HTMLDivElement, HTMLInputElement> {
  assignedState: any[];

  constructor(private acrivenumber: number) {
    super('number-button', 'app')
    this.assignedState = []

    stateOperation.addListener((question: any[]) => {
      this.assignedState = question
      this.renderQuestion()
    })

    this.configure()
  }

  renderQuestion() {
    const listEl = document.getElementById('Question_no')! as HTMLDivElement;
    listEl.textContent = "";
    for (const Item of this.assignedState) {
      const listItem = document.createElement('div');
      listItem.textContent = Item;
      listEl.appendChild(listItem);
    }
  }

  configure() {
    this.element.addEventListener('click', this.submitHandler.bind(this))
    this.element.value = this.acrivenumber.toString();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    stateOperation.checkTheAnswer(this.element.value)
  }
}