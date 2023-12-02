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
  @property({ type: cc.Prefab, tooltip: "节点" })
  itempre: cc.Prefab = null;

  @property({ type: cc.Node, tooltip: "节点" })
  itemParentNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  playNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  helpNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  overNode: cc.Node = null;

  @property({ type: cc.Label, tooltip: "节点" })
  tstext: cc.Label = null;

  @property({ type: cc.Label, tooltip: "节点" })
  timetext: cc.Label = null;

  @property({ type: cc.Label, tooltip: "节点" })
  scoretext: cc.Label = null;

  private arry = [];

  private randomnum = 0;

  private datatime = 90;

  private coin=0;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    //26个字母
    for (let index = 65; index < 91; index++) {
      this.arry.push(String.fromCharCode(index));
      if (this.arry.length == 26) {
        this.arry = this.shuffle(this.arry);
        cc.log(this.arry);
      }
    }
  }

  startgame() {
    this.creatitem();
    this.listetElemClick();

    this.playNode.active=false;
    this.schedule(this.startTimer, 1);
    this.schedule(this.randomelem,3,cc.macro.REPEAT_FOREVER,0.1);
  }

  startTimer() {
    this.datatime--;
    this.timetext.string=this.datatime+"S"
    if (this.datatime <= 0) {
      this.overgame(false);
    }
  }


  randomelem() {
    //随机
    this.randomnum = this.getRandomnum(0, 25);
    this.tstext.string = this.arry[this.randomnum];
  }

  overgame(bol) {
    this.unschedule(this.startTimer);
    this.unschedule(this.randomelem);
    this.overNode.active=true
    this.playNode.active=true;
    this.itemParentNode.destroyAllChildren();
    this.datatime=90;
    this.coin=0;
    if(bol){
      this.overNode.getChildByName("win").active=true;
      this.overNode.getChildByName("lose").active=false;
    }else{
      this.overNode.getChildByName("win").active=false;
      this.overNode.getChildByName("lose").active=true;
    }

  }

  clickBtn(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "restgame":
        this.overNode.active = false;
        this.timetext.string="90S";
        this.scoretext.string= "0";
        this.startgame();
        break;
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnplay":
        this.startgame();
        break;
      case "btnhelp":
         this.helpNode.active = true;
        break;
      case "closehelp":
          this.helpNode.active = false;
        break;
    }
  }

  /**生成随机数 */
  getRandomnum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  creatitem() {
    for (let index = 0; index < this.arry.length; index++) {
      let prefabNode = cc.instantiate(this.itempre);
      prefabNode.getComponent(itemCtr).inititem(this.arry[index]);

      let position = this.getRandomPosition(prefabNode);
      prefabNode.setPosition(position);
      this.itemParentNode.addChild(prefabNode);
    }
  }

  shuffle(array) {
    let res = [];
    let random;
    while (array.length > 0) {
      random = Math.floor(Math.random() * array.length);
      res.push(array[random]);
      array.splice(random, 1);
    }
    return res;
  }

  /**监听扑克点击 */
  listetElemClick() {
    this.itemParentNode.children.forEach((e, index) => {
      e.on(cc.Node.EventType.TOUCH_END, () => {
        cc.tween(e).to(0.1, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
        // e.getComponent(pokerContrl).showBorder(true)

        if(e.children[0].getComponent(cc.Label).string==this.arry[this.randomnum]){
          this.coin=this.coin+50;
          this.scoretext.string= this.coin+"";
          this.unschedule(this.randomelem);
          this.schedule(this.randomelem,3,cc.macro.REPEAT_FOREVER,0.1);
          if(this.coin==1000){
            this.overgame(true);
          }
        }
      });
    });
  }

  getRandomPosition(node) {
    let position;
    let isValidPosition = false;

    while (!isValidPosition) {
      let x = this.getRandomnum(-this.itemParentNode.width / 2 + node.width / 2, this.itemParentNode.width / 2 - node.width / 2);
      let y = this.getRandomnum(-this.itemParentNode.height / 2 + node.height / 2, this.itemParentNode.height / 2 - node.height / 2);
      position = cc.v2(x, y);
      isValidPosition = true;
      // 检查是否与其他预制体重叠
      this.itemParentNode.children.forEach((child) => {
        if (child !== node) {
          let distance = child.position.sub(position).mag();
          if (distance < (node.width + child.width) * 0.5) {
            isValidPosition = false;
          }
        }
      });
    }
    return position;
  }

  // update (dt) {}
}
