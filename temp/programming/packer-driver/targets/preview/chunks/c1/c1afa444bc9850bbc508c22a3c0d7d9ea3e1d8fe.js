System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Prefab, ScrollView, UITransform, Vec2, _decorator, error, instantiate, isValid, log, v2, v3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, RecycleScroll;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  /** 分帧执行 */
  function frameLoad(loopTimes, func, frameTime, __index) {
    if (frameTime === void 0) {
      frameTime = 16;
    }

    if (__index === void 0) {
      __index = 0;
    }

    var loop = loopTimes;
    var start = new Date().getTime();
    var end = 0;
    var dt = 0;

    for (var i = 0; i < loop; ++i) {
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

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
      error = _cc.error;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      log = _cc.log;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fabae0iTZBN2Y68CEBhi+oJ", "RecycleScroll", undefined);

      __checkObsolete__(['Component', 'EPSILON', 'Node', 'Prefab', 'RenderData', 'ScrollView', 'StencilManager', 'UIRenderer', 'UITransform', 'Vec2', '_decorator', 'approx', 'cclegacy', 'clamp', 'error', 'gfx', 'instantiate', 'isValid', 'log', 'v2', 'v3']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * 循环+分帧滑动面板
       */

      _export("default", RecycleScroll = (_dec = ccclass('LevelRender'), _dec2 = menu("性能优化/RecycleScroll"), _dec3 = property(Prefab), _dec4 = property(Vec2), _dec(_class = _dec2(_class = (_class2 = class RecycleScroll extends Component {
        constructor() {
          super(...arguments);

          /** item预制 */
          _initializerDefineProperty(this, "itemPrefab", _descriptor, this);

          /** item间隔 */
          _initializerDefineProperty(this, "spacing", _descriptor2, this);

          /** item数量 */
          this._numItems = 0;

          /** 视图内显示列数 */
          this._viewCol = 0;

          /** 视图内显示行数 */
          this._viewRow = 0;

          /** 视图窗宽 */
          this._viewW = 0;

          /** 视图窗高 */
          this._viewH = 0;

          /** item格子宽 */
          this._itemW = 0;

          /** item格子高 */
          this._itemH = 0;

          /** content上一次y坐标 */
          this._lastPosY = 0;

          /** 是否已初始化 */
          this._isInit = false;

          /** item的index */
          this._itemsUUIDToIndex = {};
          this._itemsIndexToNode = {};
          this._fleshInterval = 0.2;
          this._fleshCounter = 0;

          /** item列表 */
          this.itemList = [];

          /** item父节点 */
          this.content = null;
        }

        get numItems() {
          return this._numItems;
        }

        set numItems(value) {
          this._numItems = value;

          this._hideAllItems();

          this._initialize();

          this._updateContentHeight(); // this.scheduleOnce(() => {
          // 	this._initialize();
          // });


          this.updateAllItems();
        }

        /** item刷新回调 */
        onItemRender(index, node) {}
        /** item点击回调 */


        onItemClicked(index, node) {}
        /** 刷新所有item */


        updateAllItems() {
          this.itemList.forEach((item, index) => {
            this._updateItem(this._itemsUUIDToIndex[item.uuid], item);
          });
        }

        scrollToIndexVertical(index, duration) {
          if (duration === void 0) {
            duration = 0.2;
          }

          var contentUTF = this._getContentUTF();

          var p = this._itemH * index / (contentUTF.height - this._viewH);
          this.node.getComponent(ScrollView).scrollToPercentVertical(1 - p, duration);
        }

        getItemDirPos(itemIndex) {
          var x = itemIndex % this._viewCol * this._itemW;
          var y = -Math.floor(itemIndex / this._viewCol) * this._itemH + (this.spacing.y >> 1);

          var contentUTF = this._getContentUTF();

          var wpos = contentUTF.convertToWorldSpaceAR(v3(x, y));

          var parentUTF = this._getContentUTF().node.parent.getComponent(UITransform);

          var itemInViewPos = parentUTF.convertToNodeSpaceAR(wpos);
          var horizon = 0;
          var vertical = 0;
          horizon = itemInViewPos.x < -this._viewW / 2 ? -1 : itemInViewPos.x > this._viewW / 2 ? 1 : 0;
          vertical = itemInViewPos.y < -this._viewH / 2 ? -1 : itemInViewPos.y > this._viewH / 2 ? 1 : 0;
          return [horizon, vertical];
        }

        _hideAllItems() {
          this.itemList.forEach((item, index) => {
            item.active = false;
          });
        }
        /** 获取content */


        _getContentUTF() {
          return this.node.getComponent(ScrollView).content.getComponent(UITransform);
        }
        /** 初始化 */


        _initialize() {
          if (this._isInit) return;
          var scroll = this.node.getComponent(ScrollView);
          scroll.enabled = false;
          this._isInit = true;

          var content = this._getContentUTF();

          this.content = content;
          var viewUTF = content.node.parent.getComponent(UITransform);
          this._viewW = viewUTF.width;
          this._viewH = viewUTF.height;
          var itemData = this.itemPrefab.data;
          this._itemW = itemData.width + this.spacing.x;
          this._itemH = itemData.height + this.spacing.y;
          this._lastPosY = content.node.position.y;
          this._viewRow = Math.ceil(this._viewH / this._itemH) + 1;
          this._viewCol = Math.floor(this._viewW / this._itemW);
          var surplusW = this._viewW - this._viewCol * this._itemW;
          var startPos = v3((-this._viewW >> 1) + (this._itemW >> 1) + (surplusW >> 1), -this._itemH >> 1);
          var cNum = this._viewRow * this._viewCol;
          log("\u5B9E\u4F8B\u5316\u6570\u91CF:" + cNum);
          var createNum = 0;

          var createFunc = index => {
            if (!isValid(content)) return; //异步创建，创建完回来父节点有可能已经被销毁

            var item = instantiate(this.itemPrefab);
            item.parent = content.node;
            var x = index % this._viewCol * this._itemW;
            var y = -Math.floor(index / this._viewCol) * this._itemH + (this.spacing.y >> 1);
            var pos = v3(x + startPos.x, y + startPos.y);
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
          };
          /** 分帧创建item */


          frameLoad(cNum, createFunc);
        }
        /** 更新centent高度 */


        _updateContentHeight() {
          var content = this._getContentUTF();

          var col = Math.floor(this._viewW / this._itemW);
          var row = Math.ceil(this.numItems / col);
          content.height = row * (this.itemPrefab.data.height + this.spacing.y) - this.spacing.y;
        }
        /** 获取item在view坐标系的对标 */


        _getPosInView(item) {
          var content = this._getContentUTF();

          var viewUTF = content.node.parent.getComponent(UITransform);
          var wpos = content.convertToWorldSpaceAR(item.position);
          var lpos = viewUTF.convertToNodeSpaceAR(wpos);
          return lpos;
        }
        /** 更新item */


        _updateItem(index, item) {
          var isShow = index >= 0 && index < this.numItems;
          item.active = isShow;

          if (isShow) {
            this.onItemRender(index, item);
          }
        }

        update(dt) {
          var content = this._getContentUTF();

          var currY = content.node.position.y;
          var dtY = currY - this._lastPosY;
          this._lastPosY = currY; // this._fleshCounter += dt;
          // if (dtY == 0 && this._fleshCounter < this._fleshInterval) return;
          // this._fleshCounter = 0;

          var isDown = dtY < 0;
          var itemsLen = this.itemList.length;

          for (var i = 0; i < itemsLen; ++i) {
            var item = this.itemList[i];

            var posInView = this._getPosInView(item);

            var viewHalfH = this._viewH >> 1;
            var itemHalfH = this._itemH >> 1;
            var lastIndex = this._itemsUUIDToIndex[item.uuid];
            var currIndex = lastIndex;

            if (!isDown) {
              if (posInView.y >= viewHalfH + itemHalfH) {
                item.setPosition(v3(item.position.x, item.position.y - this._viewRow * this._itemH));
                currIndex = lastIndex + itemsLen;
              }
            } else {
              if (posInView.y <= -(viewHalfH + itemHalfH)) {
                item.setPosition(v3(item.position.x, item.position.y + this._viewRow * this._itemH));
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v2();
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1afa444bc9850bbc508c22a3c0d7d9ea3e1d8fe.js.map