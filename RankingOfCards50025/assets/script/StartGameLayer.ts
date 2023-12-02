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

    @property({type: [cc.AudioClip]})
    audioResList: cc.AudioClip[] = [];

    @property(cc.Node)
    checkBtn:cc.Node = null

    @property(cc.Node)
    page:cc.Node = null

    private isPolicy:boolean = false

    start(): void {
        
        if(!DataManager.curSoundIsClose) {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 0;
            this.node.getComponent(cc.AudioSource).volume = 0;
        } else {
            cc.find("Canvas").getComponent(cc.AudioSource).volume = 1;
            this.node.getComponent(cc.AudioSource).volume = 1;
        }

        this.checkBtn.getChildByName("title").on(cc.Node.EventType.TOUCH_END,()=>{
            this.page.active = true
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
        })
        this.checkBtn.getChildByName("border").on(cc.Node.EventType.TOUCH_END,()=>{
            
        })
        
    }
    switchScene() {
        if(this.isPolicy){
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
            cc.director.loadScene("game");
        }else{
            this.node.stopAllActions()
            cc.tween(this.checkBtn)
                .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y + 5,1)})
                .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y - 5,1)})
                .start()
        }
       
    }
    onChange(){
        let border = this.checkBtn.getChildByName("border")
            border.children[0].active = !border.children[0].active 
            this.isPolicy = !this.isPolicy
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
    }

    closePage(){
        this.page.active = false
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
        this.node.getComponent(cc.AudioSource).play();
    }

    protected onDestroy(): void {
        this.checkBtn.getChildByName("title").off(cc.Node.EventType.TOUCH_END)
        this.checkBtn.getChildByName("border").off(cc.Node.EventType.TOUCH_END)
        
    }
    

    
}
