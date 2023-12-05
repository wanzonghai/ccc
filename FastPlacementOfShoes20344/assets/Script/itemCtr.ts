// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import gameCtr from "./gameCtr";

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  private isDragging;

  private offset;

  private pos;

  private speed = 150;

  private arr;

  public init(arry) {
    this.arr = arry;
  }

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
    this.isDragging = false; // 新增这一行，用于标识节点是否正在被拖动
  }

  start() {}

  onMouseDown(event) {
    this.offset = this.node.position.sub(event.getLocation());
    this.pos = this.node.position;
    this.isDragging = true; // 鼠标按下时标识节点开始被拖动
  }

  onMouseMove(event) {
    if (this.isDragging) {
      this.node.position = event.getLocation().add(this.offset);
    }
  }

  onMouseUp(event) {
    if (this.isDragging) {
      for (let index = 0; index < this.arr.length; index++) {
        if (cc.find("Canvas/main/bg2").children[this.arr[index]].getBoundingBoxToWorld().contains(event.getLocation())) {
          this.node.destroy();
          cc.find("Canvas/main/bg2").children[this.arr[index]].children[0].active=true;
          cc.find("Canvas").getComponent(gameCtr).addcoin();
        }else{
            this.node.position = this.pos;
            this.isDragging = false; // 鼠标抬起时标识节点停止被拖动
          }
      }
    }
  }

  update(dt) {
    if (this.isDragging == false) {
      this.node.x += this.speed * dt;
      if (this.node.x > this.node.parent.width / 2 + this.node.width / 2) {
        this.node.destroy(); // 超出屏幕后销毁物体
        cc.find("Canvas").getComponent(gameCtr).overgame(false);
        return
      }
    }
  }
}
