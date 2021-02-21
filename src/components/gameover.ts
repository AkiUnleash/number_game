import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { StartButton } from './startbutton'
import { TopButton } from './topbutton'

export class GameOverScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {

    super('gameover', 'app')

    this.renderPoint()
    new StartButton('startbutton-potion', true);
    new TopButton();
  }

  renderPoint() {
    const pointElemnt = document.getElementById('finish__point')! as HTMLElement
    pointElemnt.textContent = stateOperation.getPoint();
  }

  configure() {
  }

}