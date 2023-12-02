
const { ccclass, property } = cc._decorator;

import GameELayerO from "./GameELayerO";
import DataQGO from "./DataQGO";
@ccclass
export default class BlockU0 extends cc.Component {


     tempNodes1: any;

   
    
  init(picTexture){
    let Sprite =this.node.getComponent(cc.Sprite)
    Sprite.spriteFrame = picTexture

  }

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

      
    }
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event) {
      DataQGO.startPos1 = this.node.position;


  
    }
    onTouchMove(event) {
     
      
    }
    onTouchEnd(event) {

      if(this.node.getComponent(cc.Sprite).spriteFrame.name == "1")
      {
        console.log("01")
        DataQGO.isHC = false
        cc.find("Canvas/gameLayerO").getComponent(GameELayerO).suijiSblock()

      }else{
        console.log("02")
        console.log("Da",DataQGO.isHXpos)
        DataQGO.isHC = true
        cc.find("Canvas/gameLayerO").getComponent(GameELayerO).suijiSblock()
        this.node.destroy()
        DataQGO.isHXpos = DataQGO.isHXpos-1
       

      }
      
      if (DataQGO.isHXpos == 0&&DataQGO.isYXpos>0){
        DataQGO.isHXpos=0
        DataQGO.isYXpos=0

        DataQGO.isHXhc =true
      }
        
      }
  }




