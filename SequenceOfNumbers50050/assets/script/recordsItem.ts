// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import util from "./util/util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class recordItem extends cc.Component {

    @property(cc.Node)
    topSp:cc.Node = null;

    @property(cc.Node)
    topLabel:cc.Node = null;

    @property(cc.Node)
    userName:cc.Node = null;

    @property(cc.Node)
    goldNum:cc.Node = null;

    @property([cc.SpriteFrame])
    imgSpArr:cc.SpriteFrame[] = []

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private TipuserName = ['Thor','FireKing','ShadowAssassin','WildWolf','GalaxyPrincess','EyeOfTheStorm','Magician','MysteriousSword','AngelWings','FrostHeart','DragonSoul','Starlight','GhostHunter','SoulSong','Ares','SnowflakeDance','MarsExplorer','DreamTrip','Sniper','RocketMan']

    start () {

    }
    /**初始化 */
    init(index:number){
        if(index <=3){
            this.topSp.active = true
            this.topLabel.active =false
            this.topSp.getComponent(cc.Sprite).spriteFrame = this.imgSpArr[index - 1]
        }else{
            this.topSp.active = false
            this.topLabel.active = true
            this.topLabel.getComponent(cc.Label).string = index + ''
        }
        let name = this.TipuserName[util.getRandom(0,this.TipuserName.length -1)]
        this.userName.getComponent(cc.Label).string = name
        this.goldNum.getComponent(cc.Label).string = 99999 - (index*100) + ''
    }

    // update (dt) {}
}
