import firebase from 'firebase/app';
import "firebase/firestore";

export type User = {
  nickname: string
  point: number
};

export class FirebaseControl {
  private static _instance: FirebaseControl;
  private _firebaseConfig = { projectId: "brain-training-ac1bd" };
  private _firebase: firebase.app.App
  private _db: firebase.firestore.Firestore

  constructor() {
    this._firebase = firebase.initializeApp(this._firebaseConfig)
    this._db = this._firebase.firestore()
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
    const userReference = firebase.firestore().collection('users').doc()
    await userReference.set(user)
    return userReference
  }

  // userデータ取得
  async inportdata() {
    const _users: User[] = []
    const snapshot = await this._db.collection('users').orderBy('point', "desc").limit(10).get();
    snapshot.forEach(doc => _users.push(doc.data() as User));
    return _users;
  }

  async rank(id: string) {
    let rank!: number;
    let r: number = 1;

    const snapshot = await this._db.collection('users').orderBy('point', 'desc').get();
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

// const cu = new FirebaseControl
// cu.inportdata().then((resolve) =>
//   console.log(resolve)
// );


