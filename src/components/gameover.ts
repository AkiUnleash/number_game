import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class GameOverScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    const elm = document.getElementById('app')! as HTMLDivElement
    elm.innerHTML = ''

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