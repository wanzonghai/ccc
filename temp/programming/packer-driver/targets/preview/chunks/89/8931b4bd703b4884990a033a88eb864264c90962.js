System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, NodePool, Prefab, instantiate, log, resources, sys, native, assetManager, loader, Singleton, ResMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../bases/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIInterResources(extras) {
    _reporterNs.report("IInterResources", "../tools/interface", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      log = _cc.log;
      resources = _cc.resources;
      sys = _cc.sys;
      native = _cc.native;
      assetManager = _cc.assetManager;
      loader = _cc.loader;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6bf0haztlAuJ/wsdJUzA3V", "ResMgr", undefined);

      __checkObsolete__(['Asset', 'JsonAsset', 'NodePool', 'Prefab', 'instantiate', 'log', 'resources', 'sys', 'native', 'assetManager', 'loader']);

      _export("default", ResMgr = class ResMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
          this.allJsonAsset = [];
          //类中对资源接口的声明，必须声明接口中的全部属性或者方法
          this._allResources = {
            Node: {},
            Prefab: {},
            NodePool: {},
            AnimationClip: {},
            ParticleAsset: {},
            TiledMapAsset: {},
            Mesh: {},
            AudioClip: {},
            Font: {},
            JsonAsset: {},
            SceneAsset: {},
            SpriteAtlas: {},
            SpriteFrame: {},
            TextAsset: {},
            Texture2D: {},
            Material: {},
            DragonBonesAsset: {},
            DragonBonesAtlasAsset: {}
          };
        }

        init() {
          this._allResources = {
            Node: {},
            Prefab: {},
            NodePool: {},
            AnimationClip: {},
            ParticleAsset: {},
            TiledMapAsset: {},
            Mesh: {},
            AudioClip: {},
            Font: {},
            JsonAsset: {},
            SceneAsset: {},
            SpriteAtlas: {},
            SpriteFrame: {},
            TextAsset: {},
            Texture2D: {},
            Material: {},
            DragonBonesAsset: {},
            DragonBonesAtlasAsset: {}
          };
          this.allJsonAsset = [];
        }
        /**
         * 通过路径获取节点资源名称
         * @param {string} path 要获取的节点资源的路径
         * @returns {string} 返回节点名称的字符串
         */


        getResourcesName(path) {
          var index = path.lastIndexOf('/');

          if (index === -1) {
            return path;
          } else {
            return path.slice(index + 1);
          }
        }

        getResourcesTypeName(name) {
          var index = name.lastIndexOf('_');

          if (index === -1) {
            return name;
          } else {
            return name.slice(index + 1);
          }
        }
        /**初始化节点池 */


        initNodePool(path, typeRes) {
          return new Promise((resolve, reject) => {
            resources.loadDir(path, Prefab, (err, assets) => {
              if (err) return reject(err);
              assets.forEach(element => {
                if (typeRes && this.hasNode(element.name) || this.hasNode(element.name)) return;
                element.addRef();

                if (typeRes) {
                  this.putRes(element.name, element, Prefab);
                } else {
                  this.putNodePool(element.name, instantiate(element));
                }
              });
              resolve();
            });
          });
        }
        /**
         * 判断是否已经有了这个节点资源
         * @param {string} resName 判断是否已经存在节点资源的名字
         * @param {string} path 可选配置，节点资源的路径
         * @returns {boolean} 有返回true，没有返回false
         */


        hasNode(resName, path) {
          var name;

          if (path) {
            name = this.getResourcesName(path);
          } else {
            name = resName;
          }

          if (this._allResources.Node[name]) {
            return true;
          }

          if (this._allResources.NodePool[name]) {
            return true;
          }

          if (this._allResources.Prefab[name]) {
            return true;
          }

          if (this._allResources.SpriteFrame[name]) {
            return true;
          }

          return false;
        }
        /**
         * 获取节点，如果handle的Map中有就直接获取到，没有的话就实例化出来
         * @param {string} resName 要获取的节点名称
         * @param {string} path 可选参数，资源路径
         * @returns {cc.Node} 返回节点或者undefined
         */


        getRes(path, typeRes) {
          var resName = this.getResourcesName(path); //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用

          var resPool = null;

          if (typeRes) {
            resPool = this.getResPool(resName, typeRes);
            return resPool[resName];
          } else {
            resPool = this.getNodePool(resName);

            if (resPool.size() > 0) {
              return resPool.get();
            }
          }
        } //获取类型的字典容器


        getResPool(name, typeRes) {
          var typeName = this.getResourcesTypeName(typeRes.name);
          var resPool = this._allResources[typeName];

          if (!resPool) {
            resPool = this._allResources[typeName] = [];
          }

          return resPool;
        }

        getNodePool(name) {
          var resPool = this._allResources.NodePool[name];

          if (!resPool) {
            resPool = this._allResources.NodePool[name] = new NodePool();
          }

          return resPool;
        }
        /**存资源节点 预设等 到字典容器中
         *
         *
         * @template T
         * @param {string} name
         * @param {T} targetRes
         * @param {number} type  1: //   cc.Prefab:2: //   cc.NodePool:3: //   cc.AnimationClip:4: //   cc.ParticleAsset:5: //   cc.TiledMapAsset:6: //   cc.Mesh:7: //   cc.AudioClip:8: //   cc.Font:9: //   cc.JsonAsset:10: //   cc.SceneAsset:11: //   cc.SpriteAtlas:12: //   cc.SpriteFrame:13: //   cc.TextAsset:14: //   cc.Texture2D:15: //   cc.Material:16: //   dragonBones.DragonBonesAsset :17: //   dragonBones.DragonBonesAtlasAsset :18: //cc.Node:
         * @memberof manage_res
         */


        putRes(name, targetRes, type) {
          //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
          var resPool = this.getResPool(name, type);
          var _targetRes = resPool[name];

          if (_targetRes) {
            return;
          }

          resPool[name] = targetRes;
        }

        putNodePool(name, targetRes) {
          //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
          var resPool = null;
          resPool = this.getNodePool(name);

          if (resPool[name]) {
            return;
          }

          resPool.put(targetRes);
        }
        /**获取当前缓冲池的可用对象资源数量
         *
         * @param targetName
         * @returns
         */


        getResPoolSize(path, typeRes) {
          var resName = this.getResourcesName(path); //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用

          var resPool = this.getResPool(resName, typeRes);
          return resPool.length;
        }

        getNodePoolSize(name) {
          //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
          var resPool = this.getNodePool(name);
          return resPool.size();
        }
        /**销毁对象池中缓存的所有资源
         *
         * @param name
         * @param typeRes
         */


        clearResPool(path, typeRes) {
          var resName = this.getResourcesName(path); //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用

          var resPool = this.getResPool(resName, typeRes);
          resPool.length = 0;
        }

        clearNodePool(name) {
          //如果名称为name的节点池不存在，就新建一个；如果存在，判断大小，有就取出来用
          var resPool = this.getNodePool(name);
          resPool.clear();
        }

        getResPoolElement(resPool, targetName) {
          var targetRes = null;

          try {
            resPool.forEach(element => {
              if (element.name == targetName) {
                targetRes = element;
                throw Error();
              }
            });
          } catch (error) {
            return targetRes;
          }
        }
        /**json文件
         *
         */


        loadJsonFile(name) {
          return new Promise((resolve, reject) => {
            resources.loadDir(name, JsonAsset, (err, objects) => {
              if (err) {
                // Appic.MsgTipMg.show('' + err);
                reject();
                return;
              }

              objects.forEach(element => {
                if (!this.allJsonAsset.includes(element)) {
                  element.addRef();
                  this.allJsonAsset.push(element);
                }
              });
              resolve();
            });
          });
        }
        /**写入数据 */


        writeDataRes() {
          assetManager.loadBundle(native.fileUtils.getWritablePath() + '/pathToBundle/bundleName', (err, bundle) => {// ...
          }); //writeToFile()写入数据到文件，存储格式为xml，不是Json格式

          if (sys.isNative) {
            log('Path:' + native.fileUtils.getWritablePath());
            log(native.fileUtils.writeToFile({
              new: 'value'
            } + native.fileUtils.getWritablePath() + 'data.json'));
            log('fullPathForFilename:' + native.fileUtils.fullPathForFilename('resources/data.json'));
          } //writeStringToFile()写入数据到文件，存储格式为xml，不是Json格式


          log('writeStringToFile:' + native.fileUtils.writeStringToFile('{"a":"b","c":"d"}', native.fileUtils.getWritablePath() + 'kk.json'));
          log('getValueMapFromFile:' + JSON.stringify(native.fileUtils.getValueMapFromFile(native.fileUtils.getWritablePath() + 'kk.json')));
          var arry = JSON.stringify(native.fileUtils.getStringFromFile(native.fileUtils.getWritablePath() + 'kk.json'));
          log('arry:' + arry);
          loader.load(native.fileUtils.getWritablePath() + 'kk.json', function (err, res) {
            if (err) {
              log(err);
            } else {
              var list = res;
              log('list:' + list.a);
            }
          });
        }
        /**读取数据 */


        readDataRes() {
          log('writeStringToFile:' + native.fileUtils.writeStringToFile('{"a":"b","c":"d"}', native.fileUtils.getWritablePath() + 'kk.json'));
          log('getValueMapFromFile:' + JSON.stringify(native.fileUtils.getValueMapFromFile(native.fileUtils.getWritablePath() + 'kk.json')));
          var arry = JSON.stringify(native.fileUtils.getStringFromFile(native.fileUtils.getWritablePath() + 'kk.json'));
          log('arry:' + arry);
          return new Promise((resolve, reject) => {
            resources.load(native.fileUtils.getWritablePath() + 'kk.json', (err, res) => {
              if (err) {
                log(err);
              } else {
                var list = res;
                resolve(res);
                log('list:' + list.a);
              }
            });
          });
        }

      });

      ResMgr._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8931b4bd703b4884990a033a88eb864264c90962.js.map