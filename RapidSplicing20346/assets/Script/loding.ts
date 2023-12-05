// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class loding extends cc.Component {

    @property({ type: cc.Node, tooltip: "节点" })
    pro: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    private num=0;

    onLoad () {
        this.num=0
        this.pro.getComponent(cc.ProgressBar).progress=0;
        this.schedule(this.progressFunc,0.5)
    }

    start () {

    }

    progressFunc(){
        this.num=this.num+0.25
        this.pro.getComponent(cc.ProgressBar).progress=this.num;
        if(this.num==1){
            cc.director.loadScene("choose");
            this.unschedule(this.progressFunc)
        }

    }
    // update (dt) {}
}
