import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { StartButton } from './startbutton'
import { TopButton } from './topbutton'
import { soundOperation } from '../util/sound'

export class GameOverScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('gameover', 'app');
    stateOperation.setScreen('gameover');
    soundOperation.now();
    this.renderPoint();
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