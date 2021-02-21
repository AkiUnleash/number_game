import { Component } from './abstract-component'
import { GameOverScreen } from './gameover'

export class TimerScreen extends Component<HTMLDivElement, HTMLInputElement> {

  constructor(private count: number = 30) {
    super('timer', 'timer-screen')
    this.renderTimer()
  }

  renderTimer() {
    const countDown = () => {

      this.element.textContent = `${--this.count} sec`

      switch (this.count) {
        case 0:
          clearTimeout(setTimer);
          this.allremove()
          new GameOverScreen()
          break;
        case 10:
          this.element.classList.add('timer-screen__div--orange')
          break;
        case 3:
          this.element.classList.add('timer-screen__div--red')
          break;
      }
    }

    const setTimer = setInterval(countDown.bind(undefined), 1000)
  }

  configure() {
  }

}