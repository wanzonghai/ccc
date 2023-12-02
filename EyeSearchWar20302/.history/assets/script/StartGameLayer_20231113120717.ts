// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class startGameLayer extends cc.Component {

    @property(cc.Node)
    checkBtn: cc.Node = null

    @property(cc.Node)
    page: cc.Node = null

    @property({type: [cc.AudioClip], tooltip: "音效"})
    audios: cc.AudioClip[] = [];

    private isPolicy:boolean = false;

    protected start(): void {
        if(!DataManager.isOpenBgSound) {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
        }
    }

    
    playSound(index) {
        if(!DataManager.isOpenEffectSound) return;


        this.node.getComponent(cc.AudioSource).clip = this.audios[index];
        this.node.getComponent(cc.AudioSource).play()
    }
    
    onChange(){
        this.playSound(0);
        this.isPolicy = !this.isPolicy
    }

    showPage() {
        this.playSound(0);
        this.page.active = true
        this.page.getComponent(cc.Animation).play();
    }

    
    closePage(){
        this.playSound(0);
        this.page.active = false
    }

    switchScene() {if(this.isPolicy) {
        cc.director.loadScene("game")
    } else {
        this.playSound(1);
        cc.Tween.stopAllByTarget(this.checkBtn);
        this.checkBtn.scale = 1;
        cc.tween(this.checkBtn)
            .by(0.1, {scale: 0.1})
            .by(0.1, {scale: -0.2})
            .by(0.1, {scale: 0.1})
            .call(()=>{
                this.showPage();
            })
            .start();
    }
    }
}
