interface State {
  question: string[];
}
export class StateManager {
  private static _instance: StateManager;
  private state: State
  constructor() {
    this.state = { question: [] }
  }
  static getInstance() {
    if (!StateManager._instance) {
      StateManager._instance = new StateManager();
      // ... any one time initialization goes here ...
    }
    return StateManager._instance;
  }
  setQuestion() {
    let q = (Math.floor(Math.random() * 100000 - 1)).toString()
    this.state.question = q.toString().split('')
  }
  getQuestion() {
    return (this.state.question).join();
  }
  checkTheAnswer(answer: string) {
    if (answer === this.state.question[0]) {
      this.state.question.shift();
    }
  }
}

export const stateOperation = StateManager.getInstance() // do something with the instance...