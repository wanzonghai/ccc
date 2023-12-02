import { _decorator, Component, Node, v3, Size, size, SpriteFrame, Sprite, Vec3, UITransform, tween, UIOpacity, color, AudioSource, find, EventTouch, v2, Prefab, instantiate, QuatCurve, Tween, game, Label } from 'cc';
import GameDataManager from './GameDataManager';
import util from './util';
import { CardObj, card, cardAniType } from '../card/scr/card';
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

    @property({type: Node, tooltip: "可放置节点"})
    placeParentNode: Node = null;

    @property({type: Node, tooltip: "刷新节点"})
    refreshNode: Node = null;

    @property({type: Prefab, tooltip: "牌预制"})
    cardPre: Prefab = null;

    /** 行数 */
    rowNum = 6;

    /** 列数 */
    colNum = 7;

    /** 列最少卡牌数 */
    colMiniCardNum: number = 2;

    /** 列最多卡牌数 */
    colMaxCardNum: number = 6;

    /** 元素大小 */
    itemSize: Size = size(0, 0);

    /** 元素缩放 */
    itemScale: number = 1.4;

    /** 元素间距X */
    itemIntervalX: number = 10;

    /** 元素间距Y */
    itemIntervalY: number = -43.5;

    /** 元素顶部出现位置 */
    itemStartPos: number = 0;

    /** 是否允许可拖拽节点移动 */
    AllowRegisterItmeMove: boolean = false;

    /** 要换位置的节点 */
    item1: Node = null;

    /** 存量牌最大数量 */
    saveCardMaxNum: number = 25;
    
    /** 总牌最大数量 */
    cardSumMaxNum: number = 52;

    /** 牌种类数量 */
    cardTypeNum: number = 13;

    /** 牌花色数量 */
    cardFlowerTypeNum: number = 4;

    /** 当前可用牌数 */
    curCardNum: number = this.cardSumMaxNum - this.saveCardMaxNum;

    /** 当前可放置节点数量 */
    curPlaceNum: number = 1;

    /** 当前刷新次数 */
    curRefreshNum: number = 4;

    /** 牌库数据 */
    cardStoreroom: Array<CardObj> = [];

    /** 动画播放状态 */
    aniPlayState: boolean = false;

    start() {
        let refreshItem = this.refreshNode.getChildByName("card");
        refreshItem.getComponent(card).initCard(new CardObj(15, 5));
        refreshItem.on(Node.EventType.TOUCH_START, (event) => {
            console.log("点击刷新卡")
            if(!GameDataManager.curGameIsRun || GameDataManager.isPause || this.aniPlayState) return;
            
            Tween.stopAllByTarget(this.registerItemNode);
            this.registerItemNode["runAni"] && this.registerItemNode["runAni"].stop();
            this.registerItemNode.scale = v3(this.itemScale, this.itemScale, this.itemScale);
            this.registerItemNode.getComponent(Sprite).color = color(255, 255, 255, 255);
            this.AllowRegisterItmeMove = true;
            tween(refreshItem)
                .to(0.15, {scale: v3(this.itemScale-0.1, this.itemScale-0.1, this.itemScale-0.1)})
                .to(0.15, {scale: v3(this.itemScale+0.1, this.itemScale+0.1, this.itemScale+0.1)})
                .to(0.2, {scale: v3(this.itemScale, this.itemScale, this.itemScale)})
                .start();
            tween(this.registerItemNode)
                .to(0.15, {scale: v3(this.itemScale-0.1, this.itemScale-0.1, this.itemScale-0.1)})
                .to(0.15, {scale: v3(this.itemScale+0.1, this.itemScale+0.1, this.itemScale+0.1)})
                .to(0.2, {scale: v3(this.itemScale, this.itemScale, this.itemScale)})
                .start();
            this.item1 = refreshItem;
            this.setRegisterItem(refreshItem.getComponent(card).cardData, refreshItem.position.clone());
            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[5])
        })
        this.registerItemNode.parent.position = this.itemParent.position.clone();QuatCurve    
        this.itemSize = util.copyObj(this.cardPre.data.getComponent(UITransform).contentSize);
        this.itemParent["startPos"] = v3(this.itemParent.position.x, this.itemParent.position.y);
        this.registerItemNode.active = false;
        this.updatePlaceLock();
        this.creatorItemNode();
    }

    /**
     * 创建item节点
    */
    creatorItemNode() {
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = instantiate(this.cardPre);
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let itemWidth = this.itemSize.width * this.itemScale;
            let itemHeight = this.itemSize.height * this.itemScale;

            itemNode.addComponent(Sprite);
            itemNode.scale = v3(this.itemScale, this.itemScale, this.itemScale);
            itemNode["curIndex"] = i;
            this.itemParent.addChild(itemNode);
            itemNode.position = v3(itemWidth / 2 + col * itemWidth + col * this.itemIntervalX, itemHeight / 2 + row * itemHeight + row * this.itemIntervalY - (row * itemHeight/2));

            itemNode.on(Node.EventType.TOUCH_END, () => {
                if(!GameDataManager.isAllowClear || !GameDataManager.curGameIsRun || GameDataManager.isPause) return;
            })
        }
    }

    /**
     * 获取每列牌数量
    */
    getColCardNumList() {
        this.curCardNum = this.cardSumMaxNum - this.saveCardMaxNum;
        let lineLenthList = [];
        let curLineIndex = 0;
        let getLineLenght = () => {
            if(!lineLenthList[curLineIndex]) { // 当前列无数据时
                lineLenthList[curLineIndex] = 0;
            }
            let residueCardNum = (this.colNum - curLineIndex) * this.colMiniCardNum; // 需要剩下多少
            let curColMaxCardNum = this.curCardNum - residueCardNum >= this.colMaxCardNum ? this.colMaxCardNum : this.curCardNum - residueCardNum;
            let curLineLength = util.getRandom(this.colMiniCardNum, curColMaxCardNum);

            lineLenthList[curLineIndex] = curLineLength;
            this.curCardNum -= curLineLength;
            if(curLineIndex < this.colNum-1) {
                curLineIndex++;
                getLineLenght();
            }
        };

        getLineLenght();
        for(let i: number = 0; i < this.curCardNum; i++) { // 如果有剩下的再遍历一次补进去
            let getLineIndex = () => {
                let lineIndex = 0;
                
                lineIndex = util.getRandom(0, this.colNum-1);
                if(lineLenthList[lineIndex] >= this.colMaxCardNum) {
                    lineIndex = getLineIndex();
                }

                return lineIndex;
            }
            
            lineLenthList[getLineIndex()] += 1;
        }

        console.log("列内卡牌分布：", lineLenthList);
        return lineLenthList;
    }

    /**
     * 获取牌数据
    */
    getCardData() {
        let cardData: CardObj = new CardObj(util.getRandom(2, 14), util.getRandom(1, 4));
        return cardData;
    }

    /**
     * 初始化牌库数据
    */
    initCardStoreroom() {
        this.cardStoreroom = [];

        for(let i: number = 2; i < this.cardTypeNum+2; i++) {
            for(let j: number = 1; j <= this.cardFlowerTypeNum; j++) {
                this.cardStoreroom.push(new CardObj(i, j));
            }
        }

        this.cardStoreroom.sort(() => Math.random() - 0.5);
    }


    /**
     * 从牌库取牌
     * @param numberId （传值后根据此id找其大小差距为1牌）
    */
    getCardByStoreromm(isClear: boolean = true, numberId?: number) {
        let miniNumberId = 2; // 最小牌id
        let maxNumberId = miniNumberId + this.cardTypeNum - 1; // 最大牌id

        if(numberId == undefined) {
            let cardIndex = util.getRandom(0, this.cardStoreroom.length-1);

            return this.cardStoreroom.splice(cardIndex, 1)[0];
        } else {
            let matchingList = [];

            for(let i: number = 0; i < 1; i++) { // 获取需要匹配的id的数组

                if(numberId - (i+1) >= miniNumberId) {
                    matchingList.push(numberId - (i+1));
                }

                if(numberId + (i+1) <= maxNumberId) {
                    matchingList.push(numberId + (i+1));
                }
            }

            for(let i: number = 0; i < this.cardStoreroom.length; i++) {
                if(matchingList.indexOf(this.cardStoreroom[i].numberId) != -1) {
                    return this.cardStoreroom.splice(i, 1)[0];
                }
            }

            return this.getCardByStoreromm(); // 找不到匹配的了随机找一个
        }
    }

    /**
     * 给牌库加牌
    */
    storeroomAddCard(cardData: CardObj) {
        this.cardStoreroom.push(cardData);
    }

    /**
     * 检查牌库内是否还有当前牌面可消除牌
    */
    checkStoreroomIsExistLegalCard(): boolean {
        for(let i: number = 0; i < this.cardStoreroom.length; i++) {
            let cardData = this.cardStoreroom[i];

            if(this.checkIsMatchingShowCard(cardData)) {
                return true;
            }
        }

        return false;
    }

    /**
     * 判断当前牌是否可匹配展示牌
    */
    checkIsMatchingShowCard(cardData: CardObj): boolean {
        let showCardDataList: Array<CardObj> = [];
        let isMatching: boolean = false;

        this.itemParent.children.filter((cardNode, index) => { // 获取顶部展示的牌数据
            let cardNodeScr = cardNode.getComponent(card);

            if(cardNode.active && cardNodeScr.curState) {
                showCardDataList.push(cardNodeScr.cardData);
            }
        })

        showCardDataList.filter(showCardData => {
            let showCardId = showCardData.numberId;

            for(let i: number = 0; i < 1; i++) {
                if(showCardId == cardData.numberId - (i+1) || showCardId == cardData.numberId + (i+1) ) {
                    isMatching = true;
                }
            }
        })

        return isMatching;
    }
    

    /**
     * 判断当前展示牌中是否有匹配牌
    */
    checkExistMatchingCard(idList?) {
        let miniNumberId = 2; // 最小牌id
        let maxNumberId = miniNumberId + this.cardTypeNum - 1; // 最大牌id
        let matchingList = [];
        let matchingNumber = 0;

        for(let j: number = 0; j < this.placeParentNode.children.length; j++) { // 获取顶部牌值可匹配消除的数字
            let placeNode = this.placeParentNode.children[j];
            let cardScr = placeNode.getComponent(card);
            let cardData = cardScr.cardData;

            if(cardScr.curState && cardData) { // 设置了值并且未被锁
                let numberId = cardData.numberId;

                for(let i: number = 0; i < this.curPlaceNum; i++) { // 获取需要匹配的id的数组
        
                    if(numberId - (i+1) >= miniNumberId) {
                        matchingList.push(numberId - (i+1));
                    }
        
                    if(numberId + (i+1) <= maxNumberId) {
                        matchingList.push(numberId + (i+1));
                    }
                }
            }
        }

        if(idList == undefined) {
            for(let i: number = 0; i < this.itemParent.children.length; i++){
                let itme = this.itemParent.children[i];
                let itemScr = itme.getComponent(card);
    
                if(itemScr.curState && matchingList.indexOf(itemScr.cardData.numberId)) { // 牌展示中并且存在可匹配数据
                    matchingNumber++;
                }
            }
        } else {
            for(let i: number = 0; i < idList.length; i++){
                if(matchingList.indexOf(idList[i]) > -1) { // 牌展示中并且存在可匹配数据
                    matchingNumber++;
                }
            }
        }

        return matchingNumber;
    }

    /**
     * 更新可放置节点锁
    */
    updatePlaceLock(aniCall?: Function) {
        for(let i: number = 0; i < this.placeParentNode.children.length; i++) {
            let child = this.placeParentNode.children[i];

            if(i < this.curPlaceNum) {
                if(i == this.curPlaceNum - 1) {
                    find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                    child.getComponent(card).showAni(cardAniType.turnOpen);
                }
                child.getComponent(card).hideLock(aniCall);
            } else {
                child.getComponent(card).showLock();
            }
        }
    }

    /**
     * 设置顶部可放置节点数据
    */
    setPlaceNodeData(index: number, isBack: boolean) {
        let cardData: CardObj = null;
        let matchingList = [];

        this.itemParent.children.filter((cardNode, index) => { // 获取顶部展示的牌数据
            let cardNodeScr = cardNode.getComponent(card);

            if(cardNode.active && cardNodeScr.curState) {
                matchingList.push(cardNodeScr.cardData.numberId);
            }
        })

        let getPlaceNodeCardData = () => {
            cardData = this.getCardByStoreromm();
            let isMatching = false;

            matchingList.filter(matchingId => {
                for(let i: number = 0; i < 1; i++) {
                    if(matchingId == cardData.numberId - (i+1) || matchingId == cardData.numberId + (i+1) ) {
                        isMatching = true;
                    }
                }
            })

            if(!isMatching && matchingList.length > 0 && this.checkStoreroomIsExistLegalCard()) { // 无可匹配牌把牌存回去并随机找过一张
                this.storeroomAddCard(cardData);
                getPlaceNodeCardData();
            }
        }
        getPlaceNodeCardData();

        this.placeParentNode.children[index].getComponent(card).initCard(cardData, isBack)
    }

    /**
     * 获取底部牌数据
    */
    getBottomCardData(isCheck: boolean = false): CardObj {
        let getCardData = () => {
            let carData: CardObj = this.getCardByStoreromm();
            let curCardDataList: Array<CardObj> = [carData];
            this.itemParent.children.filter((cardNode, index) => { // 获取顶部展示的牌数据
                let cardNodeScr = cardNode.getComponent(card);
    
                if(cardNode.active && cardNodeScr.curState) {
                    curCardDataList.push(cardNodeScr.cardData);
                }
            })
            let matchingNumb = this.checkExistMatchingCard(curCardDataList);
    
            if(matchingNumb <= 0 && isCheck == true) { // 此张牌加入后在当前无可匹配
                this.storeroomAddCard(carData);
                carData = getCardData();
            }

            return carData;
        }

        return getCardData();
        
    }

    /**
     * 获取列第一张牌数据
    */
    getColFristCardData() {
        let matchingNum = util.getRandom(2, 4); // 两到四个可匹配数据
        let matchingList = new Array(this.colNum);
        let cardDataList = [];
        matchingList.fill(false, 0, this.colNum);
        let changeIndexList = util.getRandomListItme(matchingList, matchingNum);

        console.log("可消除牌数量");
        for(let i: number = 0; i < changeIndexList.length; i++) {
            matchingList[changeIndexList[i].index] = true;
        }

        for(let i: number = 0; i < matchingList.length; i++) {
            let getCardData = () => {
                let lastMatchingNumber = this.checkExistMatchingCard(cardDataList);
                let cardData = this.getCardByStoreromm(true, (matchingList[i] && lastMatchingNumber < matchingNum) ? this.placeParentNode.children[0].getComponent(card).cardData.numberId : undefined);
                cardDataList.push(cardData);
                let curMatchingNumber = this.checkExistMatchingCard(cardDataList);

                if(curMatchingNumber > matchingNum) { // 需要数量已经达标了重新找一个
                    this.storeroomAddCard(cardData); // 未使用把牌重新存回牌库内
                    curMatchingNumber --;
                    cardDataList.pop();
                    cardData = getCardData();
                }

                return cardData;
            }

            getCardData();
        }

        return cardDataList;
    }

    /**
     * 获得钥匙位置
    */
    getKeyPosList(): Array<number> {
        let keyPosList = [];
        let getKey = () => {
            let key = util.getRandom(0, this.colNum * this.rowNum-1);
            let row = Math.floor(key / this.colNum);

            if(keyPosList.indexOf(key) == -1 && row != 0 && this.itemParent.children[key].active && !this.itemParent.children[key].getComponent(card).curState) {
                keyPosList.push(key);
                if(keyPosList.length < 2) {
                    getKey();
                }
            } else {
                getKey();
            }
        }

        getKey();

        console.log("钥匙位置：", keyPosList);
        return keyPosList;
    }
    

    /**
     * 初始化节点数据
    */
    initGameData() {
        this.resetGame();
        let isBinding: boolean = false;
        let colCardNumList = this.getColCardNumList();
        this.initCardStoreroom();
        this.setPlaceNodeData(0, false); // 随机取一张设置可放置节点位置
        let firstIdList = this.getColFristCardData();

        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = this.itemParent.children[i];
            let row = Math.floor(i / this.colNum);
            let col = i % this.colNum;
            let cardData = row == this.rowNum-1 ? firstIdList[col] : null;
            let nodeStartTouchFunc = (event) => {
                console.log("点击item")
                if(!GameDataManager.curGameIsRun || GameDataManager.isPause || this.aniPlayState || !itemNode.active || !itemNode.getComponent(card).curState) return;
                
                Tween.stopAllByTarget(this.registerItemNode);
                this.registerItemNode["runAni"] && this.registerItemNode["runAni"].stop();
                this.registerItemNode.scale = v3(this.itemScale, this.itemScale, this.itemScale);
                this.registerItemNode.getComponent(Sprite).color = color(255, 255, 255, 255);
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
                this.setRegisterItem(itemNode.getComponent(card).cardData, v3(itemNode.position.x, itemNode.position.y));
            }

            itemNode.active = this.rowNum - colCardNumList[col] <= row;
            itemNode.getComponent(card).initCard(cardData, row != this.rowNum-1);
            itemNode.on(Node.EventType.TOUCH_START, nodeStartTouchFunc);
            // itemNode.on(Node.EventType.TOUCH_MOVE, nodeStartTouchFunc);

            if(!isBinding) { // 绑定拖拽事件
                isBinding = true;
                this.moveNode.off(Node.EventType.TOUCH_START);
                this.moveNode.off(Node.EventType.TOUCH_MOVE);
                this.moveNode.off(Node.EventType.TOUCH_END);
                this.moveNode.off(Node.EventType.TOUCH_CANCEL);

                this.moveNode.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
                    event.preventSwallow = true;
                    console.log("点击节点")
                    let isExistShowItme: boolean = false; // 当前点击位置是否存在卡牌节点
                    let itemList = this.itemParent.children.concat(this.curRefreshNum > 0 ? [this.refreshNode.getChildByName("card")] : []);

                    for(let i: number = 0; i < itemList.length; i++) {
                        let itme = itemList[i];

                        let curState = itme.getComponent(card).curState;
                        let isExistNode = util.checkPointExistNode(itme, event.getUIStartLocation().clone());
                        if(itme.active && curState && isExistNode) {
                            isExistShowItme = true;
                            break;
                        }
                    }
                    if(!isExistShowItme || this.aniPlayState || GameDataManager.isPause) {
                        return;
                    }

                    this.registerItemNode.active = true;
                    find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[5])
                });
                this.moveNode.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
                    event.preventSwallow = true;
                    if(!this.AllowRegisterItmeMove || !GameDataManager.curGameIsRun) return;
    
                    // let touchWorldPos = event.getLocationInView();
                    let offsetX = event.getDeltaX();
                    let offsetY = event.getDeltaY();
                    let x = this.registerItemNode.position.x;
                    let y = this.registerItemNode.position.y;
    
                    console.log("offsetX:", x + offsetX)
                    console.log("offsetY:", y + offsetY)
                    // this.registerItemNode.worldPosition = v3(touchWorldPos.x, touchWorldPos.y);
                    this.registerItemNode.position = v3(x + offsetX, y + offsetY);
                })

                let endFunc = () => {
                    if(!GameDataManager.curGameIsRun || this.aniPlayState || GameDataManager.isPause) return;
                    let existItem = this.registerIsExistItemTop();
                    if(existItem) {
                        let existItemScr = existItem.getComponent(card);
                        let item1Scr = this.item1.getComponent(card);
                        let itme1Id = item1Scr.cardData.numberId;
                        let existItemId = existItemScr.cardData.numberId;
                        let isClear = false;
                        let aniNumber = 0;
                        let aniPlayEnd = () => {
                            this.aniPlayState = false;
                            if(GameDataManager.curWinNum >= 100) {
                                GameDataManager.mainLayerScript.showEnd();
                            }
                        }

                        if(itme1Id == 15) { // 刷新
                            
                            this.aniPlayState = true;
                            this.curRefreshNum--;
                            this.storeroomAddCard(util.copyObj(existItem.getComponent(card).cardData));
                            aniNumber++;
                            this.registerItemNode["runAni"] = util.tweenUpdate(0.5, (ratio) => {
                                let scale = 1.4 + 0.6 * ratio;
    
                                this.registerItemNode.scale = v3(scale, scale, scale);
                                this.registerItemNode.getComponent(Sprite).color = color(255, 255, 255, 255 - 255*ratio);
    
                                if(ratio == 1) {
                                    --aniNumber == 0 && aniPlayEnd();
                                    this.registerItemNode["runAni"] = null;
                                    this.registerItemNode.active = false;
                                }
                            })
                            aniNumber++;
                            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[6])
                            existItemScr.showAni(cardAniType.turnClose, () => {
                                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                                this.setPlaceNodeData(existItem.getSiblingIndex(), true);
                                existItemScr.showAni(cardAniType.turnOpen, () => {
                                    if(this.curRefreshNum == 1) {
                                        this.refreshNode.active = false;
                                    }
                                    --aniNumber == 0 && aniPlayEnd();
                                })
                            });
                            return;
                        }

                        for(let i: number = 0; i < 1; i++) {
                            if(itme1Id == existItemId - (i+1) || itme1Id == existItemId + (i+1) ) {
                                isClear = true;
                            }
                        }

                        if(!isClear) {
                            console.log("牌点数不对");
                            this.item1.active = true;
                            this.aniPlayState = false;
                            this.registerItemNode.active = false;
                        } else {
                            GameDataManager.curWinNum += 10;
                            GameDataManager.curUserCoin += 10;
                            GameDataManager.mainLayerScript.updateUserCoin();
                            this.aniPlayState = true;
                            let index = this.item1["curIndex"];
                            let row = Math.floor(index / this.colNum);
                            let col = index % this.colNum;
                            if(row > 0) { // 不是最后一个的时候展示下一张牌
                                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                                let nextNode = this.itemParent.children[(row-1) * this.colNum + col];

                                nextNode.getComponent(card).initCard(this.getBottomCardData());
                                aniNumber++;
                                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                                nextNode.getComponent(card).showAni(cardAniType.turnOpen, () => {
                                    if(--aniNumber == 0) {
                                        aniPlayEnd();
                                        this.item1 = null;
                                    }
                                });
                            } else {
                                this.aniPlayState = false;
                            }

                            if(this.item1["unLock"]) {
                                this.item1["unLock"] = false;
                                this.curPlaceNum ++;
                                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[9])
                                this.updatePlaceLock(() => {
                                    this.setPlaceNodeData(this.curPlaceNum-1, false);
                                });
                            }
                            item1Scr.curState = false;
                            aniNumber++;
                            find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[6])
                            existItemScr.showAni(cardAniType.turnClose, () => {
                                find("Canvas").getComponent(AudioSource).playOneShot(GameDataManager.mainLayerScript.audios[7])
                                this.setPlaceNodeData(existItem.getSiblingIndex(), true);
                                existItemScr.showAni(cardAniType.turnOpen, () => {
                                    if(--aniNumber == 0) {
                                        aniPlayEnd();
                                        this.item1 = null;
                                    }
                                })
                            })

                            aniNumber++;
                            this.registerItemNode["runAni"] = util.tweenUpdate(0.5, (ratio) => {
                                let scale = 1.4 + 0.6 * ratio;
    
                                this.registerItemNode.scale = v3(scale, scale, scale);
                                this.registerItemNode.getComponent(Sprite).color = color(255, 255, 255, 255 - 255*ratio);
    
                                if(ratio == 1) {
                                    if(--aniNumber == 0) {
                                        aniPlayEnd();
                                        this.item1 = null;
                                    }
                                    this.registerItemNode["runAni"] = null;
                                    this.registerItemNode.active = false;
                                }
                            })
                        }


                    } else {
                        console.log("未放置在指定节点上");
                        if(this.item1) {
                            this.item1.active = true;
                        }
                        this.registerItemNode.active = false;
                    }

                }
    
                this.moveNode.on(Node.EventType.TOUCH_END, endFunc);
                this.moveNode.on(Node.EventType.TOUCH_CANCEL, endFunc);
            }
        }

        
        let keyIndexList = this.getKeyPosList();
        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let itemNode = this.itemParent.children[i];
            if(keyIndexList.indexOf(i) > -1) {
                itemNode.getComponent(card).showKey();
                itemNode["unLock"] = true;
            }
        }
        
    }

    /**
     * 设置可拖拽节点
    */
    setRegisterItem(cardData: CardObj, pos: Vec3) {
        let cardScr = this.registerItemNode.getComponent(card);
        
        cardScr.initCard(util.copyObj(cardData));
        this.registerItemNode.position = pos;
    }

    /**
     * 验证当前拖拽节点是否拖到元素上
    */
    registerIsExistItemTop():Node {
        let existItme = null;
        let curRegisterWorldPos = this.registerItemNode.getWorldPosition();
        let width = this.itemSize.width * this.itemScale;
        let height = this.itemSize.height * this.itemScale;

        this.placeParentNode.children.forEach((item, i) => {
            let scr = item.getComponent(card);
            if(!scr.curState || !scr.cardData) return;
            let itemWorldPos = item.getWorldPosition();

            if(curRegisterWorldPos.x > itemWorldPos.x - width/2 && curRegisterWorldPos.x < itemWorldPos.x + width/2 &&
            curRegisterWorldPos.y > itemWorldPos.y - height/2 && curRegisterWorldPos.y < itemWorldPos.y + height/2) {
                existItme = item;
            }
        })

        return existItme;
    }

    /**
     * 开始游戏
    */
    startGame() {
        this.initGameData();
    }

    /**
     * 暂停游戏
    */
    stopGame() {

    }

    /**
     * 重置游戏
    */
    resetGame() {
        this.curCardNum = this.cardSumMaxNum - this.saveCardMaxNum;
        this.curPlaceNum = 1;
        this.curRefreshNum = 4;
        this.refreshNode.active = true;
        this.aniPlayState = false;
        this.item1 = null;

        this.itemParent.children.forEach(child => {
            Tween.stopAllByTarget(child);
            child.active = true;
            child.getComponent(card).hideKey();
            child.getComponent(card).resetNode();
            child.off(Node.EventType.TOUCH_START);
            child.off(Node.EventType.TOUCH_MOVE);
            child.off(Node.EventType.TOUCH_END);
        })
    }

    update(deltaTime: number) {
    }
}


