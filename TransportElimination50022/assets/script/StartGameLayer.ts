// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class startGameLayer extends cc.Component {

    @property([cc.AudioClip])
    clipArray:cc.AudioClip[] = []

    switchScene() {
        cc.audioEngine.playEffect(this.clipArray[0],false)
        cc.director.loadScene("game");
    }

}
