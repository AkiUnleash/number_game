import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ScreenGameplay extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('game-screen', 'app')
    stateOperation.setScreen('gameplay')
    soundOperation.now();
  }

  renderQuestion() {
  }

  configure() {
  }

}