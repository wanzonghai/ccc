// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventId } from "./define";
import EventMgr from "./event/EventMgr";

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
        this.balckHot()
    }

    /**旋风缩放 */
    balckHot(){
        cc.tween(this.node).repeatForever(
            cc.tween()
                .to(0.2,{scale:1.1})
                .to(5,{angle:360})
                .to(0.2,{scale:1})
                .call(()=>{
                    this.node.angle =0
                })
               
        )
        .start()
            
    }

    

    // update (dt) {}
}
