import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class DisplayUsername extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('username', 'header')
    this.element.textContent = stateOperation.getUsername()
  }

  renderQuestion() {
  }

  configure() {
  }
}