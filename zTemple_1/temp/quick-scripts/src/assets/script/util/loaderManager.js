"use strict";
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