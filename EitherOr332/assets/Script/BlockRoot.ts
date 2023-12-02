

const {ccclass, property} = cc._decorator;
export type TCfkId=0|1|2|3;
export type TCmax=0|1|2|3;
@ccclass
export default class BlockRoot extends cc.Component {

    @property([cc.SpriteFrame])
    BlockSF:cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    BlockmaxSF:cc.SpriteFrame[] = [];


    getBlockSF(idx:TCfkId){
        return this.BlockSF[idx];
  }
  getBlockmaxSF(idx:TCmax){
    return this.BlockmaxSF[idx];
}
  getBlocksgSF(){
   return this.BlockSF[0];
  }
}
