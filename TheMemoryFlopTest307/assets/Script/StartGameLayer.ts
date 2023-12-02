// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class startGameLayer extends cc.Component {
  @property({ type: cc.Node, tooltip: "协议展示节点" })
  showText: cc.Node = null;

  @property({ type: cc.Node, tooltip: "勾选节点" })
  showTrue: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  ToggleNode: cc.Node = null;


  
  private pos:cc.Vec3;
  /**
   * 游戏内按钮绑定事件
   */

  protected start(): void {
   this.pos= this.ToggleNode.position.clone();
  }


  btnEvent(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "startBtn":
        if (this.ToggleNode.getComponent(cc.Toggle).isChecked) {
          cc.director.loadScene("main");
        } else {
          cc.Tween.stopAllByTarget(this.ToggleNode);
          this.ToggleNode.position=this.pos;
          cc.tween(this.ToggleNode)
            .by(0.1, { position: cc.v3(-10, 0) })
            .by(0.1, { position: cc.v3(20, 0) })
            .by(0.1, { position: cc.v3(-10, 0) })
            .start();
        }
        break;
      case "clickuse": //点击用户协议
        this.showText.active = true;
        break;
      case "clickclose":
        this.showText.active = false;
        break;
    }
  }

}
