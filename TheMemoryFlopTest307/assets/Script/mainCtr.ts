// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property({ type: cc.Node, tooltip: "帮助展示节点" })
  helpText: cc.Node = null;

  @property({ type: cc.Node, tooltip: "牌节点" })
  cardNode: cc.Node = null;


  @property({ type: cc.Node, tooltip: "" })
  maskNode: cc.Node = null;


  @property({ type: cc.Node, tooltip: "节点" })
  overNode: cc.Node = null;

  @property({ type: cc.SpriteFrame, tooltip: "图片" })
  picspr: cc.SpriteFrame[] = [];


  
  @property({ type: cc.Label, tooltip: "分数" })
  textcoin: cc.Label = null;


  
  @property({ type: cc.Label, tooltip: "时间" })
  texttime: cc.Label = null;




  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  private numary = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3];

  private clicknum: number = 0;

  private elemnum: number = 0; //上次是点的第几个


  private datatime: number=30;

  private coin: number=0;

  private isgame:boolean=false;


  start() {
    this.maskNode.active=true
    
  }



  begingame() {
    if(this.isgame)return
    this.randSort1(this.numary);
    this.schedule(this.startTimer,1);
    this.maskNode.active=false
    this.isgame=true;
  }



  //打乱数组顺序
  randSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
      let rand = parseInt(String(Math.random() * arr.length));
      let temp = arr[rand];
      arr[rand] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  clickcard(event, data) {
    cc.log(data);
    this.clicknum++;
    this.cardNode.children[data - 1].children[1].active = false;
    this.cardNode.children[data - 1].children[0].active = true;
    this.cardNode.children[data - 1].children[0].getComponent(cc.Sprite).spriteFrame = this.picspr[this.numary[data - 1]-1];
    this.cardNode.children[data - 1].getComponent(cc.Button).interactable = false; //禁用点击

    if (this.clicknum % 2 == 0) {
      if (this.numary[data - 1] == this.numary[this.elemnum - 1]) {
        this.coin=this.coin+100
        this.textcoin.string=this.coin+"";
        if(this.coin==800){
          this.overgame(true)
        }
      } else {
        this.maskNode.active=true
        this.scheduleOnce(()=>{
          this.cardNode.children[data - 1].children[1].active = true;
          this.cardNode.children[this.elemnum - 1].children[1].active = true;
          this.cardNode.children[data - 1].children[0].active = false;
          this.cardNode.children[this.elemnum - 1].children[0].active = false;
          this.cardNode.children[data - 1].getComponent(cc.Button).interactable = true; //点击打开
          this.cardNode.children[this.elemnum - 1].getComponent(cc.Button).interactable = true; //点击打开
          this.elemnum = data; //记录下这次是点的第几个
          this.maskNode.active=false
        },0.5)
      }
    }else{
      this.elemnum = data; //记录下这次是点的第几个
    }
  }


  startTimer() {
    this.datatime--;
    this.texttime.string = this.datatime + "S";
    if (this.datatime <= 0) {
      //游戏结束
      this.overgame(false);
    }
  }

  overgame(bol){
    cc.log("结束")
    this.unschedule(this.startTimer);
    this.overNode.active=true
    this.isgame=false;
    this.datatime=30;
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
        this.texttime.string = "30S";
        this.textcoin.string="0";
        this.overNode.active=false
        for (let index = 0; index <  this.cardNode.children.length; index++) {
          this.cardNode.children[index].children[0].active = false;
          this.cardNode.children[index].children[1].active = true;
          this.cardNode.children[index].getComponent(cc.Button).interactable = true; //点击打开
        }
        this.begingame();
        break;
      case "btnback":
        cc.director.loadScene("startgame");
        break;
      case "btnplay":
        this.begingame();
        break;
      case "btnhelp":
        this.helpText.active=true;
        break;
      case "closehelp":
        this.helpText.active=false;
        break;
    }
  }

  // update (dt) {}
}
