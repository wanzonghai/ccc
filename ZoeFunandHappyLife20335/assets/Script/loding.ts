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
    proNode: cc.Node = null;

 


    private num:number=0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.proNode.getComponent(cc.ProgressBar).progress=0;
        this.schedule(this.pro,0.5)

    }

    start () {

    }

    pro(){
        this.num=this.num+2.5,
        this.proNode.getComponent(cc.ProgressBar).progress=this.num/10;
        if(this.num==10){
            cc.director.loadScene("game");
            this.unschedule(this.pro)
        }
    }
    // update (dt) {}
}
