// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import util from "./util/util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class startGameLayer extends cc.Component {

    @property({type: [cc.AudioClip]})
    audioResList: cc.AudioClip[] = [];

    @property(cc.Node)
    checkBtn:cc.Node = null

    @property(cc.Node)
    page:cc.Node = null

    @property(cc.Node)
    lodingPage:cc.Node = null

    private isPolicy:boolean = false

    titleTween: cc.Tween = null;

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
            this.page.getComponent(cc.Animation).play();
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
        })
        /**生成用户ID */
        if(DataManager.userId == "10086"){
           let newUserId:string = ''
           for(let i=0;i<DataManager.userId.length;i++){
                newUserId += util.getRandom(0,9)
           }
           DataManager.userId = newUserId
        }

        this.lodingPage.getChildByName('pg').getComponent(cc.ProgressBar).progress = 0
        
    }
    switchScene() {
        if(this.isPolicy){
            this.node.getComponent(cc.AudioSource).clip = this.audioResList[0];
            this.node.getComponent(cc.AudioSource).play();
            this.lodingPage.active = true
            this.startLoding()
        }else{
            this.node.stopAllActions();
            this.titleTween && this.titleTween.stop();

            let title = this.checkBtn.getChildByName("title");
            title.getComponent(cc.LabelOutline).color = cc.color(0,0,0,255);
            this.titleTween = util.tweenUpdate(0.3, (ratio) => {
                let colroNum = 255 - ratio * 255 * 2;

                title.getComponent(cc.LabelOutline).color = cc.color(colroNum,colroNum,colroNum,255);
            });
            // cc.tween(this.checkBtn)
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y + 5,1)})
            //     .to(0.1,{position:cc.v3(this.checkBtn.position.x,this.checkBtn.position.y - 5,1)})
            //     .start()
        }
       
    }
    /**开启加载页面 */
    startLoding(){
        let pg = this.lodingPage.getChildByName("pg")
        let speed = 0.02
        this.schedule(()=>{
            pg.getComponent(cc.ProgressBar).progress += speed
            if(pg.getComponent(cc.ProgressBar).progress >= 1){
                pg.getComponent(cc.ProgressBar).progress = 1;
                this.unscheduleAllCallbacks()
                cc.director.loadScene("hall");
            }
        },speed)
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
