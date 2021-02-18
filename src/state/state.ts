interface State {
  question: string[];
}
export class StateManager {
  private static _instance: StateManager;
  private state: State
  private listeners: any[] = [];

  constructor() {
    this.state = { question: [] }
  }

  // シングルトン
  static getInstance() {
    if (!StateManager._instance) {
      StateManager._instance = new StateManager();
      // ... any one time initialization goes here ...
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
    return (this.state.question).join();
  }

  checkTheAnswer(answer: string) {
    if (answer === this.state.question[0]) {
      this.state.question.shift();
    }
    if (this.state.question.length === 0) {
      this.setQuestion()
    } else {
      for (const listenerFn of this.listeners) {
        listenerFn(this.state.question.slice())
      }
    }
  }
}

export const stateOperation = StateManager.getInstance() // do something with the instance...