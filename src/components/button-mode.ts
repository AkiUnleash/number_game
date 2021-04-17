
import { Component } from './abstract-component'
import { Autobind } from '../util/autobind'
import { stateOperation } from '../state/state';

export class ButtonMode extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('mode-button', 'optionbutton-postion')
    this.configure();
  }

  configure() {
    // ボタンクリック時のアクションを埋め込む
    this.element.addEventListener('click', this.clickHandler)
  }

  // 埋め込むアクション
  @Autobind
  private clickHandler(event: Event) {
    if (stateOperation.getMode() === 'nomal') {
      document.body.className = 'kidsmode'
      stateOperation.setMode('kids')
      this.element.textContent = 'KIDS MODE'
      this.element.className = "nes-btn is-warning"
    } else {
      document.body.className = ''
      stateOperation.setMode('nomal')
      this.element.textContent = 'NOMAL MODE'
      this.element.className = "nes-btn is-success"
    }
  }
}