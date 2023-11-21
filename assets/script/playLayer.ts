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

    @property({type: cc.Node, tooltip: "小图展示"})
    miniShowNode: cc.Node = null;

    @property({type: cc.Node, tooltip: "拼图容器"})
    puzzleLayout: cc.Node = null;

    @property({type: cc.Node, tooltip: "动画展示精灵"})
    aniSprite: cc.Node = null;

    @property({type: cc.Node, tooltip: "触摸事件接收节点"})
    touchLayer: cc.Node = null;

    @property({type: [cc.SpriteFrame], tooltip: "拼图原图纹理"})
    MaxSpriteFrameList: cc.SpriteFrame[] = [];

    /** 切好的拼图纹理 */
    MinSpriteFrameList: Array<Array<Array<cc.SpriteFrame>>> = [];

    /** 行数 */
    rowNum: number = 4;

    /** 列数 */
    colNum: number = 4;

    /** 当前使用拼图序号 */
    curUsePuzzleIndex: number = 1;

    /** 当前使用的拼图纹理数组 */
    curUsePuzzleSpriteFrame: Array<Array<cc.SpriteFrame>> = [];

    /** 元素间隔 */
    itemInterval: number = 0;

    /** 当前选取的元素 */
    curSelectItem: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let curStage = DataManager.stageRanks[DataManager.curGameStage];

        this.rowNum = this.colNum = curStage;
        this.aniSprite.parent.setPosition(this.puzzleLayout.position.clone());
        this.initPuzzleSpriteFrame();
        this.initPuzzleNode();
        this.bindingPuzzleMoveEvent();
        this.testMesh();
    }

    /**
     * 初始化拼图纹理
    */
    initPuzzleSpriteFrame() {
        this.MaxSpriteFrameList.forEach((maxSpriteFrame) => {
            this.MinSpriteFrameList.push(util.gridCutSpriteFrame(maxSpriteFrame, this.rowNum, this.colNum, this.itemInterval))
        });

        this.curUsePuzzleSpriteFrame = this.MinSpriteFrameList[this.curUsePuzzleIndex];
    }

    /**
     * 初始化拼图节点
    */
    initPuzzleNode() {
        let spriteFrameSize: cc.Size = this.getPuzzleSpriteFrameByIndex(0).getRect().size;

        this.puzzleLayout.getComponent(cc.Layout).spacingX = this.itemInterval;
        this.puzzleLayout.getComponent(cc.Layout).spacingY = this.itemInterval;

        this.aniSprite.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.aniSprite.setContentSize(util.copyObj(spriteFrameSize));

        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            let puzzleNode = new cc.Node();
            let puzzleSprite = puzzleNode.addComponent(cc.Sprite);

            puzzleSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            puzzleNode["index"] = i;
            puzzleNode.setContentSize(util.copyObj(spriteFrameSize));
            this.puzzleLayout.addChild(puzzleNode);
        }

        this.scheduleOnce(() => {
            this.puzzleLayout.getComponent(cc.Layout).enabled = false;
        })
    }

    /**
     * 绑定拼图拖拽事件
    */
    bindingPuzzleMoveEvent() {
        let endCall = (e: cc.Event.EventTouch) => {
            if(!this.touchLayer["existItme"]) return;
            let palceNode = this.checkPlaceAllow(this.aniSprite.convertToWorldSpaceAR(cc.v2(0, 0)).clone());

            this.touchLayer["existItme"] = false;

            if(palceNode) { // 放置成功
                DataManager.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager.gameLayerScr.audioResList[9];
                DataManager.gameLayerScr.node.getComponent(cc.AudioSource).play();
                this.curSelectItem.active = true;
                this.curSelectItem["curPuzzleSpriteIndex"] = palceNode["curPuzzleSpriteIndex"];
                this.curSelectItem.getComponent(cc.Sprite).spriteFrame = this.getPuzzleSpriteFrameByIndex(palceNode["curPuzzleSpriteIndex"]);
                palceNode["curPuzzleSpriteIndex"] = this.aniSprite["curPuzzleSpriteIndex"];
                palceNode.getComponent(cc.Sprite).spriteFrame = this.getPuzzleSpriteFrameByIndex(this.aniSprite["curPuzzleSpriteIndex"]);

                this.aniSprite.active = false;
                if(this.checkIsWin()) {
                    DataManager.gameLayerScr.showResult(true);
                    console.log("胜利");
                }
            } else {
                this.aniSprite.active = false;
                this.curSelectItem.active = true;
            }
            
        }

        this.touchLayer.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
            let puzzleNode = this.getPuzzleNodeByWorldPos(e.getLocation());

            if(puzzleNode) { // 当前世界坐标上有元素
                DataManager.gameLayerScr.node.getComponent(cc.AudioSource).clip = DataManager.gameLayerScr.audioResList[9];
                DataManager.gameLayerScr.node.getComponent(cc.AudioSource).play();
                cc.Tween.stopAllByTarget(this.aniSprite);
                this.aniSprite.scale = 1.1;
                this.curSelectItem = puzzleNode;
                this.aniSprite["curPuzzleSpriteIndex"] = puzzleNode["curPuzzleSpriteIndex"];
                this.touchLayer["existItme"] = true;

                puzzleNode.active = false;
                this.aniSprite.setPosition(puzzleNode.position.clone());
                this.aniSprite.active = true;
                this.aniSprite.getComponent(cc.Sprite).spriteFrame = this.getPuzzleSpriteFrameByIndex(puzzleNode["curPuzzleSpriteIndex"]);

                cc.tween(this.aniSprite)
                    .to(0.05, {scale: 1.2})
                    .to(0.05, {scale: 1})
                    .to(0.05, {scale: 1.1})
                    .start();
            }
        })
        this.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            if(this.touchLayer["existItme"]) {
                let delay = e.getDelta();
    
                this.aniSprite.setPosition(delay.add(cc.v2(this.aniSprite.x, this.aniSprite.y)));
            }
        });
        this.touchLayer.on(cc.Node.EventType.TOUCH_END, endCall);
        this.touchLayer.on(cc.Node.EventType.TOUCH_CANCEL, endCall);
    }

    /**
     * 生成随机放置拼图
    */
    createRandomPuzzle() {
        this.curUsePuzzleIndex = util.getRandom(0, this.MaxSpriteFrameList.length-1);
        this.initPuzzleSpriteFrame();
        let indexList = [];

        for(let i: number = 0; i < this.rowNum * this.colNum; i++) {
            indexList.push(i);
        }

        indexList = util.getRandomListItme(indexList, indexList.length);

        this.puzzleLayout.children.forEach((puzzleNode, i) => {
            let puzzleSprite = puzzleNode.getComponent(cc.Sprite);
            let spriteIndex = indexList[i];

            puzzleNode["curPuzzleSpriteIndex"] = spriteIndex;
            puzzleSprite.spriteFrame = this.getPuzzleSpriteFrameByIndex(spriteIndex);
        });
        this.miniShowNode.getComponent(cc.Sprite).spriteFrame = this.MaxSpriteFrameList[this.curUsePuzzleIndex];
    }

    /**
     * 根据index获得当前数组中纹理
    */
    getPuzzleSpriteFrameByIndex(index: number) {
        let col = index % this.colNum;
        let row = Math.floor(index / this.colNum);

        return this.curUsePuzzleSpriteFrame[row][col];
    }

    /**
     * 检测是否放置在item上
    */
    checkPlaceAllow(worldPos: cc.Vec2 | cc.Vec3): cc.Node {
        let placeNode: cc.Node = null;

        this.puzzleLayout.children.forEach((puzzleNode) => {
            if(placeNode) return;
            placeNode = util.checkPointExistNode(puzzleNode, worldPos);
        });

        return placeNode;
    }

    /**
     * 获取世界坐标上拼图
    */
    getPuzzleNodeByWorldPos(worldPos: cc.Vec2 | cc.Vec3) {
        let placeNode: cc.Node = null;

        this.puzzleLayout.children.forEach((puzzleNode) => {
            if(placeNode) return;
            placeNode = util.checkPointExistNode(puzzleNode, worldPos);
        });

        return placeNode;
    }

    /**
     * 检测胜利
    */
    checkIsWin(): boolean {
        let isWin = true;

        this.puzzleLayout.children.forEach((puzzleNode) => {
            if(puzzleNode["curPuzzleSpriteIndex"] != puzzleNode["index"]) {
                isWin = false;
            }
        });

        return isWin;
    }

    /**
     * 测试mesh
    */
    testMesh() {
        let sp = this.miniShowNode.getComponent(cc.Sprite);

        // @ts-ignore
        sp.spriteFrame.vertices = {
            x: [0, 100, 100],
            y: [0, 0, 100],
            nu: [0, 1, 1],
            nv: [0, 0, 1], 
            triangles: [0, 1, 2],
        }
        
        // @ts-ignore
        sp.setVertsDirty();
    }

    // update (dt) {}
}
