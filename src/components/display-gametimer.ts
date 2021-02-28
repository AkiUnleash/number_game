import { soundOperation } from '../util/sound'
import { Component } from './abstract-component'
import { ScreenGameover } from './screen-gameover'

export class DisplayTimer extends Component<HTMLDivElement, HTMLInputElement> {

  constructor(private count: number = 30) {
    super('timer', 'timer-screen')
    this.renderTimer()
  }

  renderTimer() {
    const countDown = () => {
      // カウント時間の描画
      this.element.textContent = `${--this.count} sec`

      // 秒数によっての条件を指定
      switch (this.count) {
        // ゲーム終了
        case 0:
          clearTimeout(setTimer);
          this.allremove()
          new ScreenGameover()
          break;
        // 文字をオレンジに変更
        case 10:
          this.element.classList.add('timer-screen__div--orange')
          break;
        // 文字を赤に変更
        case 3:
          this.element.classList.add('timer-screen__div--red')
          break;
      }
      // ３秒以下で効果音を出力
      if (this.count <= 3 && this.count >= 1) {
        soundOperation.countdown_play()
      }
    }

    // １秒毎に繰り返し処理
    const setTimer = setInterval(countDown.bind(undefined), 1000)
  }

  configure() {
  }

}