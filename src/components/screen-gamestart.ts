import { Component } from './abstract-component'
import { ButtonStart } from './button-start'
import { ButtonRanking } from './button-ranking'
import logoImage from '../assets/images/logo.png'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ScreenGamestart extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('start-screen', 'app');

    stateOperation.setScreen('start')
    soundOperation.now()

    new ButtonStart('startbutton-postion');
    new ButtonRanking();
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