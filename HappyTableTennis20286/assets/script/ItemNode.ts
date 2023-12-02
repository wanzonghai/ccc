// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import { EventId, ItemType } from "./util/define";
import EventMgr from "./util/event/EventMgr";
import util from "./util/util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemNode extends cc.Component {

    @property(cc.Sprite)
    imgSp:cc.Sprite = null;

    @property([cc.SpriteFrame])
    imgSpArr:cc.SpriteFrame[] = []

    //球类
    public itemId:number = 0

    private movingTime:number = 0

    public itemIndex:number = -1


    start () {

    }
    
    /**初始化 */
    public init(num: number,i:number){
        this.itemId = num;
        this.itemIndex = i
        this.imgSp.spriteFrame = this.imgSpArr[num]
        // this.moving(fishZone,startNode)
    }
    moving(fishZone:cc.Node,startNode:cc.Node){
        let time = util.getRandom(1,3)
        let pos = this.generateRandomPoint(fishZone)
        let dir:number = 1
        if(pos.x > this.node.x){
            dir = -1
        }else{
            dir = 1
        }
        this.node.scaleX = dir
        cc.tween(this.node)
            .to(time,{position:pos})
            .call(()=>{
                this.movingTime +=1
                if(this.movingTime < 3){
                    this.moving(fishZone,startNode)
                }else{
                    this.GoingDestoy(startNode)
                }
            })
            .start()
    }
    GoingDestoy(ovingNode:cc.Node){
        cc.tween(this.node)
        .to(1,{position:ovingNode.position})
        .call(()=>{
            this.node.destroy()
        })
        .start()
    }

    public generateRandomPoint(node:cc.Node){
        let halfWidth = node.width/2 
        let halfHeight = node.height/2
        let x = util.getRandom(node.position.x - halfWidth,node.position.x + halfWidth + 1)
        let y = util.getRandom(node.position.y - halfHeight,node.position.y + halfHeight + 1)
        return cc.v3(x,y,0)
    }



    // update (dt) {}
}
