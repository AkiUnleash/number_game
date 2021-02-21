import { Component } from './abstract-component'

export class GameScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('game-screen', 'app')
  }

  renderQuestion() {
  }

  configure() {
  }

}