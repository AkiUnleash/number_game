import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'

export class ScreenGameplay extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('game-screen', 'app')
    // スクリーン状況の設定
    stateOperation.setScreen('gameplay')
    // スクリーン状況にあった音楽を指定
    soundOperation.now();
  }

  renderQuestion() {
  }

  configure() {
  }

}