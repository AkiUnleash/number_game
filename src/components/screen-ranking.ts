import { Component } from './abstract-component'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'
import { User, firebasecontrol } from '../util/firebasecontrol'
import { ButtonTop } from './button-top'

export class ScreenRanking extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('ranking-template', 'app');
    this.configure();
    // トップボタンの表示
    new ButtonTop();
  }

  configure() {
    // スクリーン状況を設定
    stateOperation.setScreen('ranking')
    // スクリーン状況にあった音楽を再生
    soundOperation.now();
    // Firebaseからデータを取得し表示
    this.firebaseInport();
  }

  // Firebaseからデータを取得し表示
  async firebaseInport() {
    const rankdata = await firebasecontrol.inportdata()
    this.append(rankdata)
  }

  // データを取得し、エレメントの作成
  append(rankdata: User[]) {
    // OutputElement
    const ap = document.getElementById('ranking-body')!

    // InputElement
    let fragment = document.createDocumentFragment()!;
    const rankTemplate = document.getElementById('ranking-template-data')! as HTMLTemplateElement
    const importedNode = document.importNode(rankTemplate.content, true)
    const rankEl = importedNode.firstElementChild as HTMLElement;

    // エレメントの作成
    rankdata.forEach((u, index) => {
      const cn = rankEl.cloneNode(true);

      cn.childNodes.item(0).textContent = (index + 1).toString()
      cn.childNodes.item(1).textContent = u.nickname
      cn.childNodes.item(2).textContent = u.point.toString()

      fragment.appendChild(cn);
    })

    // 蓄積したエレメントを設定
    ap.appendChild(fragment)
  }
}