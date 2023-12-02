// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import GameLayer from "./GameLayer";
import { DirectionType } from "./util/define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class icon extends cc.Component {

    @property([cc.SpriteFrame])
    iconSp: cc.SpriteFrame[] = [];

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    public Type:number = -1

    public posIndex:number = 0

    public isFrist:boolean = true
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    public init(type:number,Reference:cc.Node){
        this.Type = type
        this.node.getComponent(cc.Sprite).spriteFrame = this.iconSp[type]
        this.node.setPosition(Reference.children[this.posIndex].position)
        this.moving(Reference)
        //绑定滑动事件
        this.listenTouch()
    }

    moving(Reference:cc.Node){
        if(this.posIndex < Reference.children.length - 1){
            this.posIndex += 1
        }else{
           this.isFrist = false
           this.node.stopAllActions()
           this.node.destroy()
        } 
        cc.tween(this.node)
            .to(0.6,{position:Reference.children[this.posIndex].position})
            // .delay(0.1)
            .call(()=>{
                this.moving(Reference)
            })
            .start()
    }

    //Touch事件
    listenTouch(){
        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            this.node["startPos"] = cc.v2(event.getLocation().x, event.getLocation().y)
         })
         this.node.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>{
            let statPos =  this.node["startPos"]
            let endPos = cc.v2(event.getLocation().x,event.getLocation().y)
            let direction = this.isDirection(statPos,endPos)
            // cc.audioEngine.playEffect(GameLayer.instance.clipArray[1],false)
            if(direction){
                this.TouchEvent(this.node,direction)
            }
         })
    }

    isDirection(startPos: cc.Vec2, endPos: cc.Vec2): DirectionType{
        let direction: DirectionType = DirectionType.Left;
        let offsetX = Math.abs(endPos.x - startPos.x);
        let offsetY = Math.abs(endPos.y - startPos.y);
        if(offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? DirectionType.Right : DirectionType.Left;
        } else {
            direction = endPos.y > startPos.y ? DirectionType.Top : DirectionType.Bottom;
        }
        return direction;
    }

   /**滑块移动方向 */
   TouchEvent(taget:cc.Node,direction:DirectionType){
    // console.log(taget.parent.name);
    cc.audioEngine.playEffect(this.clipArray[0],false)
    cc.tween(this.node)
    .to(0.2,{scale:1.2})
    .to(0.1,{scale:1})
    .start()
    let Parent = cc.find('Canvas/gameLayer/mainNode/itemParentNode')
    let right = Parent.getChildByName('right_')
    let left = Parent.getChildByName('left_')
    if(taget.parent.name == 'left_' && direction == DirectionType.Top){
        if(right.children[this.posIndex] && this.Type == right.children[this.posIndex].getComponent(icon).Type){
           
            DataManager.addScord(100)
            cc.tween(this.node)
                .to(0.2,{scale:1.2})
                .to(0.1,{scale:1})
                .call(()=>{
                    if(this.node){
                        this.node.destroy()
                        this.node.stopAllActions()
                    }
                })
                .start()
            cc.tween(right.children[this.posIndex])
            .to(0.2,{scale:1.2})
            .to(0.1,{scale:1})
            .call(()=>{
                if(right.children[this.posIndex]){
                    right.children[this.posIndex].stopAllActions()
                    right.children[this.posIndex].destroy()
                }
               
            })
            .start()
        } 
    }else if(taget.parent.name == 'right_' && direction==DirectionType.Bottom){
        if(left.children[this.posIndex] && this.Type == left.children[this.posIndex].getComponent(icon).Type){
            DataManager.addScord(100)
            cc.tween(this.node)
            .to(0.2,{scale:1.2})
            .to(0.1,{scale:1})
            .call(()=>{
                if(this.node){
                    this.node.destroy()
                    this.node.stopAllActions()
                }
               
            })
            .start()
            cc.tween(left.children[this.posIndex])
            .to(0.2,{scale:1.2})
            .to(0.1,{scale:1})
            .call(()=>{
                if(left.children[this.posIndex]){
                    left.children[this.posIndex].stopAllActions()
                    left.children[this.posIndex].destroy()
                }
            })
            .start()
        }
    }
 
}


    // update (dt) {}
}
