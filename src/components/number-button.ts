import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class NumberButton extends Component<HTMLDivElement, HTMLInputElement> {
  constructor(private acrivenumber: number) {
    super('number-button', 'app')
    this.configure()
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