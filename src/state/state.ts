const listOfPoints = {
  match: 100,
  mismatch: -100,
  success: 1000
}

interface State {
  question: string[];
  point: number;
  username: string;
  sound: boolean;
  scene: string;
}

export class StateManager {
  private static _instance: StateManager;
  private state: State
  private listeners: any[] = [];

  constructor() {
    this.state = {
      question: [],
      point: 0,
      username: '',
      sound: false,
      scene: '',
    }
  }

  // シングルトン
  static getInstance() {
    if (!StateManager._instance) {
      StateManager._instance = new StateManager();
    }
    return StateManager._instance;
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  setQuestion() {
    let q = (Math.floor(Math.random() * 100000 - 1)).toString().padStart(5, '0')
    this.state.question = q.toString().split('')
    for (const listenerFn of this.listeners) {
      console.log(this.listeners);
      listenerFn(this.state.question.slice())
    }
  }

  getQuestion() {
    return this.state.question;
  }

  checkTheAnswer(answer: string) {

    if (answer === this.state.question[0]) {
      this.state.question.shift();
      this.state.point += listOfPoints.match;
    } else {
      this.state.point += listOfPoints.mismatch;
    }

    if (this.state.question.length === 0) {
      this.setQuestion()
      this.state.point += listOfPoints.success;
    }

    for (const listenerFn of this.listeners) {
      listenerFn(this.state.question.slice(), 'question')
      listenerFn(this.state.point, 'point')
    }
  }

  getPoint() {
    return this.state.point.toString();
  }

  setUsername(username: string) {
    this.state.username = username;
  }

  getUsername() {
    return this.state.username;
  }

  getSound() {
    return this.state.sound;
  }

  setSound() {
    this.state.sound = !this.state.sound
  }

  getScene() {
    return this.state.scene;
  }

  setScreen(scene: string) {
    this.state.scene = scene
  }
}

export const stateOperation = StateManager.getInstance() // do something with the instance...