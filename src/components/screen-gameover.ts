import { Component } from './abstract-component'
import { ButtonStart } from './button-start'
import { ButtonTop } from './button-top'
import { stateOperation } from '../state/state'
import { soundOperation } from '../util/sound'
import { firebasecontrol } from '../util/firebasecontrol'

export class ScreenGameover extends Component<HTMLDivElement, HTMLInputElement> {

  constructor() {
    super('gameover', 'app');
    // スクリーン状態の設定
    stateOperation.setScreen('gameover');
    // スクリーン状況での音楽を再生
    soundOperation.now();
    // ポイントを表示
    this.renderPoint();
    // リスタートボタンの表示
    new ButtonStart('startbutton-potion', true);
    // トップボタンの表示
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

  // ポイントを表示
  renderPoint() {
    const pointElemnt = document.getElementById('finish__point')! as HTMLElement
    pointElemnt.textContent = stateOperation.getPoint();
  }

  // ランク表示
  renderRank(ranknumber: string) {
    const pointElemnt = document.getElementById('finish__ranknumber')! as HTMLElement
    pointElemnt.textContent = ranknumber;
  }

  configure() {
  }

}