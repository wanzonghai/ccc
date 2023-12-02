
const {ccclass, property} = cc._decorator;

export type TCshuiId=0|1|2|3|4;
@ccclass
export default class GamesgRoot extends cc.Component {

    @property([cc.SpriteFrame])
    cradSF:cc.SpriteFrame[] = [];

    @property(cc.Sprite)
    imgSp:cc.Sprite = null;

    @property(cc.Node)
    border:cc.Node = null;

   getCardSF(id:TCshuiId){
         return this.cradSF[id];
   }
   getCardsgSF(){
    return this.cradSF[0];
   }
}
