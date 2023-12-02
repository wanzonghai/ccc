// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import DataManager from "./DataManager";
import GameLayer from "./GameLayer";
import Util from "./util/Util";
import { ItemType } from "./util/define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BallNode extends cc.Component {

    @property([cc.SpriteFrame])
    iconSpArray: cc.SpriteFrame[] = [];

    public genType:ItemType = ItemType.None

    private isClick:boolean = false


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.director.getCollisionManager().enabled = true
    }

    //初始化
    init(type:ItemType){
        this.node.getComponent(cc.Sprite).spriteFrame = this.iconSpArray[type]
        this.genType = type
        this.clickFn()
      
       
        
    }

    moving(){
        cc.tween(this.node)
            .to(Math.random() * 2,{position:cc.v3(Util.getRandomInt(-835,850),Util.getRandomInt(-350,450),1)})
            .call(()=>{
                this.moving()
            })
            .start()
    }

    /**绑定监听 */
    clickFn(){
        this.node.on(cc.Node.EventType.TOUCH_END,()=>{
            if(this.isClick) return
            this.isClick = true
            cc.audioEngine.playEffect(DataManager.gameLayerScr.clipArray[5],false)
            DataManager.addScord(20)
            cc.tween(this.node)
                .to(0.1,{scale:1.3})
                .to(0.1,{opacity:150})
                .call(()=>{
                    this.node.stopAllActions()
                    this.node.destroy()
                })  
                .start() 
        })
    }

    public generateRandomPoint(node:cc.Node){
        let halfWidth = node.width/2 
        let halfHeight = node.height/2
        let x = Util.getRandomInt(node.x - halfWidth,node.x + halfWidth + 1)
        let y = Util.getRandomInt(node.y - halfHeight,node.y + halfHeight + 1)
        return cc.v3(x,y,0)
    }

    onCollisionEnter(content,self,other) {
        if(content['tag'] == this.genType){
            DataManager.addScord(20)
        }
        self['node'].destroy();
       
        
        // GameLayer.instance.creatGenPos.removeChild(GameLayer.instance.creatGenPos.getChildByUuid(self.uuid))
       
        
    }

}

