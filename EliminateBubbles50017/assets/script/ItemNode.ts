// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { ItemType } from "./util/define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemNode extends cc.Component {

    public pokerNum:string = null
    public pokerType:ItemType = null

    start () {

    }
    
    /**初始icon */
    public init(num:string, itemSize: cc.Size){
        console.log("num=======>",num);
        this.pokerNum = num
        let path = `${num}`;
        cc.resources.load(path, cc.SpriteFrame,(err, sp: cc.SpriteFrame) =>{
            if(err){
                console.log("加载失败:", path);
            }else{
                this.node.getComponent(cc.Sprite).spriteFrame = sp
                this.scheduleOnce(() => {
                    this.node.setContentSize(itemSize)
                })
            }
        })
    }

    // update (dt) {}
}
