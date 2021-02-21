import { Component } from './abstract-component'

export class GameOverScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    const elm = document.getElementById('app')! as HTMLDivElement
    elm.innerHTML = ''
    super('gameover', 'app')
  }

  renderQuestion() {
  }

  configure() {
  }

}