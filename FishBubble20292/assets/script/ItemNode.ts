// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import util from "./util/util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemNode extends cc.Component {

    @property(cc.Label)
    imgSp:cc.Label = null;

  

    /**类型 */
    public itemId:number = 0

    /**当前节点位置 */
    public itemIndex:number = -1
   

    start () {

    }
    
    /**初始化 */
    public init(num: number,posIndex:number){
        this.itemId = num;
        this.itemIndex = posIndex
        if(num == 0){
            this.imgSp.string =  ''
        }else{
            this.imgSp.string = num + ''
        }
       
      
      
    }
    

}
