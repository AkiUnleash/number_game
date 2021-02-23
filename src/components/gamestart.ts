import { Component } from './abstract-component'
import { StartButton } from './startbutton'
import logoImage from '../images/logo.png'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class GameStart extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('start-screen', 'app');

    stateOperation.setScreen('start')
    soundOperation.now()

    new StartButton('startbutton-postion');
    this.logorender();

  }

  configure() { }

  private logorender() {
    const logo = document.createElement("img")
    logo.classList.add('titlescreen__img')
    logo.src = logoImage;
    const ap = document.getElementById('titlescreen')! as HTMLDivElement
    ap.insertAdjacentElement('afterbegin', logo)

  }

}