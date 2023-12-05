// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import Com from "./Com";

@ccclass
export default class GameCtr extends cc.Component {
  @property({ type: cc.Texture2D })
  private pic: cc.Texture2D = null;

  @property({ type: cc.Texture2D })
  private maskpic: cc.Texture2D = null;

  @property({ type: cc.Texture2D })
  private selectpic: cc.Texture2D = null;

  @property(cc.Sprite)
  private view: cc.Sprite = null;
  private textureRect: cc.Rect;
  private pieceTextureRect: cc.Rect;
  private pieceRect: cc.Rect;
  private viewRect: cc.Rect;
  private beginPosition: cc.Vec2;
  private pieces: cc.Node[] = [];
  private masks: cc.Node[] = [];
  private piecesNode: cc.Node;
  private masksNode: cc.Node;
  private effectsNode: cc.Node;
  private selectEffect: cc.Node;
  private selectBeforeTarget: cc.Node;

  @property({ type: cc.Node, tooltip: "节点" })
  helpNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "节点" })
  overNode: cc.Node = null;

  @property({ type: cc.Label, tooltip: "节点" })
  movetext: cc.Label = null;

  @property({ type: cc.Label, tooltip: "节点" })
  timetext: cc.Label = null;

  private datatime: number = 60; //00:00:60

  private movecount: number = 0;

  private isgame: boolean = false;

  btnEvent(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "play":
        this.startgame();
        break;
      case "btnback":
        cc.director.loadScene("start");
        break;
      case "btnres":
        cc.director.loadScene("choose");
        break;
      case "btnhelp":
        this.helpNode.active = true;
        break;
      case "clickclose":
        this.helpNode.active = false;
        break;
    }
  }

  startTimer() {
    this.datatime--;
    this.timetext.string = `00:00:${this.datatime}`;
    if (this.datatime == 0) {
      this.overFunc(false);
    }
  }
  startgame() {
    if (this.isgame) return;
    this.createPuzzlePlane(Com.data, Com.data);
    this.schedule(this.startTimer, 1);
    this.isgame = true;
  }

  // LIFE-CYCLE CALLBACKS:

  // update (dt) {}

  // 创建拼图面板
  private createPuzzlePlane(col: number, row: number) {
    this.textureRect = cc.rect(0, 0, this.pic.width, this.pic.height);
    this.pieceTextureRect = cc.rect(0, 0, this.pic.width / col, this.pic.height / row);
    this.viewRect = cc.rect(0, 0, this.view.node.width, this.view.node.height);
    this.pieceRect = cc.rect(0, 0, this.view.node.width / col, this.view.node.height / row);
    this.beginPosition = cc.v2(-this.viewRect.width / 2 + this.pieceRect.width / 2, this.viewRect.height / 2 - this.pieceRect.height / 2);

    this.view.node.removeAllChildren();

    this.piecesNode = new cc.Node("pieces");
    this.view.node.addChild(this.piecesNode);

    this.masksNode = new cc.Node("masks");
    this.view.node.addChild(this.masksNode);

    this.effectsNode = new cc.Node("effects");
    this.view.node.addChild(this.effectsNode);

    for (let x = 0; x < col; x++) {
      for (let y = 0; y < row; y++) {
        this.createblock(x, y);
        this.createMaskNode(x, y);
      }
    }

    this.piecesNode.children.forEach((element) => {
      this.pieces.push(element);
    });

    this.masksNode.children.forEach((element) => {
      this.masks.push(element);
    });

    this.randomBlock();
    //console.log(this.view)
  }

  // 创建拼图碎片
  private createblock(col: number, row: number) {
    let node = new cc.Node();
    let sprite = node.addComponent(cc.Sprite);
    this.piecesNode.addChild(node);

    let newPieceRect = cc.rect(col * this.pieceRect.width, row * this.pieceTextureRect.height, this.pieceTextureRect.width, this.pieceTextureRect.height);
    sprite.spriteFrame = new cc.SpriteFrame(this.pic, newPieceRect);
    sprite.node.name = "piece_" + col.toString() + row.toString();
    sprite.node.width = this.pieceRect.width;
    sprite.node.height = this.pieceRect.height;

    let x = this.beginPosition.x + col * this.pieceRect.width;
    let y = this.beginPosition.y - row * this.pieceRect.height;

    sprite.node.setPosition(x, y);
    sprite.node.on(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
  }

  // 创建遮罩层
  private createMaskNode(col: number, row: number) {
    let node = new cc.Node();
    let sprite = node.addComponent(cc.Sprite);
    this.masksNode.addChild(node);

    sprite.spriteFrame = new cc.SpriteFrame(this.maskpic);
    sprite.node.name = "mask_" + col.toString() + row.toString();
    sprite.node.width = this.pieceRect.width;
    sprite.node.height = this.pieceRect.height;

    let x = this.beginPosition.x + col * this.pieceRect.width;
    let y = this.beginPosition.y - row * this.pieceRect.height;

    sprite.node.setPosition(x, y);
  }

  // 创建选中标志
  private createSelectNode() {
    let node = new cc.Node();
    let sprite = node.addComponent(cc.Sprite);
    this.effectsNode.addChild(node);

    sprite.spriteFrame = new cc.SpriteFrame(this.selectpic);
    sprite.node.name = "select";
    sprite.node.width = this.pieceRect.width;
    sprite.node.height = this.pieceRect.height;

    this.selectEffect = node;
  }

  // 随机打乱拼图碎片
  private randomBlock() {
    for (let index = 0; index < this.masks.length / 2; index++) {
      let indexA = this.randomnum(0, this.masks.length);
      let indexB = this.randomnum(0, this.masks.length);
      this.exchangeBlock(indexA, indexB);
    }
  }

  // 交换拼图块
  private exchangeBlock(indexA: number, indexB: number) {
    let swapA = this.pieces[indexA];
    let swapB = this.pieces[indexB];
    let swapPositionA = this.pieces[indexA].getPosition();
    let swapPositionB = this.pieces[indexB].getPosition();

    swapA.setPosition(swapPositionB);
    swapB.setPosition(swapPositionA);
  }

  // 点击拼图块
  private onMouseUp(event: cc.Event.EventMouse) {
    //console.log(event.currentTarget)
    let swapA = event.currentTarget;
    let swapB = this.selectBeforeTarget;

    if (this.selectEffect == null) {
      this.createSelectNode();
    }

    this.selectEffect.opacity = 255;
    this.selectEffect.setPosition(swapA.getPosition());

    if (swapB != null) {
      let swapPositionA = swapA.getPosition();
      let swapPositionB = swapB.getPosition();

      swapA.setPosition(swapPositionB);
      swapB.setPosition(swapPositionA);
      this.selectBeforeTarget = null;
      this.selectEffect.opacity = 0;

      this.movecount++;
      this.movetext.string = this.movecount + "";

      this.checkSuccess();
    } else {
      this.selectBeforeTarget = event.currentTarget;
    }
  }

  // 检测是否完成拼图
  private checkSuccess() {
    let success = true;
    for (let index = 0; index < this.masks.length; index++) {
      if (this.masks[index].x != this.pieces[index].x || this.masks[index].y != this.pieces[index].y) {
        console.log("fail");
        success = false;
        continue;
      }
    }

    if (success) {
      console.log("success");
      this.overFunc(true);
    }
  }

  private overFunc(bol) {
    this.unschedule(this.startTimer);
    this.overNode.active = true;
    this.isgame = false;
    this.datatime = 60;
    this.movecount = 0;
    if (bol) {
      this.overNode.getChildByName("win").active = true;
      this.overNode.getChildByName("lose").active = false;
    } else {
      this.overNode.getChildByName("win").active = false;
      this.overNode.getChildByName("lose").active = true;
    }
  }

  // 随机数
  private randomnum(min: number, max: number) {
    return (Math.floor(Math.random() * 100000) % max) + min;
  }

  // update (dt) {}
}
