const listOfPoints = {
  match: 10,
  mismatch: -10,
  success: 90
}

interface State {
  question: string[];
  point: number[];
}

export class StateManager {
  private static _instance: StateManager;
  private state: State
  private listeners: any[] = [];

  constructor() {
    this.state = { question: [], point: [] }
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
    let q = (Math.floor(Math.random() * 100000 - 1)).toString()
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
      this.state.point.push(listOfPoints.match);
    } else {
      this.state.point.push(listOfPoints.mismatch);
    }
    if (this.state.question.length === 0) {
      this.setQuestion()
      this.state.point.push(listOfPoints.success);
    } else {
      for (const listenerFn of this.listeners) {
        listenerFn(this.state.question.slice())
      }
    }
    console.log(this.state.point);

  }
}

export const stateOperation = StateManager.getInstance() // do something with the instance...