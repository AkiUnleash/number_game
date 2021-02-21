import { Component } from './abstract-component'
import { StartButton } from './startbutton'

export class GameStart extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('start-screen', 'app');
    new StartButton();
  }

  configure() { }

}