// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class touchend_restart_Script_Class extends cc.Component {

    onLoad() {

        //cc.game.addPersistRootNode(this.node);

    }

    start() {
        this.node.on("touchend", this.onTouchend, this);
    }


    onTouchend() {
        cc.game.restart();
    }


    // update (dt) {}
}
