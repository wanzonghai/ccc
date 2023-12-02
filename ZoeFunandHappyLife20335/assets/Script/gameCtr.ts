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
  @property({ type: cc.Node, tooltip: "节点" })
  helpNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  overNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  gameNode: cc.Node = null;

  @property({ type: cc.Prefab, tooltip: "节点" })
  ballpre: cc.Prefab = null;

  @property({ type: cc.Label, tooltip: "节点" })
  ciontext: cc.Label = null;

  @property({ type: cc.Label, tooltip: "节点" })
  timetext: cc.Label = null;

  private count: number = 54;

  private cion = 0;

  private isgame: boolean = false;

  private datatime = 60;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  creatprefab() {
    let arry = this.randomnum(54, 1, 54);
    for (let index = 0; index < arry.length; index++) {
      let node = cc.instantiate(this.ballpre);
      node.getComponent(itemCtr).init(arry[index]);
      node.parent = this.gameNode;
    }
  }

  //判断是否销毁

  restdes(node: cc.Node, num) {
    if (this.count == num) {
      this.cion = this.cion + 200;
      this.ciontext.string = this.cion + "";
      node.destroyAllChildren();
      this.count--;
      if (this.count <= 0) {
        this.gameover(true);
      }
    } else {
      this.gameover(false);
    }
  }

  startgame() {
    if (this.isgame) return;
    this.creatprefab();
    this.schedule(this.startTimer,1)

    this.isgame = true;
  }

  startTimer() {
   this.datatime--;
   this.timetext.string=`00:${this.datatime}`
   if(this.datatime<=0){
    this.gameover(false);
   }
  }

  btnEvent(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnhelp":
        this.helpNode.active = true;
        break;
      case "btnplay":
        this.startgame();
        break;
      case "btnres":
        this.overNode.active = false;
        this.ciontext.string = "0";
        this.timetext.string = "00:60";
        this.startgame();
        break;
      case "close":
        this.helpNode.active = false;
        break;
    }
  }

  gameover(bol) {
    this.overNode.active = true;
    this.gameNode.destroyAllChildren();

    this.unschedule(this.startTimer)

    this.isgame = false;

    this.count = 54;
    this.cion = 0;
    this.datatime=60;

    if (bol) {
      this.overNode.getChildByName("win").active = true;
      this.overNode.getChildByName("lose").active = false;
    } else {
      this.overNode.getChildByName("win").active = false;
      this.overNode.getChildByName("lose").active = true;
    }
  }

  randomnum(count, min, max) {
    let numbers = [];
    while (numbers.length < count) {
      let number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  // update (dt) {}
}
