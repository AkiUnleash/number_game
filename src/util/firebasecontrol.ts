import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/analytics";
import { stateOperation } from '../state/state';

// ユーザー型
export type User = {
  nickname: string
  point: number
};

export class FirebaseControl {
  private static _instance: FirebaseControl;
  private _firebaseConfig = { projectId: "brain-training-ac1bd" };
  private _firebase: firebase.app.App
  private _analytics: firebase.analytics.Analytics
  private _db: firebase.firestore.Firestore
  private _collection: string

  constructor() {
    this._firebase = firebase.initializeApp(this._firebaseConfig)
    this._analytics = firebase.analytics()
    this._db = this._firebase.firestore()
    this._collection = 'users'
  }

  collectionSelect() {
    switch (stateOperation.getMode()) {
      case 'nomal':
        this._collection = 'users'
        break;
      case 'kids':
        this._collection = 'kids_users'
        break;
    }
  }

  // シングルトン
  static getInstance() {
    if (!FirebaseControl._instance) {
      FirebaseControl._instance = new FirebaseControl();
    }
    return FirebaseControl._instance;
  }

  // userデータ登録
  async createUser(user: User) {
    this.collectionSelect()

    const userReference = firebase.firestore().collection(this._collection).doc()
    await userReference.set(user)
    return userReference
  }

  // userデータ取得
  async inportdata() {
    this.collectionSelect()

    const _users: User[] = []
    const snapshot = await this._db.collection(this._collection).orderBy('point', "desc").limit(10).get();
    snapshot.forEach(doc => _users.push(doc.data() as User));
    return _users;
  }

  // 登録結果のランクを表示
  async rank(id: string) {
    this.collectionSelect()

    let rank!: number;
    let r: number = 1;

    const snapshot = await this._db.collection(this._collection).orderBy('point', 'desc').get();
    snapshot.forEach((doc) => {
      if (doc.id === id) {
        rank = r
      } else {
        r++
      }
    });

    return rank;
  }
}

export const firebasecontrol = FirebaseControl.getInstance() // do something with the instance...
