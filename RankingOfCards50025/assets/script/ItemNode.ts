// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import { EventId, ItemType } from "./util/define";
import EventMgr from "./util/event/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemNode extends cc.Component {

    @property(cc.Sprite)
    paiSp:cc.Sprite = null;

    //卡牌ID
    public itemId:number = null

    //是否能够触摸
    public isTouch:boolean =false

    //卡牌生成区域
    public Porkerindex:number = 0

    //当前卡牌放置序列
    public posIndex:number = -1

    //卡牌默认位置
    public InitPos:cc.Vec3

    start () {

    }
    
    /**初始化牌 */
    public init(num: number,Porkerindex:number,InitPos:cc.Vec3,type?:number){
        this.itemId = num;
        this.InitPos = InitPos
        this.Porkerindex = Porkerindex
        let path = ''
        console.log(num,type);
        
        if(type){
            path = `pai/${num}-${type}`;
        }else{
            path = `pai/${num}`;
        }
        cc.resources.load(path, cc.SpriteFrame,(err, sp: cc.SpriteFrame) =>{
            if(err){
                console.log("加载失败:", path);
            }else{
                this.paiSp.spriteFrame = sp;
            }
        })
    }

    onCollisionEnter(content,self,other) {
        if(content.name == '0<BoxCollider>' && this.isTouch ){
            if(DataManager.putPorker[content.node.getSiblingIndex()] == -1 && this.posIndex == -1){
                DataManager.putPorker[content.node.getSiblingIndex()] = this.itemId
                this.node.position = content.node.position
                this.InitPos = this.node.position
                this.posIndex = content.node.getSiblingIndex()
                //创建扑克
                EventMgr.Instance.Emit(EventId.creatPorker,this.Porkerindex)
                this.node.off(cc.Node.EventType.TOUCH_MOVE)
                DataManager.putNum += 1
                //判断结果
                this.ResFn(content.node.getSiblingIndex())
                if(DataManager.putNum >=25){
                    EventMgr.Instance.Emit(EventId.ResultEvent,false)
                }
              
                
            }else if(this.posIndex != -1 && DataManager.putPorker[content.node.getSiblingIndex()] == -1){
                DataManager.putPorker[this.posIndex] = -1
                DataManager.putPorker[content.node.getSiblingIndex()] = this.itemId
                this.node.position = content.node.position
                this.InitPos = this.node.position
                this.posIndex = content.node.getSiblingIndex()
                this.node.off(cc.Node.EventType.TOUCH_MOVE)
                //判断结果
                this.ResFn(content.node.getSiblingIndex())
            }
        }
       
        
    }
    //判断结果
    ResFn(index:number){
        let indexRow = Math.floor(index / 5)
        let indexCow = Math.floor(index%5)
        let Rowcount:number = 0
        let Cowcount:number = 0
        let newRow = DataManager.putPorker.filter((e,index)=>{
            return index >= indexRow * 5 && index < indexRow * 5 + 5
        })
        let newCow = DataManager.putPorker.filter((e,index)=>{
            return index % 5 == indexCow
        })
        for(let i =0;i<newRow.length;i++){
            if(newRow[i] == newRow[i+1] - 1){
                Rowcount+=1
            }
        }
        for(let i =0;i<newCow.length;i++){
            if(newCow[i] == newCow[i+1] - 1){
                Cowcount+=1
            }
        }
        if(Rowcount >= 4 || Cowcount >=4){
            EventMgr.Instance.Emit(EventId.ResultEvent,true)
            
        }
       
        
    }

    // update (dt) {}
}
