// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import DataManager from "./DataManager";
import GameLayer from "./GameLayer";
import Util from "./util/Util";
import { EventId, ItemType } from "./util/define";
import EventMgr from "./util/event/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class obstacle extends cc.Component {

   
    public genType:ItemType = ItemType.None

    @property(cc.Node)
    gold:cc.Node = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    public gap:number = -1

    start () {
        this.init()
        // EventMgr.Instance.Register(EventId.desty,this.clearGold,this)
    }

    init(){
      this.gap = Util.getRandomInt(0,3)
      this.node.children[this.gap].active = false
      this.gold.children[this.gap].active = true
    }

    // clearGold(){
    //   this.gold.children.forEach(e =>{
    //       e.active = false
    //   })
    // }

    Moveing(){
      cc.tween(this.node)
          .to(3,{position:cc.v3(0,-492,0)})
          .call(()=>{
             DataManager.addScord(50)
             this.gold.children[this.gap].active = false
          })
          .to(3,{position:cc.v3(0,-1500,0)})
          .call(()=>{
            this.node.destroy()
          })
          .start()
      cc.tween(this.node)
          .to(6,{scale:3})
          .start()
     
  }


}

