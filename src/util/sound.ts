import soundOpening from '../assets/mp3/opning.mp3';
import soundCountdown from '../assets/mp3/countdown.mp3';
import soundGameplay from '../assets/mp3/gameplay.mp3'
import soundGameover from '../assets/mp3/gameover.mp3'
import tapNumber from '../assets/mp3/tap.mp3';
import tapButton from '../assets/mp3/button.mp3'
import { stateOperation } from '../state/state';

class SoundControl {
  private static _instance: SoundControl;
  private audio: HTMLAudioElement
  private sound1: HTMLAudioElement
  private sound2: HTMLAudioElement

  constructor() {
    this.audio = new Audio()
    this.sound1 = new Audio()
    this.sound2 = new Audio()
  }

  // シングルトン
  static getInstance() {
    if (!SoundControl._instance) {
      SoundControl._instance = new SoundControl();
    }
    return SoundControl._instance;
  }

  opning() {
    this.audio.src = soundOpening
    if (stateOperation.getSound()) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  opning_stop() {
    this.audio.src = soundOpening
    this.audio.pause()
  }

  gameplay() {
    this.audio.src = soundGameplay
    if (stateOperation.getSound()) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  gameplay_stop() {
    this.audio.src = soundGameplay
    this.audio.pause()
  }

  tap_number_play() {
    if (stateOperation.getSound()) {
      this.sound1.src = tapNumber
      this.sound1.play()
    }
  }

  tap_button_play() {
    if (stateOperation.getSound()) {
      this.sound1.src = tapButton
      this.sound1.play()
    }
  }

  countdown_play() {
    if (stateOperation.getSound()) {
      this.sound2.src = soundCountdown
      this.sound2.play()
    }
  }

  gameover() {
    this.audio.src = soundGameover
    if (stateOperation.getSound()) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  gameover_stop() {
    this.audio.src = soundGameover
    this.audio.pause()
  }

  now() {
    switch (stateOperation.getScene()) {
      case 'start':
        this.opning()
        break;
      case 'standby':
        this.opning_stop()
        break;

      case 'gameplay':
        this.gameplay()
        break;
      case 'gameover':
        this.gameplay_stop()
        this.gameover()
        break;
      case 'ranking':
        break;
      case 'credit':
        this.opning_stop()
        break;
    }
  }
}

export const soundOperation = SoundControl.getInstance() // do something with the instance...