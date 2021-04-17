import { Component } from './abstract-component'
import { ButtonStart } from './button-start'
import { ButtonRanking } from './button-ranking'
import { ButtonMode } from './button-mode'
import { ButtonCredit } from './button-credit'
import logoImage from '../assets/images/logo.png'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ScreenGamestart extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('start-screen', 'app');
    // スクリーン状況の設定
    stateOperation.setScreen('start')
    // スクリーン状況にあった音楽を再生
    soundOperation.now()
    // スタートボタンの表示
    new ButtonStart('startbutton-postion');
    // ランキングボタンの表示
    new ButtonRanking();
    // モードボタンの表示
    new ButtonMode()
    // クレジットボタンの表示
    new ButtonCredit();
    // ロゴの表示
    this.logorender();

  }

  configure() { }

  // ロゴの表示
  private logorender() {
    const logo = document.createElement("img")
    logo.classList.add('titlescreen__img')
    logo.src = logoImage;
    const ap = document.getElementById('titlescreen')! as HTMLDivElement
    ap.insertAdjacentElement('afterbegin', logo)

  }

}