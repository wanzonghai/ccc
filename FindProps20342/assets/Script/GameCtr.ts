// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import ItemNode from "./ItemNode";

@ccclass
export default class NewClass extends cc.Component {
  @property({ type: cc.Prefab, tooltip: "节点" })
  itemPre: cc.Prefab = null;

  @property({ type: cc.Node, tooltip: "节点" })
  itemparentNode: cc.Node[] = [];

  @property({ type: cc.Node, tooltip: "提示节点" })
  elemshow: cc.Node = null;

  @property({ type: cc.Label, tooltip: "时间" })
  timetext: cc.Label = null;

  @property({ type: cc.Node, tooltip: "结束节点" })
  overNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "帮助文档" })
  helpNode: cc.Node = null;

  /** 元素宽高 */
  private itemSize: cc.Size = cc.size(162, 140);

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  private isnum: number = 0; //记录下是要点击第几个

  private datatime = 60;

  private iscount: number = 0; //记录下是点了几次了

  private isgame: boolean = false; //是否正在游戏中

  clickBtn(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "restgame":
        this.overNode.active = false;
        this.startGame();
        break;
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnplay":
        this.startGame();
        break;
      case "btnhelp":
        this.helpNode.active=true;
        break;
      case "closehelp":
        this.helpNode.active=false;
        break;
    }
  }

  start() {}

  /**监听点击 */
  listetElemClick(Node: cc.Node) {
    Node.children.forEach((e, index) => {
      e.on(cc.Node.EventType.TOUCH_END, () => {
        cc.tween(e).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        //点击的图片名字
        this.isover(e.getComponent(cc.Sprite).spriteFrame.name, Node);
      });
    });
  }

  //进行判断
  isover(name, Node: cc.Node) {
    if (name == this.isnum) {
      this.iscount++;
      if (this.iscount == 5) {
        this.overgame(true);
        return;
      }
      //点击正确之后重新随机元素
      Node.destroyAllChildren();
      this.getRandomInt(Node);
    } else {
      this.overgame(false);
    }
  }

  /**
   * 开始倒计时
   */
  startTimer() {
    this.datatime--;
    this.timetext.string = this.datatime + "S";
    if (this.datatime <= 0) {
      //游戏结束
      this.overgame(false);
    }
  }

  //游戏结束
  overgame(bol) {
    this.unschedule(this.startTimer);
    this.elemshow.destroyAllChildren();
    this.itemparentNode[0].destroyAllChildren();
    this.itemparentNode[1].destroyAllChildren();
    this.itemparentNode[2].destroyAllChildren();
    this.timetext.string = "60S";
    this.datatime = 60;
    this.overNode.active = true;
    this.isgame = false;
    if (bol) {
      this.overNode.getChildByName("win").active = true;
      this.overNode.getChildByName("lose").active = false;
    } else {
      this.overNode.getChildByName("win").active = false;
      this.overNode.getChildByName("lose").active = true;
    }
  }

  //提示元素
  showelem() {
    this.isnum = Math.floor(Math.random() * 8) + 1;
    let porkerNode = cc.instantiate(this.itemPre);
    porkerNode.getComponent(ItemNode).init(`${this.isnum}`, this.itemSize);
    porkerNode.parent = this.elemshow;
  }

  startGame() {
    if (this.isgame) return;
    this.schedule(this.startTimer, 1);
    this.getRandomInt(this.itemparentNode[0]);
    this.getRandomInt(this.itemparentNode[1]);
    this.getRandomInt(this.itemparentNode[2]);
    this.showelem();
    this.isgame = true;
  }

  getRandomInt(Node: cc.Node) {
    let arrynum = [];
    while (arrynum.length < 8) {
      let num = Math.floor(Math.random() * 8) + 1;
      if (arrynum.indexOf(num) == -1) {
        arrynum.push(num);
        if (arrynum.length == 8) {
          this.createlem(arrynum, Node);
        }
      }
    }
  }

  createlem(array, Node: cc.Node) {
    for (let index = 0; index < array.length; index++) {
      let porkerNode = cc.instantiate(this.itemPre);
      porkerNode.getComponent(ItemNode).init(`${array[index]}`, this.itemSize);
      porkerNode.parent = Node;
      if (index == array.length - 1) {
        this.listetElemClick(Node);
      }
    }
  }

  // update (dt) {}
}
