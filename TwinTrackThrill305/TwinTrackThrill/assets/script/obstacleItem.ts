// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onCollisionEnter(content,self,other) {
        // console.log("content-----",content);
        // console.log("self-------",self);
        // console.log("other------",other);
        if(content.name == 'ball<BoxCollider>'){
            EventMgr.Instance.Emit(EventId.ResEvent,false)
            console.log("游戏结束");
        }
       
        
    }

    // update (dt) {}
}
