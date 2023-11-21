System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, assetManager, Singleton, DynamicAssetMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../bases/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb6fbu804NNJ60gKdYH6Mz9", "DynamicAssetMgr", undefined);
      /**
       * 动态资源加载管理类
       */


      __checkObsolete__(['Asset', 'resources', 'assetManager', 'AssetManager', 'SpriteFrame', 'Prefab', 'Node']);

      _export("default", DynamicAssetMgr = class DynamicAssetMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this._assetMap = null;
          this._assetRefCountMap = null;
          this.public = void 0;
        }

        /**
         * 初始化
         */
        init() {
          this._assetMap = new Map();
          this._assetRefCountMap = new Map();
          console.log('Dynamic resource Manager initialization is complete');
        }
        /**
         * 动态加载资源(可以同时加载多个资源)
         * @param node 加载的节点 作为托管驻点
         * @param url 资源路径
         * @param callBackFun 加载完成返回
         */


        load(node, url, assetType, callBackFun) {
          return new Promise((resolve, reject) => {
            if (node && url) {
              if (Array.isArray(url)) resources.load(url, assetType, (err, assets) => {
                if (err) {
                  console.error(err.message || err);
                  reject(err);
                  return;
                }

                if (this.pushAsset(node, assets)) {
                  callBackFun(assets);
                  resolve(assets);
                } else {
                  reject();
                }
              });else resources.load(url, assetType, (err, asset) => {
                if (err) {
                  console.error(err.message || err);
                  reject(err);
                  return;
                }

                if (this.pushAsset(node, asset)) {
                  callBackFun(asset);
                  resolve(asset);
                } else {
                  reject();
                }
              });
            }
          });
        }
        /**
         * 动态加载目录全部资源
         * @param node
         * @param url
         * @param callBackFun
         */


        loadDir(node, url, assetType, callBackFun) {
          if (node && url) {
            resources.loadDir(url, assetType, (err, assets) => {
              if (err) {
                console.error(err.message || err);
                return;
              }

              if (this.pushAsset(node, assets)) {
                callBackFun(assets);
              }
            });
          }
        }
        /**
         * 动态加载资源(可以同时加载多个资源) Bundel
         * @param node
         * @param url
         * @param callBackFun
         */


        loadBundel(node, url, assetType, callBackFun) {
          assetManager.loadBundle('bundle', (err, bundle) => {
            if (node && url) {
              if (Array.isArray(url)) bundle.load(url, assetType, (err, assets) => {
                if (err) {
                  console.error(err.message || err);
                  return;
                }

                if (this.pushAsset(node, assets)) {
                  callBackFun(assets);
                }
              });else bundle.load(url, assetType, (err, asset) => {
                if (err) {
                  console.error(err.message || err);
                  return;
                }

                if (this.pushAsset(node, asset)) {
                  callBackFun(asset);
                }
              });
            }
          });
        }
        /**
         * 动态加载目录全部资源 Bundel
         * @param node
         * @param url
         * @param callBackFun
         */


        loadBundelDir(node, url, assetType, callBackFun) {
          assetManager.loadBundle('bundle', (err, bundle) => {
            if (node && url) {
              bundle.loadDir(url, assetType, (err, assets) => {
                if (err) {
                  console.error(err.message || err);
                  return;
                }

                if (this.pushAsset(node, assets)) {
                  callBackFun(assets);
                }
              });
            }
          });
        }
        /**在加载了AB包之后，此 bundle 会一直存在整个游戏过程中，除非开发者手动移除
         * 当手动移除了某个不需要的 bundle，那么此 bundle 的缓存也会被移除，如果需要再次使用，则必须再重新加载一次 */


        removeBundleRes($bundleName) {
          var bundle = assetManager.getBundle($bundleName);
          assetManager.removeBundle(bundle);
        }
        /**
         *在移除AB包时，并不会释放该 bundle 中加载过的资源
         *如果需要释放，请先使用AB包的 release / releaseAll 方法：
         * @param {number} $releasetype 释放类型 1：单个资源 2：整个包
         * @param {string} $bundleName  释放AB包名字
         * @param {string} $resName     释放的资源名字
         * @param {(SpriteFrame|Prefab|any)} $resType 释放的资源类型
         * @memberof manage_res
         */


        releaseBundleResOnce($releasetype, $bundleName, $isRemoveBundle, $resName, $resType) {
          if ($isRemoveBundle === void 0) {
            $isRemoveBundle = true;
          }

          // 释放在AB包中的单个资源
          var bundle = assetManager.getBundle($bundleName);

          switch ($releasetype) {
            case 1:
              bundle.release($resName, $resType);
              break;

            case 2:
              // 释放所有属于AB包的资源
              bundle.releaseAll();

            default:
              break;
          } //单个资源时 决定是否释放整个包


          $isRemoveBundle && assetManager.removeBundle(bundle);
        }
        /**
         * 托管资源
         * @param node
         * @param asset
         */


        pushAsset(node, asset) {
          if (node && node.isValid) {
            var nodeId = node.uuid;

            if (!nodeId || !asset) {
              console.log("pushAsset\u53C2\u6570\u4E0D\u6B63\u786E:nodeId:" + nodeId + ",asset:" + asset);
              return false;
            }

            if (asset instanceof Array) {
              for (var as of asset) {
                this.extracted(as, nodeId);
              }
            } else {
              this.extracted(asset, nodeId);
            }

            return true;
          } else {
            if (asset) {
              console.log("\u8FD8\u6CA1\u52A0\u8F7D\u5B8C");

              if (asset instanceof Array) {
                for (var _as of asset) {
                  _as.decRef();
                }
              } else {
                asset.decRef();
              }
            }

            return false;
          }
        } //增加计数


        extracted(asset, nodeId) {
          var assetArray = this._assetMap.get(nodeId);

          if (!assetArray) {
            assetArray = [];
          } //同一个节点只增加一次计数


          if (assetArray.indexOf(asset) < 0) {
            asset.addRef();
            assetArray.push(asset);

            this._assetMap.set(nodeId, assetArray);
          }
        }
        /**
         * 释放资源
         * @param node
         * @param source
         */


        pullAsset(node, source) {
          if (node && node.isValid) {
            var nodeId = node.uuid;

            if (this._assetMap.has(nodeId)) {
              var assetArray = this._assetMap.get(nodeId);

              for (var as of assetArray) {
                console.log("\u91CA\u653E\u8D44\u6E90:" + as.name);
                as.decRef();
              }

              this._assetMap.delete(nodeId);
            }
          } else {
            console.error("\u65E0\u6CD5\u91CA\u653E\u8D44\u6E90:\u4F20\u4E86\u4E2Anull,\u6E90\u5934:" + source);
          }
        }
        /**
         * 当前资源种类数量
         */


        getSize() {
          return this._assetMap.size;
        }
        /**
         * 资源keys
         */


        getKeys() {
          return this._assetMap.keys();
        }

        fanxing(value) {// return value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1bbbbaa05ccb9dfe478f381aa0bd4ecc2927c29b.js.map