// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import { EventId } from "./util/define";
import EventMgr from "./util/event/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;

    @property([cc.SpriteFrame])
    imgArraySp: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    public cardType:number = -1

    //移动速度
    time:number = 5

    start () {
        
    }

    //初始化card
    init(type:number){
        this.cardType = type
        this.img.getComponent(cc.Sprite).spriteFrame = this.imgArraySp[type]
        //开始移动
        this.moving()
    }
    moving(){
        cc.tween(this.node)
            .to(this.time,{position:cc.v3(this.node.position.x , -620,0)})
            .call(()=>{
                if(DataManager.obsType == 0){
                    if(this.cardType == 0 || this.cardType == 2 || this.cardType == 4){
                        console.log("游戏失败");
                        EventMgr.Instance.Emit(EventId.ResEvent,false)
                        this.node.destroy()
                    }else{
                        this.node.destroy()
                    }
                }else{
                    if(this.cardType == 1 || this.cardType == 3 || this.cardType == 5){
                        console.log("游戏失败");
                        EventMgr.Instance.Emit(EventId.ResEvent,false)
                        this.node.destroy()
                    }else{
                        this.node.destroy()
                    }
                }
                
            })
            .start()
    }

    // update (dt) {}
}
