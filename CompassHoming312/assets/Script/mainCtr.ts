// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  @property({ type: cc.Node, tooltip: "展示帮助文档" })
  showhelp: cc.Node = null;

  @property({ type: cc.Node, tooltip: "对错显示" })
  showchoose: cc.Node = null;

  @property({ type: cc.Label, tooltip: "时间显示" })
  timeText: cc.Label = null;

  @property({ type: cc.Label, tooltip: "时间显示" })
  timeText2: cc.Label = null;

  @property({ type: cc.Label, tooltip: "分数显示" })
  cointext: cc.Label = null;

  @property({ type: cc.Node, tooltip: "进度条" })
  proNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "指向" })
  timeNode: cc.Node = null;

  @property({ type: cc.Node, tooltip: "" })
  overNode: cc.Node = null;

  // onLoad () {}

  private datatime: number = 30;

  private datatime2: number = 3;

  private num: number = 0;

  private coin: number = 0;

  private isgame: boolean = false;

  start() {}

  btnEvent(event: cc.Event) {
    let name = event.target.name;

    switch (name) {
      case "backbtn":
        cc.director.loadScene("loding");
        break;
      case "helpbtn": //
        this.showhelp.active = true;
        break;
      case "soundbtn":
        break;
      case "playbtn":
        this.begingame();
        break;
      case "closehelp":
        this.showhelp.active = false;
        break;
      case "restbtn":
        this.overNode.active=false;
        this.timeText.string = "30S";
        this.cointext.string = "0";
        this.begingame();
        break;
    }
  }

  begingame() {
    this.schedule(this.startTimer, 1);
    this.randomnum();
    this.isgame = true;
    this.datatime = 30;
    this.datatime2 = 3;
  }

  clickchoose(event, data) {
    if (this.isgame == false) return;
    this.showchoose.active = true;
    cc.log(this.num);
    if (this.num == data) {
      this.unschedule(this.startTimer2);
      this.randomnum();
      this.coin = this.coin + 300;
      this.showchoose.children[0].active = true;
      this.showchoose.children[1].active = false;
    } else {
      this.coin = this.coin - 200;
      this.showchoose.children[0].active = false;
      this.showchoose.children[1].active = true;
    }
    this.cointext.string = this.coin + "";

    if (this.coin >= 3000) {
      this.overgame(true);
    }
  }

  randomnum() {
    //随机方向
    this.num = Math.floor(Math.random() * 4) + 1;
    this.datatime2 = 3;
    if (this.num == 1) {
      this.timeNode.angle = 0;
    } else if (this.num == 2) {
      this.timeNode.angle = 90;
    } else if (this.num == 3) {
      this.timeNode.angle = 180;
    } else if (this.num == 4) {
      this.timeNode.angle = 270;
    }
    this.schedule(this.startTimer2, 1);
  }

  startTimer2() {
    this.datatime2--;
    this.timeText2.string = this.datatime2 + "S";
    if (this.datatime2 <= 0) {
      this.randomnum();
    }
  }

  startTimer() {
    this.datatime--;
    this.timeText.string = this.datatime + "S";
    //更新进度条
    this.proNode.getComponent(cc.ProgressBar).progress = this.datatime / 30;

    if (this.datatime <= 0) {
      this.overgame(false);
    }
  }

  overgame(bol) {
    this.unschedule(this.startTimer);
    this.unschedule(this.startTimer2);
    this.showchoose.active = false;
    this.overNode.active=true;
    this.coin=0;
    if(bol){
      this.overNode.getChildByName("win").active=true;
      this.overNode.getChildByName("lose").active=false;

    }else{
      this.overNode.getChildByName("win").active=false;
      this.overNode.getChildByName("lose").active=true;
    }
    this.isgame = false;
    this.proNode.getComponent(cc.ProgressBar).progress = 1;
  }

  // update (dt) {}
}
