import { Component, EPSILON, Node, Prefab, RenderData, ScrollView, StencilManager, UIRenderer, UITransform, Vec2, _decorator, approx, cclegacy, clamp, error, gfx, instantiate, isValid, log, v2, v3 } from "cc";
const { ccclass, property, menu } = _decorator;

/**
 * 循环+分帧滑动面板
 */
@ccclass('LevelRender')
@menu("性能优化/RecycleScroll")
export default class RecycleScroll extends Component {
    /** item预制 */
    @property(Prefab)
    itemPrefab: Prefab = null;

    /** item间隔 */
    @property(Vec2)
    spacing: Vec2 = v2();

    /** item数量 */
    private _numItems: number = 0;
    
    public get numItems() {
        return this._numItems;
    }
    public set numItems(value: number) {
        this._numItems = value;
        this._hideAllItems();
        this._initialize();
        this._updateContentHeight();
        // this.scheduleOnce(() => {
        // 	this._initialize();
        // });
        this.updateAllItems();
    }

    /** 视图内显示列数 */
    private _viewCol: number = 0;
    /** 视图内显示行数 */
    private _viewRow: number = 0;
    /** 视图窗宽 */
    private _viewW: number = 0;
    /** 视图窗高 */
    private _viewH: number = 0;
    /** item格子宽 */
    private _itemW: number = 0;
    /** item格子高 */
    private _itemH: number = 0;
    /** content上一次y坐标 */
    private _lastPosY: number = 0;
    /** 是否已初始化 */
    private _isInit: boolean = false;
    /** item的index */
    private _itemsUUIDToIndex: { [uuid: string]: number } = {};

    private _itemsIndexToNode: { [index: string]: Node } = {};

    private _fleshInterval: number = 0.2;
    private _fleshCounter: number = 0;

    /** item列表 */
    public itemList: Node[] = [];
    /** item父节点 */
    public content: UITransform = null;

    /** item刷新回调 */
    public onItemRender(index: number, node: Node) { }
    /** item点击回调 */
    public onItemClicked(index: number, node: Node) { }

    /** 刷新所有item */
    public updateAllItems() {
        this.itemList.forEach((item: Node, index: number) => {
            this._updateItem(this._itemsUUIDToIndex[item.uuid], item);
        });
    }

    public scrollToIndexVertical(index: number, duration: number = 0.2) {
        const contentUTF = this._getContentUTF();
        const p = (this._itemH * index) / (contentUTF.height - this._viewH);
        this.node.getComponent(ScrollView).scrollToPercentVertical(1 - p, duration);
    }

    public getItemDirPos(itemIndex: number) {
        const x = (itemIndex % this._viewCol) * this._itemW;
        const y = -Math.floor(itemIndex / this._viewCol) * this._itemH + (this.spacing.y >> 1);
        const contentUTF = this._getContentUTF();
        const wpos = contentUTF.convertToWorldSpaceAR(v3(x, y));
        const parentUTF = this._getContentUTF().node.parent.getComponent(UITransform);
        const itemInViewPos = parentUTF.convertToNodeSpaceAR(wpos);
        let horizon = 0;
        let vertical = 0;
        horizon = itemInViewPos.x < -this._viewW / 2 ? -1 : (itemInViewPos.x > this._viewW / 2 ? 1 : 0);
        vertical = itemInViewPos.y < -this._viewH / 2 ? -1 : (itemInViewPos.y > this._viewH / 2 ? 1 : 0);
        return [horizon, vertical];
    }

    private _hideAllItems() {
        this.itemList.forEach((item: Node, index: number) => {
            item.active = false;
        });
    }

    /** 获取content */
    private _getContentUTF() {
        return this.node.getComponent(ScrollView).content.getComponent(UITransform);
    }

    /** 初始化 */
    private _initialize() {
        if (this._isInit) return;
        const scroll = this.node.getComponent(ScrollView);
        scroll.enabled = false;
        this._isInit = true;
        const content = this._getContentUTF();
        this.content = content;
        const viewUTF = content.node.parent.getComponent(UITransform);
        this._viewW = viewUTF.width;
        this._viewH = viewUTF.height;

        const itemData = this.itemPrefab.data;
        this._itemW = itemData.width + this.spacing.x;
        this._itemH = itemData.height + this.spacing.y;

        this._lastPosY = content.node.position.y;
        this._viewRow = Math.ceil(this._viewH / this._itemH) + 1;
        this._viewCol = Math.floor(this._viewW / this._itemW);
        const surplusW = this._viewW - (this._viewCol * this._itemW);
        const startPos = v3((-this._viewW >> 1) + (this._itemW >> 1) + (surplusW >> 1), -this._itemH >> 1);

        const cNum = this._viewRow * this._viewCol;
        log(`实例化数量:${cNum}`);

        let createNum = 0;
        const createFunc = (index: number) => {
            if (!isValid(content)) return; //异步创建，创建完回来父节点有可能已经被销毁
            const item = instantiate(this.itemPrefab);
            item.parent = content.node;
            const x = (index % this._viewCol) * this._itemW;
            const y = -Math.floor(index / this._viewCol) * this._itemH + (this.spacing.y >> 1);
            const pos = v3(x + startPos.x, y + startPos.y);
            item.setPosition(pos);
            item.on(Node.EventType.TOUCH_END, () => {
                this.onItemClicked(this._itemsUUIDToIndex[item.uuid], item);
            }, this);
            this.itemList.push(item);

            this._updateItem(index, item);

            this._itemsUUIDToIndex[item.uuid] = index;
            this._itemsIndexToNode[index] = item;

            createNum++;
            if (createNum == cNum) {
                scroll.enabled = true;
            }
        }
        /** 分帧创建item */
        frameLoad(cNum, createFunc);
    }

    /** 更新centent高度 */
    private _updateContentHeight() {
        const content = this._getContentUTF();
        const col = Math.floor(this._viewW / this._itemW);
        const row = Math.ceil(this.numItems / col);
        content.height = row * (this.itemPrefab.data.height + this.spacing.y) - (this.spacing.y);
    }

    /** 获取item在view坐标系的对标 */
    private _getPosInView(item: Node) {
        const content = this._getContentUTF();
        const viewUTF = content.node.parent.getComponent(UITransform);
        const wpos = content.convertToWorldSpaceAR(item.position);
        const lpos = viewUTF.convertToNodeSpaceAR(wpos);
        return lpos;
    }

    /** 更新item */
    private _updateItem(index: number, item: Node) {
        const isShow = index >= 0 && index < this.numItems;
        item.active = isShow;
        if (isShow) {
            this.onItemRender(index, item);
        }
    }

    public update(dt: number) {
        const content = this._getContentUTF();
        const currY = content.node.position.y;
        const dtY = currY - this._lastPosY;
        this._lastPosY = currY;
        // this._fleshCounter += dt;
        // if (dtY == 0 && this._fleshCounter < this._fleshInterval) return;
        // this._fleshCounter = 0;
        const isDown = dtY < 0;
        const itemsLen = this.itemList.length;
        for (let i = 0; i < itemsLen; ++i) {
            const item = this.itemList[i];
            const posInView = this._getPosInView(item);
            const viewHalfH = this._viewH >> 1;
            const itemHalfH = this._itemH >> 1;
            const lastIndex = this._itemsUUIDToIndex[item.uuid];
            let currIndex = lastIndex;
            if (!isDown) {
                if (posInView.y >= viewHalfH + itemHalfH) {
                    item.setPosition(v3(item.position.x, item.position.y - (this._viewRow * this._itemH)));
                    currIndex = lastIndex + itemsLen;
                }
            } else {
                if (posInView.y <= -(viewHalfH + itemHalfH)) {
                    item.setPosition(v3(item.position.x, item.position.y + (this._viewRow * this._itemH)));
                    currIndex = lastIndex - itemsLen;
                }
            }
            if (currIndex != lastIndex) {
                this._updateItem(currIndex, item);
            }
            this._itemsUUIDToIndex[item.uuid] = currIndex;
            this._itemsIndexToNode[currIndex] = item;
        }
    }
}

/** 分帧执行 */
function frameLoad(loopTimes: number, func: Function, frameTime: number = 16, __index: number = 0) {
    let loop = loopTimes;
    let start = new Date().getTime();
    let end = 0;
    let dt = 0;
    for (let i = 0; i < loop; ++i) {
        if (__index >= loop) {
            break;
        }
        try {
            func && func(__index);
        } catch (e) {
            error(e);
        }
        __index++;
        end = new Date().getTime();
        dt = end - start;
        if (dt > frameTime) {
            setTimeout(() => {
                frameLoad(loop, func, frameTime, __index);
            }, 10);
            break;
        }
    }
}
