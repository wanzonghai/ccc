// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import game from "./game";

@ccclass
export default class NewClass extends cc.Component {
  @property({ type: cc.SpriteFrame, tooltip: "" })
  pci: cc.SpriteFrame[] = [];
  private speed = 150;

  private count = 0;

  
  private isDragging: boolean = false;

  private offset;

  private posy;


  // LIFE-CYCLE CALLBACKS:

   onLoad () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
   }

  Changeimg(num) {
    this.node.getComponent(cc.Sprite).spriteFrame = this.pci[num];
    this.count = num;
  }

  onCollisionEnter(other, self) {


    if(other.tag == 1){
      this.node.off(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
      this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
      if(this.count==0){
        cc.find("Canvas").getComponent(game).addcoin()
      }else{
        cc.find("Canvas").getComponent(game).gameover(false)
      }
    }
    if(other.tag == 2){
      this.node.off(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
      this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
      if(this.count==1){
        cc.find("Canvas").getComponent(game).addcoin()
      }else{
        cc.find("Canvas").getComponent(game).gameover(false)
      }
    }
  }


  onMouseDown(event) {
    this.offset = this.node.position.sub(event.getLocation());
    this.isDragging = true; // 鼠标按下时标识节点开始被拖动
    this.posy=this.node.position.y
  }

  onMouseMove(event) {
    if (this.isDragging) {
      this.node.position = event.getLocation().add(this.offset);
      this.node.y = this.posy
    }
  }

  onMouseUp(event) {
    if (this.isDragging) {
      this.isDragging = false; // 鼠标抬起时标识节点停止被拖
    }
  }


  update(dt) {
    this.node.y -= this.speed * dt;
    if (this.node.y < -this.node.parent.height / 2 - this.node.height / 2) {
      this.node.destroy(); // 超出屏幕后销毁物体
    }
  }
  // update (dt) {}
}
