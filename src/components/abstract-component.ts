export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string
  ) {
    // 出力先の読み出し。
    this.hostElement = document.getElementById(hostElementId)! as T

    // 出力元(Template)の取得
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement

    // ノード取得
    const importedNode = document.importNode(this.templateElement.content, true)

    // 最初のエレメントを取得する
    this.element = importedNode.firstElementChild as U;

    // 表示
    this.attach()
  }
  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }
}