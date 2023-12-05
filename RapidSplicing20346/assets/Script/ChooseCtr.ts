// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import Com from "./Com";



@ccclass
export default class ChooseCtr extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  clickevent(event,data){
    Com.data=Number(data)
    cc.director.loadScene("game");
  }


  // update (dt) {}
}
