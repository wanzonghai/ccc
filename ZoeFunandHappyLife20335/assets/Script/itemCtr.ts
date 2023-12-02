// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import gameCtr from "./gameCtr";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    private num;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    }

    init(num){
        this.num=num;
        this.label.string=num+"";
    }

    onMouseDown(event) {
       cc.find("Canvas").getComponent(gameCtr).restdes(this.node,this.num)

       this.node.off(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    }

    // update (dt) {}
}
