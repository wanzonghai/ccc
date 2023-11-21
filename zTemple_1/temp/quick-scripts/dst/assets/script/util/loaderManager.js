
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util/loaderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae579n3fD5Nt7pE6BDFOp6m', 'loaderManager');
// script/util/loaderManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var loaderManager = /** @class */ (function () {
    function loaderManager() {
        /**
         * 已加载好资源
        */
        this.res = {};
        /**
         * ab包名
        */
        this.abBundleName = [
            "prefab",
        ];
    }
    /**
     * 获取资源
    */
    loaderManager.prototype.getRes = function (key, targetBundleNmae, type) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (key == "" || typeof key != "string") {
                            console.warn("非法KEY值!");
                        }
                        res = this.res[key];
                        if (!!res) return [3 /*break*/, 2];
                        console.warn("\u4F7F\u7528\u8D44\u6E90" + key + "\u672A\u52A0\u8F7D-\u73B0\u641C\u7D22\u8D44\u6E90\u52A0\u8F7D\u4E2D");
                        return [4 /*yield*/, this.loadRes(key, targetBundleNmae, type)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res);
                            })];
                    case 2: return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 加载资源
    */
    loaderManager.prototype.loadRes = function (fileName, targetBundleNmae, type) {
        if (type === void 0) { type = cc.SpriteFrame; }
        return __awaiter(this, void 0, void 0, function () {
            var res, loadBundle, _i, _a, bundleName;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = null;
                        loadBundle = function (bundleName) {
                            return new Promise(function (resolve, reject) {
                                console.log("当前加载包名：", bundleName);
                                cc.assetManager.loadBundle(bundleName, function (err, ab) {
                                    if (err) {
                                        console.warn("\u5305\u540D" + bundleName + "\u52A0\u8F7D\u5931\u8D25");
                                        resolve();
                                        return;
                                    }
                                    var loadFileName = fileName;
                                    if (type == cc.SpriteFrame && cc.ENGINE_VERSION[0] == "3") { // 要加载纹理需要获取图片下的spiteFrame
                                        loadFileName += "/spriteFrame";
                                    }
                                    ab.load(loadFileName, type, function (err, assets) {
                                        if (err) {
                                            console.warn("\u5305\u540D" + bundleName + "\u76EE\u5F55\u4E0B\u6587\u4EF6" + fileName + "\u52A0\u8F7D\u5931\u8D25");
                                            resolve();
                                            return;
                                        }
                                        _this.res[fileName] = assets;
                                        console.log("\u52A0\u8F7D\u6210\u529F\u6587\u4EF6: " + fileName + " \u6210\u529F\u6240\u5728\u5305\u540D: " + bundleName);
                                        resolve();
                                        res = assets;
                                    });
                                    // 释放ab包, 不会释放从ab包里面加载好的资源;
                                    // assetManager.removeBundle(ab);
                                });
                            });
                        };
                        if (!targetBundleNmae) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadBundle(targetBundleNmae)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        _i = 0, _a = this.abBundleName;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        bundleName = _a[_i];
                        if (res)
                            return [3 /*break*/, 6];
                        return [4 /*yield*/, loadBundle(bundleName)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(res);
                        })];
                }
            });
        });
    };
    loaderManager.instance = new loaderManager();
    return loaderManager;
}());
exports.default = loaderManager.instance;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsXFxsb2FkZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdJOztVQUVFO1FBQ00sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUVqQjs7VUFFRTtRQUNNLGlCQUFZLEdBQUc7WUFDbkIsUUFBUTtTQUNYLENBQUE7SUEyRUwsQ0FBQztJQXpFRzs7TUFFRTtJQUNLLDhCQUFNLEdBQVosVUFBYSxHQUFHLEVBQUUsZ0JBQWlCLEVBQUUsSUFBSzs7Ozs7O3dCQUN2QyxJQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUMzQjt3QkFFRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFFckIsQ0FBQyxHQUFHLEVBQUosd0JBQUk7d0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBTyxHQUFHLHdFQUFjLENBQUMsQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUE7O3dCQUFyRCxHQUFHLEdBQUcsU0FBK0MsQ0FBQzt3QkFDdEQsc0JBQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixDQUFDLENBQUMsRUFBQTs0QkFHTixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FDZDtJQUVEOztNQUVFO0lBQ1csK0JBQU8sR0FBcEIsVUFBcUIsUUFBUSxFQUFFLGdCQUFpQixFQUFFLElBQXFCO1FBQXJCLHFCQUFBLEVBQUEsT0FBTyxFQUFFLENBQUMsV0FBVzs7Ozs7Ozt3QkFDL0QsR0FBRyxHQUFHLElBQUksQ0FBQzt3QkFDWCxVQUFVLEdBQUcsVUFBQyxVQUFVOzRCQUN4QixPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dDQUNuQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUMsVUFBQyxHQUFHLEVBQUUsRUFBMEI7b0NBQ2xFLElBQUcsR0FBRyxFQUFFO3dDQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQUssVUFBVSw2QkFBTSxDQUFDLENBQUM7d0NBQ3BDLE9BQU8sRUFBRSxDQUFDO3dDQUNWLE9BQU87cUNBQ1Y7b0NBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO29DQUM1QixJQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsMEJBQTBCO3dDQUNsRixZQUFZLElBQUksY0FBYyxDQUFBO3FDQUNqQztvQ0FFRCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTt3Q0FDckMsSUFBRyxHQUFHLEVBQUU7NENBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBSyxVQUFVLHNDQUFRLFFBQVEsNkJBQU0sQ0FBQyxDQUFDOzRDQUNwRCxPQUFPLEVBQUUsQ0FBQzs0Q0FDVixPQUFPO3lDQUNWO3dDQUNELEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO3dDQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUFXLFFBQVEsK0NBQVksVUFBWSxDQUFDLENBQUM7d0NBQ3pELE9BQU8sRUFBRSxDQUFDO3dDQUVWLEdBQUcsR0FBRyxNQUFNLENBQUM7b0NBQ2pCLENBQUMsQ0FBQyxDQUFBO29DQUVGLDJCQUEyQjtvQ0FDM0IsaUNBQWlDO2dDQUNyQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLENBQUE7NkJBQ0UsZ0JBQWdCLEVBQWhCLHdCQUFnQjt3QkFDZixxQkFBTSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUM7Ozs4QkFFSSxFQUFqQixLQUFBLElBQUksQ0FBQyxZQUFZOzs7NkJBQWpCLENBQUEsY0FBaUIsQ0FBQTt3QkFBL0IsVUFBVTt3QkFDZCxJQUFHLEdBQUc7NEJBQUUsd0JBQU07d0JBQ2QscUJBQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBNUIsU0FBNEIsQ0FBQzs7O3dCQUZYLElBQWlCLENBQUE7OzRCQU0zQyxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ047SUFyRnNCLHNCQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQXVGMUQsb0JBQUM7Q0F4RkQsQUF3RkMsSUFBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIGxvYWRlck1hbmFnZXJ7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlID0gbmV3IGxvYWRlck1hbmFnZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3suWKoOi9veWlvei1hOa6kFxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgcmVzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhYuWMheWQjVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYWJCdW5kbGVOYW1lID0gW1xyXG4gICAgICAgIFwicHJlZmFiXCIsXHJcbiAgICBdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botYTmupBcclxuICAgICovXHJcbiAgICAgYXN5bmMgZ2V0UmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZT8sIHR5cGU/KSB7XHJcbiAgICAgICAgaWYoa2V5ID09IFwiXCIgfHwgdHlwZW9mIGtleSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumdnuazlUtFWeWAvCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5yZXNba2V5XTtcclxuXHJcbiAgICAgICAgaWYoIXJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOS9v+eUqOi1hOa6kCR7a2V5feacquWKoOi9vS3njrDmkJzntKLotYTmupDliqDovb3kuK1gKTtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5sb2FkUmVzKGtleSwgdGFyZ2V0QnVuZGxlTm1hZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRSZXMoZmlsZU5hbWUsIHRhcmdldEJ1bmRsZU5tYWU/LCB0eXBlID0gY2MuU3ByaXRlRnJhbWUpIHtcclxuICAgICAgICBsZXQgcmVzID0gbnVsbDtcclxuICAgICAgICBsZXQgbG9hZEJ1bmRsZSA9IChidW5kbGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWKoOi9veWMheWQje+8mlwiLCBidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVyciwgYWI6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOWMheWQjSR7YnVuZGxlTmFtZX3liqDovb3lpLHotKVgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZEZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSBjYy5TcHJpdGVGcmFtZSAmJiBjYy5FTkdJTkVfVkVSU0lPTlswXSA9PSBcIjNcIikgeyAvLyDopoHliqDovb3nurnnkIbpnIDopoHojrflj5blm77niYfkuIvnmoRzcGl0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRGaWxlTmFtZSArPSBcIi9zcHJpdGVGcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhYi5sb2FkKGxvYWRGaWxlTmFtZSAsIHR5cGUsIChlcnIsIGFzc2V0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg5YyF5ZCNJHtidW5kbGVOYW1lfeebruW9leS4i+aWh+S7tiR7ZmlsZU5hbWV95Yqg6L295aSx6LSlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNbZmlsZU5hbWVdID0gYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg5Yqg6L295oiQ5Yqf5paH5Lu2OiAke2ZpbGVOYW1lfSDmiJDlip/miYDlnKjljIXlkI06ICR7YnVuZGxlTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IGFzc2V0cztcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmHiuaUvmFi5YyFLCDkuI3kvJrph4rmlL7ku45hYuWMhemHjOmdouWKoOi9veWlveeahOi1hOa6kDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGFiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0YXJnZXRCdW5kbGVObWFlKSB7IC8vIOiLpeS8oOWFpeWMheWQjeWImeS9v+eUqOWItuWumuWMheWQje+8jOS4jeS8oOWFpeWMheWQjeWImemBjeWOhuaJgOaciWFi5YyF5a+75om+5a+55bqU5ZCN5a2X6LWE5rqQXHJcbiAgICAgICAgICAgIGF3YWl0IGxvYWRCdW5kbGUodGFyZ2V0QnVuZGxlTm1hZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBidW5kbGVOYW1lIG9mIHRoaXMuYWJCdW5kbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZEJ1bmRsZShidW5kbGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGVyTWFuYWdlci5pbnN0YW5jZTtcclxuIl19