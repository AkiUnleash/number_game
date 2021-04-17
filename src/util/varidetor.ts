export class Validator<T extends string | number> {
  private _message: string
  constructor(private _value: T) {
    this._message = ''
  }

  // エラーメッセージの取得
  getErrorMessage() {
    return this._message
  }

  // 値の有無
  required() {
    if (typeof this._value === 'string') {
      if (this._value.trim() === '') {
        this._message = '必ず入力してください。'
        return false;
      } else {
        this._message = ''
        return true;
      }
    }
  }

  // 最大文字数
  Maxlength(Maxlength: number) {
    if (typeof this._value === 'string') {
      if (this._value.length > Maxlength) {
        this._message = `文字数は${Maxlength}文字までです。`
        return false;
      } else {
        this._message = ''
        return true;
      }
    }
  }
}