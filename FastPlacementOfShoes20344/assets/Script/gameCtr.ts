// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import itemCtr from "./itemCtr";

@ccclass
export default class NewClass extends cc.Component {
  @property({ type: cc.Node, tooltip: "" })
  proNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  ChooseNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  xieNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  gameNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  helpNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  overNode: cc.Node = null;

  @property({ type: cc.Prefab, tooltip: "预制体" })
  itemPre: cc.Prefab = null;

  @property({ type: cc.Node, tooltip: "" })
  itemparent: cc.Node = null;

  // LIFE-CYCLE CALLBACKS:

  private arry;

  private datatime = 60;

  private num = 0; //记录

  private isgame: boolean = false;

  onLoad() {}
  start() {
    //更新进度条
    // this.proNode.getComponent(cc.ProgressBar).progress = this.datatime / 10;
    //this.proNode.getComponent(cc.ProgressBar).progress = 0;
    this.ChooseNode.active = true;
    this.gameNode.active = false;
  }

  chooseClick(event, data) {
    cc.log(data);
    this.ChooseNode.active = false;
    this.gameNode.active = true;
    this.generateRandomArray(29, Number(data));
  }

  //随机生成不重复的数组
  generateRandomArray(max, count) {
    this.arry = [];
    for (let i = 0; i < count; i++) {
      let num = Math.floor(Math.random() * max);
      while (this.arry.indexOf(num) !== -1) {
        num = Math.floor(Math.random() * max);
      }
      this.arry.push(num);
    }
    cc.log(this.arry);
    return this.arry;
  }

  createlem() {
    let porker1Node = cc.instantiate(this.itemPre);
    porker1Node.y = 64;
    porker1Node.x = -610;
    porker1Node.getComponent(itemCtr).init(this.arry);
    porker1Node.parent = this.itemparent;
  }

  addcoin() {
    this.num++;
    if (this.num == this.arry.length) {
      this.overgame(true);
    }
  }

  startTimer() {
    this.datatime--;
    //更新进度条
    this.proNode.getComponent(cc.ProgressBar).progress = this.datatime / 60;
    if (this.datatime <= 0) {
      this.overgame(false);
    }
  }

  startgame() {
    if (this.isgame) return;
    for (let index = 0; index < this.arry.length; index++) {
      this.xieNode.children[this.arry[index]].children[0].active = false;
    }
    this.schedule(this.createlem, 1, this.arry.length - 1);

    this.schedule(this.startTimer,1);
    this.isgame = true;
  }

  overgame(bol) {
    this.overNode.active=true;
    this.unschedule(this.createlem);
    this.unschedule(this.startTimer);
    this.proNode.getComponent(cc.ProgressBar).progress = 1;
    this.itemparent.destroyAllChildren();

    for (let index = 0; index < this.arry.length; index++) {
      this.xieNode.children[this.arry[index]].children[0].active = true;
    }
    this.num = 0;
    this.datatime = 60;
    this.isgame = false;
    if (bol) {
      this.overNode.getChildByName("win").active = true;
      this.overNode.getChildByName("lose").active = false;
    } else {
      this.overNode.getChildByName("win").active = false;
      this.overNode.getChildByName("lose").active = true;
    }
  }

  clickBtn(event: cc.Event) {
    let name = event.target.name;
    switch (name) {
      case "restgame":
        this.overNode.active=false;
        this.ChooseNode.active = true;
        this.gameNode.active = false;
        break;
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnplay":
        this.startgame();
        break;
      case "btnhelp":
         this.helpNode.active=true;
        break;
      case "closehelp":
         this.helpNode.active=false;
        break;
    }
  }

  //let pokerNum =Math.floor(Math.random() * 5) + 1 +"";
  // update (dt) {}
}
