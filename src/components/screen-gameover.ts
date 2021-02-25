import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { ButtonStart } from './button-start'
import { ButtonTop } from './button-top'
import { soundOperation } from '../util/sound'

export class ScreenGameover extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('gameover', 'app');
    stateOperation.setScreen('gameover');
    soundOperation.now();
    this.renderPoint();
    new ButtonStart('startbutton-potion', true);
    new ButtonTop();
  }

  renderPoint() {
    const pointElemnt = document.getElementById('finish__point')! as HTMLElement
    pointElemnt.textContent = stateOperation.getPoint();
  }

  configure() {
  }

}