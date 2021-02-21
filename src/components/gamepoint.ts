import { Component } from './abstract-component'
import { stateOperation } from '../state/state'

export class PointComponent extends Component<HTMLDivElement, HTMLInputElement> {
  private _point: string
  constructor() {
    super('point', 'header')

    this._point = ''

    stateOperation.addListener((point: number, flg: string) => {
      if (flg === 'point') {
        this._point = point.toString().padStart(6, '0')
        this.renderPoint();
      }
    })

  }

  renderPoint() {
    this.element.textContent = this._point.toString()
  }

  configure() { }

}