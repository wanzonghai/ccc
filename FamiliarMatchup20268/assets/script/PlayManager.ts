import { _decorator, Component, Node, v3, Size, size, SpriteFrame, Sprite, Vec3, UITransform, tween, UIOpacity, color, AudioSource, find, EventTouch, v2 } from 'cc';
import GameDataManager from './GameDataManager';
import util from './util';
const { ccclass, property } = _decorator;

@ccclass('PlayManager')
export class PlayManager extends Component {

    @property({type: [SpriteFrame], tooltip: "元素纹理"})
    itemSpriteFrameList: SpriteFrame[] = [];
    
    @property({type: Node, tooltip: "元素父节点"})
    itemParent: Node = null;

    @property({type: Node, tooltip: "移动事件接收节点"})
    moveNode: Node = null;

    @property({type: Node, tooltip: "暂存位置元素节点"})
    registerItemNode: Node = null;

    /** 行数 */
    rowNum = 6;

    /** 列数 */
    colNum = 6;

    /** 元素大小 */
    itemSize: Size = size(0, 0);

    /** 元素缩放 */
    itemScale: number = 1;

    /** 元素间距X */
    itemIntervalX: number = 13;

    /** 元素间距Y */
    itemIntervalY: number = 13;

    /** 元素顶部出现位置 */
    itemStartPos: number = 0;

    /** 是否允许可拖拽节点移动 */
    AllowRegisterItmeMove: boolean = false;

    /** 要换位置的节点 */
    item1: Node = null;

    /** 目标节点 */
    item2: Node = null;

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
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = new Node();
            itemNode.addComponent(Sprite);
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let itemWidth = this.itemSize.width * this.itemScale;
            let itemHeight = this.itemSize.height * this.itemScale;

            itemNode.scale = v3(this.itemScale, this.itemScale, this.itemScale);
            itemNode["curIndex"] = i;
            this.itemParent.addChild(itemNode);
            itemNode.position = v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + row * itemHeight + row * this.itemIntervalY);

            itemNode.on(Node.EventType.TOUCH_END, () => {
                if(!GameDataManager.isAllowClear || !GameDataManager.curGameIsRun || GameDataManager.isPause) return;
                this.itemNearClear(itemNode);
            })
        }
    }

    /**
     * 初始化节点数据
    */
    initGameData() {
        let isBinding: boolean = false;

        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = this.itemParent.children[i];
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let itemId = util.getRandom(0, this.itemSpriteFrameList.length-1) + 1;

            itemNode["itemId"] = itemId;
            itemNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[itemId - 1];

            itemNode.on(Node.EventType.TOUCH_START, (event) => {
                if(!GameDataManager.curGameIsRun) return;
                this.AllowRegisterItmeMove = true;
                tween(itemNode)
                    .to(0.15, {scale: v3(this.itemScale-0.1, this.itemScale-0.1, this.itemScale-0.1)})
                    .to(0.15, {scale: v3(this.itemScale+0.1, this.itemScale+0.1, this.itemScale+0.1)})
                    .to(0.2, {scale: v3(this.itemScale, this.itemScale, this.itemScale)})
                    .start();
                tween(this.registerItemNode)
                    .to(0.15, {scale: v3(this.itemScale-0.1, this.itemScale-0.1, this.itemScale-0.1)})
                    .to(0.15, {scale: v3(this.itemScale+0.1, this.itemScale+0.1, this.itemScale+0.1)})
                    .to(0.2, {scale: v3(this.itemScale, this.itemScale, this.itemScale)})
                    .start();
                itemNode.active = false;
                this.item1 = itemNode;
                this.moveNode["startPos"] = v2(itemNode.position.x, itemNode.position.y);
                this.setRegisterItem(itemNode["itemId"], v3(itemNode.position.x, itemNode.position.y));
            })

            if(!isBinding) { // 绑定拖拽事件
                isBinding = true;
                this.moveNode.off(Node.EventType.TOUCH_START);
                this.moveNode.off(Node.EventType.TOUCH_MOVE);
                this.moveNode.off(Node.EventType.TOUCH_END);

                this.moveNode.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
                    this.registerItemNode.active = true;
                    event.preventSwallow = true;
                });
                this.moveNode.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
                    if(!this.AllowRegisterItmeMove || !GameDataManager.curGameIsRun) return;
    
                        
                    let touchWorldPos = event.getLocation();
                    let offsetX = event.getDeltaX();
                    let offsetY = event.getDeltaY();
                    let x = this.registerItemNode.position.x;
                    let y = this.registerItemNode.position.y;
    
                    console.log("offsetX:", x + offsetX)
                    console.log("offsetY:", y + offsetY)
                    // this.registerItemNode.worldPosition = v3(touchWorldPos.x, touchWorldPos.y);
                    this.registerItemNode.position = v3(x + offsetX, y + offsetY);
                })
    
                this.moveNode.on(Node.EventType.TOUCH_END, () => {
                    if(!GameDataManager.curGameIsRun) return;
                    let itemIndex = this.registerIsExistItemTop();

                    this.item1.active = true;
                    this.registerItemNode.active = false;
                    this.AllowRegisterItmeMove = false;

                    if(itemIndex > -1) {

                        let item1 = this.itemParent.children[this.item1["curIndex"]];
                        let item2 = this.itemParent.children[itemIndex];
                        let item1Id = item1["itemId"];
                        let item2Id = item2["itemId"];
                        
                        item1["itemId"] = item2Id;
                        item1.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[item2Id - 1];
                        item2["itemId"] = item1Id;
                        item2.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[item1Id - 1];

                        let continuousItemList = this.getContinuousItemList();

                        if(continuousItemList.length > 0) {
                            let existItemNum = 0;

                            for(let i: number = 0; i < continuousItemList.length ;i++) {
                                let item = continuousItemList[i].obj;
                                let index = continuousItemList[i].index;

                                this.itemParent.children[index] == null;
                                item["itemId"] = -1;
                                item.active = false;
                            }

                            this.itemParent.children.forEach((item) => {
                                if(item && item["itemId"] > -1) {
                                    existItemNum++;
                                }
                            })

                            if(existItemNum <= 10) {
                                GameDataManager.curWinNum += 100;
                                GameDataManager.curUserCoin += 100;
                                GameDataManager.mainLayerScript.showEnd();
                                console.log("胜利");
                                this.resetItemParentPos();
                            }
                        }
                    }
                });
            }
        }
        
    }

    /**
     * 设置可拖拽节点
    */
    setRegisterItem(itemId, pos: Vec3) {
        this.registerItemNode["itemId"] = itemId;
        this.registerItemNode.position = pos;
        this.registerItemNode.getComponent(Sprite).spriteFrame = this.itemSpriteFrameList[itemId - 1];
    }

    /**
     * 验证当前拖拽节点是否拖到元素上
    */
    registerIsExistItemTop():number {
        let itemIndex = -1;
        let curRegisterWorldPos = this.registerItemNode.getWorldPosition();

        this.itemParent.children.forEach((item, i) => {
            if(!item || item["itemId"] == -1) return;
            let itemWorldPos = item.getWorldPosition();

            if(curRegisterWorldPos.x > itemWorldPos.x - this.itemSize.width/2 && curRegisterWorldPos.x < itemWorldPos.x + this.itemSize.width/2 &&
            curRegisterWorldPos.y > itemWorldPos.y - this.itemSize.height/2 && curRegisterWorldPos.y < itemWorldPos.y + this.itemSize.height/2) {
                itemIndex = i;
            }
        })

        return itemIndex;
    }

    /**
     * 获得满足要求的连续item数据
    */
    getContinuousItemList() {
        for(let i: number = 0; i < this.rowNum; i++) { // 遍历行
            let rowNum = i;
            let rowList: any[] = [];
            let rowContinuousList: any[] = [];

            this.itemParent.children.forEach((item1111, index1111) => { 
                let rowNum1 = Math.floor(index1111 / this.colNum);

                if(rowNum == rowNum1) {
                    rowList.push({
                        obj: item1111,
                        index: index1111
                    });
                }
            });

            rowContinuousList = this.checkArrayContinuous(rowList);
            if(rowContinuousList.length >= 4) {
                return rowContinuousList;
            }
        }

        for(let i: number = 0; i < this.colNum; i++) { // 遍历列
            let colNum = i;
            let colList: any[] = [];
            let colContinuousList: any[] = [];

            this.itemParent.children.forEach((item1111, index1111) => { 
                let colNum1 = index1111 % this.colNum;

                if(colNum == colNum1) {
                    colList.push({
                        obj: item1111,
                        index: index1111
                    });
                }
            });

            colContinuousList = this.checkArrayContinuous(colList);
            if(colContinuousList.length >= 4) {
                return colContinuousList;
            }
        }

        return [];
    }

    /**
     * 检测数组是否连续
    */
    checkArrayContinuous(dataList: any[]) {
        let lastId = 0; // 上一次的id
        let continuousList: any[] = []; // 连续的item

        for(let i: number = 0; i < dataList.length; i++) {
            let data = dataList[i];
            if(lastId == 0 || (data.obj && lastId == data.obj["itemId"] && data.obj["itemId"] != -1)) {
                lastId = data.obj ? data.obj["itemId"] : -1;
            } else {
                lastId = 0;
                continuousList = [];
            }
            continuousList.push(data);

            if(continuousList.length >= 4) { // 连续四个了
                return continuousList;
            }
        }

        return [];
    }

    /**
     * 开始游戏
    */
    startGame() {
        this.initGameData();
        // this.startMoveItemParentPos();
    }

    /**
     * 暂停游戏
    */
    pauseGame() {
        this.unschedule(this.moveItemFunc);
        console.log("暂停游戏");
    }

    /**
     * 恢复游戏
    */
    recoverGaem() {
        this.startMoveItemParentPos();
    }

    /**
     * 清除邻近节点
    */
    itemNearClear(item) {
        let itemIndex = item["curIndex"];
        let row = Math.floor(itemIndex / this.colNum);
        let col = itemIndex % this.colNum;

        let itemIndexList: Array<number> = [itemIndex];
        let firstItemId = item["itemId"];

        let pushNearNode = (curItem) => {
            let curItemIndex = curItem["curIndex"];
            let curRow = Math.floor(curItemIndex / this.colNum);
            let curCol = curItemIndex % this.colNum;

            let topIndex = (curRow-1) * this.colNum + curCol;
            let bottomIndex = (curRow+1) * this.colNum + curCol; 
            let leftIndex = curRow * this.colNum + curCol - 1;
            let rightIndex = curRow * this.colNum + curCol + 1;

            let topCol = topIndex % this.colNum;
            let bottomCol = bottomIndex % this.colNum;
            let leftRow = Math.floor(leftIndex / this.colNum);
            let rightRow = Math.floor(rightIndex / this.colNum);

            if(this.itemParent.children[topIndex] && this.itemParent.children[topIndex]["itemId"] == firstItemId && itemIndexList.indexOf(topIndex) == -1 && topCol == curCol) {
                itemIndexList.push(topIndex)
                pushNearNode(this.itemParent.children[topIndex])
            }
            if(this.itemParent.children[bottomIndex] && this.itemParent.children[bottomIndex]["itemId"] == firstItemId && itemIndexList.indexOf(bottomIndex) == -1 && bottomCol == curCol) {
                itemIndexList.push(bottomIndex)
                pushNearNode(this.itemParent.children[bottomIndex])
            }
            if(this.itemParent.children[leftIndex] && this.itemParent.children[leftIndex]["itemId"] == firstItemId && itemIndexList.indexOf(leftIndex) == -1 && leftRow == curRow) {
                itemIndexList.push(leftIndex)
                pushNearNode(this.itemParent.children[leftIndex])
            }
            if(this.itemParent.children[rightIndex] && this.itemParent.children[rightIndex]["itemId"] == firstItemId && itemIndexList.indexOf(rightIndex) == -1 && rightRow == curRow) {
                itemIndexList.push(rightIndex)
                pushNearNode(this.itemParent.children[rightIndex])
            }
        }

        pushNearNode(item);
        console.log("当前连续节点：", itemIndexList);
        if(itemIndexList.length >= 3) {
            let aniNum = 0;

            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[5])
            GameDataManager.isAllowClear = false;
            itemIndexList.forEach(index => {
                let itemNode = this.itemParent.children[index];
                aniNum += 2;
                tween(itemNode)
                    .by(0.2, {scale: v3(0.1, 0.1, 0.1)})
                    .call(() => {
                        itemNode.scale = v3(itemNode.scale.x - 0.1, itemNode.scale.z - 0.1, itemNode.scale.z - 0.1);
                        if(--aniNum == 0) {
                            let isWin = true;
                            this.itemParent.children.forEach(itemNode11 => {
                                if(itemNode11["itemId"] > 0) {
                                    isWin = false;
                                }
                            });
                            if(isWin) {
                                GameDataManager.curWinNum += 100;
                                GameDataManager.curUserCoin += 100;
                                GameDataManager.mainLayerScript.showEnd();
                                console.log("胜利");
                                this.resetItemParentPos();
                            } else {
                                GameDataManager.isAllowClear = true;
                            }
                        }
                    })
                    .start();
                
                tween(itemNode.getComponent(Sprite).color)
                    .to(0.2, {a: 0})
                    .call(() => {
                        itemNode.active = false;
                        itemNode["itemId"] = 0;
                        itemNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                        if(--aniNum == 0) {
                            let isWin = true;
                            this.itemParent.children.forEach(itemNode11 => {
                                if(itemNode11["itemId"] > 0) {
                                    isWin = false;
                                }
                            });
                            if(isWin) {
                                GameDataManager.curWinNum += 100;
                                GameDataManager.curUserCoin += 100;
                                GameDataManager.mainLayerScript.showEnd();
                                console.log("胜利");
                                this.resetItemParentPos();
                            } else {
                                GameDataManager.isAllowClear = true;
                            }
                        }
                    })
                    .start();
                    
                
            })
        }

    }

    /**
     * 重置元素位置
    */
    resetItemParentPos() {
        this.itemParent.position = v3(this.itemParent["startPos"].x, this.itemParent["startPos"].y);
        this.itemParent.children.forEach(item => {
            item.active = true;
        })
    }

    /**
     * 开始移动节点
    */
    startMoveItemParentPos() {
        this.schedule(this.moveItemFunc, 3);
    }

    /**
     * 移动方法
    */
    moveItemFunc() {
        this.itemParent.position = v3(this.itemParent.position.x, this.itemParent.position.y - 93.5);
        if(this.isItemParentExceed()) {
            this.unschedule(this.moveItemFunc);
            GameDataManager.mainLayerScript.showEnd();
            console.log("失败")
            this.resetItemParentPos();
        }
    }

    /**
     * 判断格子节点是否超出
    */
    isItemParentExceed() {
        let isExceed = false;

        this.itemParent.children.forEach(item => {
            if(isExceed) return;

            let endWorldPos =  this.itemParent.getParent().getWorldPosition();
            let itemWorldPos = item.getWorldPosition();

            if(itemWorldPos.y < endWorldPos.y - this.itemParent.getParent().getComponent(UITransform).height/2 && // 位置超出
            item["itemId"] > 0) { // 有值
                isExceed = true;
            }
        })

        return isExceed;

    }

    update(deltaTime: number) {
    }
}


