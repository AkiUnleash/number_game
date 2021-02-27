import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'
import { User, firebasecontrol } from '../util/firebasecontrol'
import { ButtonTop } from './button-top'

export class ScreenRanking extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('ranking-template', 'app');
    this.configure();
    new ButtonTop();
  }

  configure() {
    stateOperation.setScreen('ranking')
    soundOperation.now();
    this.firebaseInport();
  }

  async firebaseInport() {
    const rankdata = await firebasecontrol.inportdata()
    this.append(rankdata)
  }

  append(rankdata: User[]) {
    // OutputElement
    const ap = document.getElementById('ranking-body')!

    // InputElement
    let fragment = document.createDocumentFragment()!;
    const rankTemplate = document.getElementById('ranking-template-data')! as HTMLTemplateElement
    const importedNode = document.importNode(rankTemplate.content, true)
    const rankEl = importedNode.firstElementChild as HTMLElement;

    // 
    rankdata.forEach((u, index) => {
      const cn = rankEl.cloneNode(true);

      cn.childNodes.item(0).textContent = (index + 1).toString()
      cn.childNodes.item(1).textContent = u.nickname
      cn.childNodes.item(2).textContent = u.point.toString()

      fragment.appendChild(cn);
    })
    ap.appendChild(fragment)
  }
}