// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import redCrr from "./redCrr";

@ccclass
export default class game extends cc.Component {
  @property({ type: cc.Node, tooltip: "" })
  OverNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  helpNode: cc.Node = null;

  @property({ type: cc.Prefab, tooltip: "" })
  ball: cc.Prefab = null;

  @property({ type: cc.Node, tooltip: "" })
  game: cc.Node = null;

  @property({ type: cc.Label, tooltip: "" })
  counttext: cc.Label = null;

  private countnum = 0;

  private isgame=false;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.director.getCollisionManager().enabled = true;
  }

  start() {}

  stargame() {
    if(this.isgame)return
    this.schedule(this.createlem, 1.5);
    this.isgame=true
  }

  createlem() {
    let node = cc.instantiate(this.ball);
    let randomNumber = Math.random() < 0.5 ? 0 : 1;
    node.getComponent(redCrr).Changeimg(randomNumber);
    node.parent = this.game;
    node.y = this.game.height / 2 + node.height / 2;
  }

  addcoin() {
    this.countnum++;
    this.counttext.string = this.countnum + "";
    if(this.countnum>=30){
        this.gameover(true)
    }
  }

  gameover(bol) {
    this.OverNode.active = true;
    this.game.destroyAllChildren()
    this.countnum = 0;
    this.isgame=false
    this.unschedule(this.createlem);
    if (bol) {
      this.OverNode.getChildByName("win").active = true;
      this.OverNode.getChildByName("lose").active = false;
    } else {
      this.OverNode.getChildByName("win").active = false;
      this.OverNode.getChildByName("lose").active = true;
    }
  }

  btnClick(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "btnplay":
        this.stargame()
        break;
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnres":
        this.OverNode.active = false;
        this.countnum = 0;
        this.counttext.string = this.countnum + "";
        this.stargame()
        break;
      case "btnassist":
        this.helpNode.active = true;
        break;
      case "close":
        this.helpNode.active = false;
        break;
    }
  }

  // update (dt) {}
}
