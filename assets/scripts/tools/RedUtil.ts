import { _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export class RedUtil {
    //唯一实例
    private static _instance: RedUtil = null;
    /**设置为单例模式
     * @returns {playerManager} 返回唯一实例
     */
    public static get instance(): RedUtil {
        if (!this._instance) {
            this._instance = new RedUtil();
        }
        return this._instance;
    }
    /**商店item red */
    public shopItemRed(statue: boolean = false): boolean {
        return statue;
    }
}
