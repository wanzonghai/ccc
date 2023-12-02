// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import util from "./util/util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({type: cc.Node, tooltip: "旋转按钮1"})
    spinBtn1: cc.Node = null;

    @property({type: cc.Node, tooltip: "旋转按钮2"})
    spinBtn2: cc.Node = null;

    @property({type: cc.Node, tooltip: "元素位置节点"})
    itemPosParent: cc.Node = null;

    @property({type: cc.Node, tooltip: "元素动画展示节点"})
    itemAniShowParent: cc.Node = null;

    @property({type: [cc.SpriteFrame], tooltip: "元素动画展示节点"})
    ballSpriteFrame: cc.SpriteFrame[] = [];


    start () {
        this.initStartData();
    }

    btnEvent(e: cc.Event) {
        let name = e.target.name;

        if(!DataManager.curGameIsRun) {
            return;
        }

        
        DataManager.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager.gameLayerScr.audioResList[10];
        DataManager.gameLayerScr.node.getComponent(cc.AudioSource).play();
        switch(name) {
            case "spinBtn1":
            case "spinBtn2":
                this.spinBall();
                break;
            case "moveBtn1":
                this.moveBall(true);
                break;
            case "moveBtn2":
                this.moveBall(false);
                break;
        }
    }

    /**
     * 初始化节点数据
    */
    initStartData() {
        let dataList = new Array(20);

        for(let i: number = 0; i < dataList.length; i++) {
            dataList[i] = i;
        }

        dataList = util.getRandomListItme(dataList, dataList.length);

        dataList.forEach((data, i) => {
            this.itemPosParent.children[i]["laseItemId"] = data;
            this.itemPosParent.children[i]["itemId"] = data;
            this.itemPosParent.children[i]["index"] = i;

            this.itemAniShowParent.children[i]["starPos"] = this.itemAniShowParent.children[i].position.clone();
            this.itemAniShowParent.children[i]["index"] = i;
            this.itemAniShowParent.children[i]["itemId"] = data;
            this.itemPosParent.children[i].getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[data];
            this.itemAniShowParent.children[i].getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[data];
        })
    }

    /**
     * 移动球
     * @param isAdvance 是否前进
    */
    moveBall(isAdvance: boolean) {
        let index = isAdvance ? -1 : 1;
        let aniNum = 0;
        let endCall = () => {
            this.itemPosParent.children.forEach((AniParent) => {
                AniParent.active = true;
            })
            this.itemAniShowParent.children.forEach((AniParent, i) => {
                AniParent.position = AniParent["starPos"].clone();
                AniParent.active = false;
            })
        }

        this.itemPosParent.children.forEach((AniParent) => {
            AniParent.active = false;
            AniParent["laseItemId"] = AniParent["itemId"];
        })

    
        this.itemAniShowParent.children.forEach((AniParent, i) => {
            let targetIndex = i + index;

            if(targetIndex >= this.itemAniShowParent.children.length) {
                targetIndex = 0;
            } else if(targetIndex < 0) {
                targetIndex = this.itemAniShowParent.children.length-1;
            }

            let curNode = this.itemPosParent.children[AniParent["index"]];
            let targetNode = this.itemPosParent.children[targetIndex];
            cc.Tween.stopAllByTarget(AniParent);
            AniParent.active = true;
            AniParent.position = this.itemPosParent.children[i].position.clone();
            AniParent.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[this.itemPosParent.children[i]["laseItemId"]];
            
            // curNode["laseItemId"] = curNode["itemId"];
            // curNode["itemId"] = targetNode["itemId"];
            // curNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[curNode["itemId"]];

            targetNode["laseItemId"] = targetNode["itemId"];
            targetNode["itemId"] = curNode["laseItemId"];
            targetNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[targetNode["itemId"]];


            aniNum++
            cc.tween(AniParent)
                .to(0.2, {position: targetNode.position})
                .call(() => {
                    if(--aniNum == 0) {
                        endCall();
                    }
                })
                .start();
        })
    }

    /**
     * 点击旋转按钮移动球
    */
    spinBall() {
        let aniNum = 0;
        let endCall = () => {
            this.itemPosParent.children.forEach((posNode) => {
                posNode.active = true;
            })
            this.itemAniShowParent.children.forEach((aniNode, i) => {
                aniNode.position = aniNode["starPos"].clone();
                aniNode.active = false;
            })
        }
        let changeNodePos = (curNode, targetNode) => {

            let aniNode = this.itemAniShowParent.children[curNode["index"]]
            let aniNode2 = this.itemAniShowParent.children[targetNode["index"]]
            let pos1 = targetNode.position.clone(); 
            let pos2 = curNode.position.clone(); 
            
            aniNode.active = true;
            aniNode.position = curNode.position.clone();
            aniNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[curNode["itemId"]];

            aniNode2.active = true;
            aniNode2.position = targetNode.position.clone();
            aniNode2.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[targetNode["itemId"]];

            curNode["laseItemId"] = curNode["itemId"];
            curNode["itemId"] = targetNode["itemId"];
            curNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[curNode["itemId"]];

            targetNode["laseItemId"] = targetNode["itemId"];
            targetNode["itemId"] = curNode["laseItemId"];
            targetNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[targetNode["itemId"]];

            aniNum += 2;
            cc.tween(aniNode)
                .to(0.3, {position: pos1})
                .call(() => {
                    if(--aniNum == 0) {
                        endCall();
                    }
                })
                .start();
            cc.tween(aniNode2)
                .to(0.3, {position: pos2})
                .call(() => {
                    if(--aniNum == 0) {
                        endCall();
                    }
                })
                .start();
        }
        
        this.itemPosParent.children.forEach((posNode) => {
            posNode.active = false;
        })
        this.itemAniShowParent.children.forEach((aniNode, i) => {
            aniNode.active = true;
            aniNode.getComponent(cc.Sprite).spriteFrame = this.ballSpriteFrame[this.itemPosParent.children[i]["itemId"]];
            cc.Tween.stopAllByTarget(aniNode);
        })
        changeNodePos(this.itemPosParent.children[1], this.itemPosParent.children[4]);
        changeNodePos(this.itemPosParent.children[2], this.itemPosParent.children[3]);

        if(this.checkWin()) {
            DataManager.gameLayerScr.showResult(true)
            console.log("胜利")
        };
    }

    /**
     * 检测胜利
    */
    checkWin() {
        let isWin = true;

        this.itemPosParent.children.forEach((children, i) => {
            if(i != children["itemId"]) {
                isWin = false;
            }
        })

        return isWin;
    }

}
