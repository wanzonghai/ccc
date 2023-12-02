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
export default class ballNode extends cc.Component {

   
    public genType:ItemType = ItemType.None

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.director.getCollisionManager().enabled = true
    }
    onCollisionEnter(content,self,other) {
      console.log("sssss");
      let node:cc.Node = self.node
      node.scale = 0.6
      DataManager.addScord(30)
    }

}

