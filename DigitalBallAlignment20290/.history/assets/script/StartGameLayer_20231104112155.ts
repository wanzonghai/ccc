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

    @property({type: cc.Node})
    maskNode: cc.Node = null;

    @property({type: cc.Node})
    heartNode: cc.Node = null;

    @property(cc.Node)
    checkBtn:cc.Node = null

    @property(cc.Node)
    page:cc.Node = null

    @property(cc.Node)
    lodingPage:cc.Node = null

    private isPolicy:boolean = false

    titleTween: cc.Tween = null;
    maskLength: number = 0;

    start(): void {
        this.maskLength = this.maskNode.width;
        this.maskNode.width = 0;
        this.heartNode["startPos"] = this.heartNode.position.clone();
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

        this.startLodingAni();
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

            this.node.getComponent(cc.AudioSource).clip = this.audioResList[2];
            this.node.getComponent(cc.AudioSource).play();
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
        let lengthList = [0.001, 0.002, 0.003, 0.004, 0.005, 0.006];
        let speed = 0.02
        this.node.getComponent(cc.AudioSource).clip = this.audioResList[1];
        this.node.getComponent(cc.AudioSource).play();
        this.schedule(()=>{
            let curLength = lengthList[util.getRandom(0, lengthList.length-1)] * this.maskLength;

            this.maskNode.width += curLength;
            this.heartNode.x += curLength;
            if(this.maskNode.width >= this.maskLength){
                this.maskNode.width = this.maskLength;
                this.heartNode.x = this.heartNode["startPos"].x + this.maskLength;
                this.unscheduleAllCallbacks()
                cc.director.loadScene("game");
            }
        },speed)
    }

    /**
     * 开始进度条动画
    */
    startLodingAni() {
        let interval = 0.01;
        let speed = 100;
        let imgWidth = this.maskNode.children[0].width;
        let moveFunc = () => {
            this.maskNode.children.forEach(img => {
                if(img.name == "1") {
                    img.position = cc.v3(img.position.x + speed * interval, img.position.y);
    
                    if(img.position.x >= this.maskLength*1.5) {
                        img.position = cc.v3(-(imgWidth*2) + Math.abs(img.position.x - this.maskLength) + (this.maskLength - imgWidth), img.position.y)
                    }
                }
            })
        }

        this.schedule(moveFunc, interval)
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
