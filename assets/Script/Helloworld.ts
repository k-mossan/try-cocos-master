const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  text = "hello";

  start(): void {
    // init logic
    this.label.string = this.text;
    const test = 0;
    cc.log(test);
    {a = b*};;
  }
}
