// 採点基準
const listOfPoints = {
  match: 100,
  mismatch: -100,
  success: 1000
}

// ステート(記録)
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

  // 
  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  // 問題の生成
  setQuestion() {
    let q = (Math.floor(Math.random() * 100000 - 1)).toString().padStart(5, '0')
    this.state.question = q.toString().split('')
    for (const listenerFn of this.listeners) {
      listenerFn(this.state.question.slice())
    }
  }

  // 問題の取得
  getQuestion() {
    return this.state.question;
  }

  // 答え合わせ
  checkTheAnswer(answer: string) {

    // 問題の一致／不一致
    if (answer === this.state.question[0]) {
      this.state.question.shift();
      this.state.point += listOfPoints.match;
    } else {
      this.state.point += listOfPoints.mismatch;
    }

    // 全問正解時、再度問題を生成し表示
    if (this.state.question.length === 0) {
      this.setQuestion()
      this.state.point += listOfPoints.success;
      for (const listenerFn of this.listeners) {
        listenerFn([], 'number')
      }
    }

    // 問題及びポイントの表示
    for (const listenerFn of this.listeners) {
      listenerFn(this.state.question.slice(), 'question')
      listenerFn(this.state.point, 'point')
    }
  }

  // ポイントの取得
  getPoint() {
    return this.state.point.toString();
  }

  // ポイントの初期化
  setPointInitialize() {
    this.state.point = 0;
  }

  // ユーザー名の設定
  setUsername(username: string) {
    this.state.username = username;
  }

  // ユーザー名の取得
  getUsername() {
    return this.state.username;
  }

  // サウンドの状況有無(音楽有り=True/無し=False)
  getSound() {
    return this.state.sound;
  }

  // サウンドの切り替え(音楽有り=True/無し=False)
  setSound() {
    this.state.sound = !this.state.sound
  }

  // シーン(スクリーン)の取得
  getScene() {
    return this.state.scene;
  }

  // シーン(スクリーン)の取得
  setScreen(scene: string) {
    this.state.scene = scene
  }
}

export const stateOperation = StateManager.getInstance() // do something with the instance...