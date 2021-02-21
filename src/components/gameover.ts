import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class GameOverScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {

    super('gameover', 'app')

    this.renderPoint()
  }

  renderPoint() {
    const pointElemnt = document.getElementById('finish__point')! as HTMLElement
    pointElemnt.textContent = stateOperation.getPoint();
  }

  configure() {
  }

}