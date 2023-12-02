// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import DataManager from "./DataManager";
import GameLayer from "./GameLayer";
import { ItemType } from "./util/define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GenNode extends cc.Component {

    @property([cc.SpriteFrame])
    iconSpArray: cc.SpriteFrame[] = [];

    public eggType:ItemType = ItemType.None

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.director.getCollisionManager().enabled = true
    }

    //初始化
    init(type:ItemType){
        this.node.getComponent(cc.Sprite).spriteFrame = this.iconSpArray[type - 1]
        this.eggType = type
    }

    protected onDestroy(): void {
       
        
    }
}

