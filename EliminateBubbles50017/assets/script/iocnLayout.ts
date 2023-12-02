// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Util from "./util/Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ioocnLayout extends cc.Component {

    @property([cc.SpriteFrame])
    iconSpArray: cc.SpriteFrame[] = [];

    public iconArray:Array<number> = []


    start () {

    }

    //初始化Layout
    init(){
        this.iconArray = Util.getRandArray(0,7,3)
        this.node.children.forEach((e,index)=>{
            e.getComponent(cc.Sprite).spriteFrame = this.iconSpArray[this.iconArray[index]]
        })
    }

    /**变化类型 */
    changerType(changeNode:cc.Node,changType:number){
        changeNode.getComponent(cc.Sprite).spriteFrame = this.iconSpArray[changType]
    }

    /**判断icon类型是否完全相同 */
    sameFn():boolean{
       let ico1 = this.iconArray[0]
       let ico2 = this.iconArray[1]
       let ico3 = this.iconArray[2]
       if(ico1== ico2 && ico1 == ico3){
            return true
       }else{
            return false
       }
    }

    /**绑定点击 */
    onClick(){
        this.node.children.forEach((e,index)=>{
            cc.tween(e)
                    .to(0.1, {scale:1.1})
                    .to(0.1, {scale:1})
                    .call(()=>{
                      console.log("点击了！");
                      
                    })
                    .start();
        })
    }

    /**播放消除动画 */
    playClearAni(){
        
    }

    // update (dt) {}
}
