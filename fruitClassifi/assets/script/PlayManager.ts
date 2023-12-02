import { _decorator, Component, Node, v3, Size, size, SpriteFrame, Sprite, Vec3, UITransform, tween, UIOpacity, color, AudioSource, find, EventTouch, v2, Tween } from 'cc';
import util from './util';
import GameDataManager from './GameDataManager';
const { ccclass, property } = _decorator;

@ccclass('PlayManager')
export class PlayManager extends Component {

    @property({type: [SpriteFrame], tooltip: "元素纹理"})
    itemSpriteFrameList: SpriteFrame[] = [];
    
    @property({type: Node, tooltip: "底部元素父节点"})
    bottomNode: Node = null;
    
    @property({type: Node, tooltip: "垃圾桶父节点"})
    trashCanNode: Node = null;

    /** 创建元素定时器 */
    creatorSchedule = null;

    /** 颜色元素纹理数组 */
    colorItmeSpriteFrameList: Array<Array<number>> = [];

    start() {
        this.colorItmeSpriteFrameList = [
            [1],
            [0, 7],
            [4, 6],
            [2, 3, 5],
        ]
    }

    update(deltaTime: number) {

    }

   /**
    * 开始游戏
   */
    startGame() {
        this.trashCanNode.children.forEach((trashCan: Node, i: number) => {
            trashCan["itemId"] = i+1;
        })
        this.creatorItemFunc();
    }


    /** 
     * 创建元素方法
    */
    creatorItemFunc() {
        let delayList = [2, 3, 2.5, 2.3, 2.7];
        let delayTime = delayList[util.getRandom(0, delayList.length-1)];

        this.createItme();
        this.stopItmeCreator();
        this.scheduleOnce(this.creatorItemFunc.bind(this), delayTime);
    }

    /**
     * 停止元素创建
    */
    stopItmeCreator() {
        this.unscheduleAllCallbacks();
    }

    /**
     * 创建元素
    */
    createItme(): Node {
        let item = new Node();
        let itemId = util.getRandom(1, 4);
        let endCall = () => {
            if(!item["allowMove"]) return;
            item["allowMove"] = false;

            let trashCanNode = this.checkIsClear(item);
            if(trashCanNode && trashCanNode["itemId"] == item["itemId"]){
                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[6])
                GameDataManager.curWinNum += 500;
                GameDataManager.curUserCoin += 500;
                GameDataManager.mainLayerScript.updateUserCoin();
                if(this.checkWin()) {
                    GameDataManager.mainLayerScript.showEnd();
                }
                tween(item.getComponent(Sprite))
                    .to(0.2, {color: color(255, 255, 0)})
                    .call(() => {
                        item.removeFromParent();
                    })
                    .start();
            } else {
                if(trashCanNode) { // 扣心
                    find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                    GameDataManager.mainLayerScript.reduceHeart();
                }
                item.position = v3(item.position.x, 275);
                this.initItmeMove(item);
            }
        }
        let colorList = this.colorItmeSpriteFrameList[itemId-1];

        item["itemId"] = itemId;
        item.addComponent(Sprite).spriteFrame = this.itemSpriteFrameList[colorList[util.getRandom(0, colorList.length-1)]];
        item.position = v3(-100, 275);
        this.bottomNode.addChild(item);
        this.initItmeMove(item);
        item.on(Node.EventType.TOUCH_START, () => {
            item["allowMove"] = true;
            Tween.stopAllByTarget(item);
        });
        item.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
            if(!item["allowMove"]) return;
            let deltaPos = v3(e.getDelta().x, e.getDelta().y);

            item.position = deltaPos.add(item.position);
        });
        item.on(Node.EventType.TOUCH_END, endCall);
        item.on(Node.EventType.TOUCH_CANCEL, endCall);
        return item;
    }

    /**
     * 检测元素是否放在垃圾桶上了
     * @param itemNode 元素节点
    */
    checkIsClear(itemNode: Node): Node {
        let trashCanNode = null;

        this.trashCanNode.children.forEach((trashCan: Node) => {
            if(!trashCanNode) {
                trashCanNode = util.checkPointExistNode(trashCan, itemNode.getWorldPosition().clone());
            }
        })

        return trashCanNode;
    }

    /**
     * 注册元素移动
    */
    initItmeMove(item: Node) {
        tween(item)
            .by(0.01, {position: v3(2, 0)})
            .call(() => {
                if(item.position.x >= this.bottomNode.getComponent(UITransform).width + 100) { // 移出屏幕
                    Tween.stopAllByTarget(item);
                    item.removeFromParent();
                } else {
                    this.initItmeMove(item);
                }
            })
            .start();
    }

    /**
     * 检测胜利
    */
    checkWin() {
        if(GameDataManager.curWinNum >= GameDataManager.targetWinNum) {
            return true;
        }
        return false;
    }

    resetItemParentPos() {

    }
}


