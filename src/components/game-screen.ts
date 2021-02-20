import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class GameScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('game-screen', 'app')
  }

  renderQuestion() {
  }

  configure() {
  }

}