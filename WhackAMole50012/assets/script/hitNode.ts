// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import { EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // onLoad () {}

    start () {
        // this.onCanMove()
       
    }

    onCanMove(){
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{
            this.node.setPosition(this.node.x + event.getDelta().x ,this.node.y + event.getDelta().y)
        })
        this.node.on(cc.Node.EventType.TOUCH_END,()=>{
            this.node.setPosition(710,-530)
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,()=>{
            this.node.setPosition(710,-530)
        })
       
        
    }
    //锤子动画
    hitAni(){
        cc.tween(this.node)
            .to(0.1,{scale:-42})
            .to(0.1,{scale:45})
            .to(0.1,{scale:0})
        this.start()
    }

    onCollisionEnter(other,self) {
        console.log("碰撞到了");
        if(other){
            this.hitAni()
            other['node'].destroy()
            EventMgr.Instance.Emit(EventId.desty)
            DataManager.addScord(10)
            cc.audioEngine.playEffect(DataManager.gameLayerScr[1],false)
        }
       
        // EventMgr.Instance.Emit(EventId.desty,other['node'])
        // console.log("ssssssssssss"); 
        
    }

    // update (dt) {}
}
