import { _decorator, Component, Node, v3, Size, size, SpriteFrame, Sprite, Vec3, UITransform, tween, UIOpacity, color, AudioSource, find, bezier, v2, NodeEventType, EventTouch, Tween } from 'cc';
import GameDataManager from './GameDataManager_FMKITA';
import util, { DirectionType } from './util_FMKITA';
const { ccclass, property } = _decorator;

@ccclass('PlayManager')
export class PlayManager extends Component {

    @property({type: [SpriteFrame], tooltip: "元素纹理"})
    itemSpriteFrameList: SpriteFrame[] = [];

    @property({type: SpriteFrame, tooltip: "旋转按钮纹理"})
    spinBtnSpriteFrame: SpriteFrame = null;
    
    @property({type: Node, tooltip: "元素父节点"})
    itemParent: Node = null;

    /** 行数 */
    rowNum = 9;

    /** 列数 */
    colNum = 9;

    /** 元素大小 */
    itemSize: Size = size(0, 0);

    /** 元素缩放 */
    itemScale: number = 1;

    /** 元素间距X */
    itemIntervalX: number = 0;

    /** 元素间距Y */
    itemIntervalY: number = -13;

    /** 元素顶部出现位置 */
    itemStartPos: number = 0;

    /** 动画播放状态 */
    aniPlayState: boolean = false;


    start() {
        
        for(let i: number = 0; i < this.itemSpriteFrameList.length; i++) {
            this.itemSpriteFrameList[i].width > this.itemSize.width && (this.itemSize.width = this.itemSpriteFrameList[i].width)
            this.itemSpriteFrameList[i].height > this.itemSize.height && (this.itemSize.height = this.itemSpriteFrameList[i].height)
        }
        this.itemParent["startPos"] = v3(this.itemParent.position.x, this.itemParent.position.y);
        this.creatorItemNode();
    }

    /**
     * 创建item节点
    */
    creatorItemNode() {
        let monkeyNode = null;

        for(let i: number = 0; i < 5; i++) {
            let itemNode = new Node();
            let sprite = itemNode.addComponent(Sprite);
            itemNode.scale = v3(this.itemScale, this.itemScale, this.itemScale);
            itemNode["curIndex"] = i;
            if(i == 0) {
                monkeyNode = itemNode;
            } else {
                this.itemParent.addChild(itemNode);
            }
        }

        this.itemParent.addChild(monkeyNode);
        monkeyNode.position = v3(0, 0);
        monkeyNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[0];
        let endFunc = (e: EventTouch) => {
            if(this.aniPlayState || !GameDataManager.curGameIsRun) return;
            let direction = util.isDirection(monkeyNode["touchStarPos"], e.getLocation().clone());
            let targetPos = v3(0, 0);
            let length = 200;
            let speed = 100;
            let monkeyNodeWidth = monkeyNode.getComponent(UITransform).width * monkeyNode.scale.x;
            let monkeyNodeHieght = monkeyNode.getComponent(UITransform).height * monkeyNode.scale.y;

            switch(direction) {
                case DirectionType.Top:
                    targetPos.y += length;
                    break;
                case DirectionType.Bottom:
                    targetPos.y -= length;
                    break;
                case DirectionType.Left:
                    targetPos.x -= length;
                    break;
                case DirectionType.Right:
                    targetPos.x += length;
                    break;

            }

            targetPos = targetPos.add(monkeyNode.position)
            let overlapNode  = null;
            for(let i: number = 0; i < this.itemParent.children.length-1; i++) {
                let child = this.itemParent.children[i];
                let childWidth = child.getComponent(UITransform).width;
                let childHieght = child.getComponent(UITransform).height;
                let childPos = child.position;
                let checkPointList = [
                    v3(targetPos.x, targetPos.y + monkeyNodeHieght/2),
                    v3(targetPos.x, targetPos.y +- monkeyNodeHieght/2),
                    v3(targetPos.x - monkeyNodeWidth/2, targetPos.y),
                    v3(targetPos.x + monkeyNodeWidth/2, targetPos.y),
                    v3(targetPos.x - monkeyNodeWidth/2, targetPos.y + monkeyNodeHieght/2),
                    v3(targetPos.x + monkeyNodeWidth/2, targetPos.y + monkeyNodeHieght/2),
                    v3(targetPos.x - monkeyNodeWidth/2, targetPos.y - monkeyNodeHieght/2),
                    v3(targetPos.x + monkeyNodeWidth/2, targetPos.y - monkeyNodeHieght/2),
                ];
                let checkPointList2 = [
                    v3(childPos.x, childPos.y + childHieght/2),
                    v3(childPos.x, childPos.y - childHieght/2),
                    v3(childPos.x - childWidth/2, childPos.y),
                    v3(childPos.x + childWidth/2, childPos.y),
                    v3(childPos.x - childWidth/2, childPos.y + childHieght/2),
                    v3(childPos.x + childWidth/2, childPos.y + childHieght/2),
                    v3(childPos.x - childWidth/2, childPos.y - childHieght/2),
                    v3(childPos.x + childWidth/2, childPos.y - childHieght/2),
                ];

                for(let j: number = 0; j < checkPointList.length; j++) {
                    if(child.active){
                        let node = util.checkPointExistNode(child, checkPointList[j]); // 猴子在元素内
                        if(!node) {
                            node = util.checkPointExistNode(monkeyNode, checkPointList2[j]) ? child : null; // 元素在猴子内
                        }
                        if(node) {
                            overlapNode = node;
                            break;
                        }
                    }   
                }

                if(overlapNode) {
                    break;
                }
            }
            if(overlapNode) {
                targetPos.x = overlapNode.position.x;
                targetPos.y = overlapNode.position.y;
            }
            this.aniPlayState = true;
            Tween.stopAllByTarget(monkeyNode);
            tween(monkeyNode)
                .to(util.getMoveTime(monkeyNode.position.clone(), targetPos), {position: targetPos})
                .call(() => {
                    if(overlapNode) {
                        overlapNode.active = false;
                        let call = () => {
                            this.resetPlaceNode(overlapNode);
                            this.aniPlayState = false;
                            if(this.checkWin()) {
                                GameDataManager.mainLayerScript.showEnd();
                            }
                        }

                        if(overlapNode["itemId"] != 3) {
                            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[overlapNode["itemId"] == 1 ? 5 : 4]);
                            tween(monkeyNode)
                                .by(0.1, {scale: v3(0.1, 0.1, 0.1)})
                                .by(0.1, {scale: v3(-0.2, -0.2, -0.2)})
                                .by(0.1, {scale: v3(0.2, 0.2, 0.2)})
                                .call(call)
                                .start();
                        } else {
                            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[6]);
                            tween(monkeyNode)
                                .by(0.1, {scale: v3(-0.1, -0.1, -0.1)})
                                .by(0.1, {scale: v3(0.2, 0.2, 0.2)})
                                .by(0.1, {scale: v3(-0.2, -0.2, -0.2)})
                                .call(call)
                                .start();
                        }
                    } else {
                        this.aniPlayState = false;
                    }
                })
                .start();
        }

        monkeyNode.on(NodeEventType.TOUCH_START, (e: EventTouch) => {
            monkeyNode["touchStarPos"] = e.getLocation().clone();
        }) 

        monkeyNode.on(NodeEventType.TOUCH_END, endFunc);
        monkeyNode.on(NodeEventType.TOUCH_CANCEL, endFunc);
    }

    /**
     * 初始化节点数据
    */
    initGameData() {
        let curBombNum = 0;
        let curFrutisNum = 0;

        for(let i: number = 0; i < 5; i++) {
            let itemNode = this.itemParent.children[i];
            let sprite = itemNode.getComponent(Sprite);

            itemNode.active = true;
            if(i == 4) {
                Tween.stopAllByTarget(itemNode);
                itemNode.scale = v3(1, 1, 1);
                itemNode.position = v3(0, 0);
            } else {
                let id = util.getRandom(1, this.itemSpriteFrameList.length-1);
                sprite.spriteFrame = this.itemSpriteFrameList[id];
                itemNode["itemId"] = id;
                if(id != 3) {
                    curFrutisNum ++;
                } else {
                    curBombNum ++;
                }
                itemNode.position = util.generateRandomPoint(this.itemParent, itemNode);
            }
        }

        if(curBombNum == 0) { // 未随机生成炸弹手动补一个
            let bombNode = this.itemParent.children[util.getRandom(0, 3)];

            bombNode["itemId"] = 3;
            bombNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[bombNode["itemId"]];
        }

        if(curFrutisNum == 0) { // 未随机生成水果手动补一个
            let frutisNode = this.itemParent.children[util.getRandom(0, 3)];

            frutisNode["itemId"] = util.getRandom(1, 3);
            frutisNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[frutisNode["itemId"]];
        }
    }

    /**
     * 重新放置节点
    */
    resetPlaceNode(Node) {
        let id = util.getRandom(1, this.itemSpriteFrameList.length-1);
        let sprite = Node.getComponent(Sprite);

        Node.active = true;
        sprite.spriteFrame = this.itemSpriteFrameList[id];
        Node["itemId"] = id;
        Node.position = util.generateRandomPoint(this.itemParent, Node);
    }

    /**
     * 开始游戏
    */
    startGame() {
        this.initGameData();
    }

    /**
     * 重置元素位置
    */
    resetItemParentPos() {
        this.itemParent.children.forEach(item => {
            item.active = false;
        })
    }

    /**
     * 判断是否胜利
    */
    checkWin() {
        let isWin: boolean = false;

        if(this.itemParent.children[4].scale.x >= 2) {
            isWin = true;
        }

        return isWin;
    }

    update(deltaTime: number) {
    }
}


