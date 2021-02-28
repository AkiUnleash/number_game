import { Component } from './abstract-component'
import { ButtonTop } from './button-top'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ScreenCredit extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('credit', 'app')
    stateOperation.setScreen('credit')
    soundOperation.now();
    new ButtonTop()
  }

  renderQuestion() { }

  configure() { }

}