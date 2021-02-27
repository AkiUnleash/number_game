import { Component } from './abstract-component'
import { ButtonStart } from './button-start'
import { ButtonTop } from './button-top'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'
import { firebasecontrol } from '../util/firebasecontrol'

export class ScreenGameover extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('gameover', 'app');
    stateOperation.setScreen('gameover');
    soundOperation.now();
    this.renderPoint();
    new ButtonStart('startbutton-potion', true);
    new ButtonTop();

    // Firebaseに登録
    const result = async () => {

      // ポイントを登録 
      const rankwrite = await firebasecontrol.createUser({
        nickname: stateOperation.getUsername(),
        point: parseInt(stateOperation.getPoint())
      })

      // 順位の確認
      const ranknumber = await firebasecontrol.rank(rankwrite.id);
      this.renderRank(ranknumber.toString())

    }
    result();

  }

  renderPoint() {
    const pointElemnt = document.getElementById('finish__point')! as HTMLElement
    pointElemnt.textContent = stateOperation.getPoint();
  }

  renderRank(ranknumber: string) {
    const pointElemnt = document.getElementById('finish__ranknumber')! as HTMLElement
    pointElemnt.textContent = ranknumber;
  }

  configure() {
  }

}