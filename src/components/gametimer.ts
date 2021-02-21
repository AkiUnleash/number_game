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
      if (this.count === 0) {
        clearTimeout(setTimer);
        this.allremove()
        new GameOverScreen()
      }
    }

    const setTimer = setInterval(countDown.bind(undefined), 1000)
  }


  configure() {
  }

}