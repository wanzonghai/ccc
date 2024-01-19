import { JsonAsset, SpriteFrame, director, native, sys } from 'cc';
import { Singleton } from '../bases/Singleton';
import Appic from '../tools/Appic';
import { ILoginData, ILoginInfo, IPlayerInfo } from '../tools/interface';
import { AudioMgr } from './AudioMgr';
import { ELoginResult, ELoginType } from '../tools/enumes';
import { Until } from '../tools/Until';
import { EveMgr } from './EveMgr';

export default class GameMgr extends Singleton<GameMgr> {
    /**玩家登录时信息  */
    public loginInfo: ILoginInfo = {};

    public init() {
        this.loginInfo = {};
        this.loginInfo.user = {};
        this.loginInfo.user.loginData = {};
        Appic.DAM.init();
        Appic.resMg.init();
        AudioMgr.GetInstance(AudioMgr).initAudioMgr('audio');
    }
    ///谷歌
    /**静默登录 */
    public silentSignInGoogle(): void {
        if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'silentSignIn', '()V');
            }
            // else if (cc.sys.os == cc.sys.OS_IOS) {
            //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
            // }
        }
    }
    /** 意图登录 */
    public logInGoogle() {
        return new Promise<void>((resolve, reject) => {
            if (sys.isNative) {
                if (sys.os == sys.OS.ANDROID) {
                    native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'logIn', '()V');
                }
                // else if (cc.sys.os == cc.sys.OS_IOS) {
                //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
                // }
            }
        });
    }
    /**游客登录 */
    public GuideHandel(): void {
        var body: ILoginInfo = {};
        body.user = {};
        body.user.loginData = {};
        body.type = ELoginType.Guest;
        // if (!this.deviceInfo.serial_number) return;
        body.token = Until.generateRandomString(8);
        body.user.loginData.id_token = Until.generateRandomString(50);
        body.user.name = Until.generateRandomName();
        body.user.id = Until.generateRandomPlayerId();
        body.user.score = 1000;
        // body.device = this.deviceInfo;
        // var body = { option: loginType.test, phone: this.accountNumber };
        // let _strIdToken: string = this.idToken;
        this.loginSucess(body);
    }
    /**登录成功 开启socket检测  */
    public loginSucess(data: ILoginInfo) {
        if (!data || !data.user) return;
        console.log('登录成功' + JSON.stringify(data));
        this.loginInfo.token = data.token;
        this.loginInfo.user = data.user;
        EveMgr.event.emit(ELoginResult.Success);
    }
    public getUserInfo() {
        return new Promise<void>((resolve, reject) => {
            /**存入idtoken */

            this.wariteVerifyIdToken(this.loginInfo);
            resolve();
        });
    }
    public wariteVerifyIdToken(data: ILoginInfo) {
        /**存入idtoken */
        if (!data) return;

        let userData: ILoginInfo = JSON.parse(sys.localStorage.getItem('userData'));

        userData = data;

        sys.localStorage.setItem('userData', JSON.stringify(userData));
        console.log('userData:' + userData);
    }

    /**Android 系统分享 */
    public androidShare(): void {
        if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
                // App.MsgTipMg.show(languageManage.getString('tips_txt6'));
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'showShareView', '()V');
            }
            // else if (cc.sys.os == cc.sys.OS_IOS) {
            //     ret = jsb.reflection.callStaticMethod(Native.ApiIOS, 'loginGoogle:', this._callBackPrefix + cbKey);
            // }
        }
    }
    //登出Google
    public logOutGoogle() {
        if (sys.isNative) {
            console.log('logOutGoogle!!!!');
            if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'logOutGoogle', '()V');
            }
            //  else if (cc.sys.os == cc.sys.OS_IOS) {
            //     jsb.reflection.callStaticMethod(Native.ApiIOS, 'logOutGoogle', null);
            // }
        }
    }
    /**退出登录 */
    public backLogin() {
        return new Promise<void>((resolve, reject) => {
            /// 退出登录
            if (this.loginInfo.type == 1) {
                this.logOutGoogle();
            }

            director.preloadScene('Login', () => {
                // 当我们需要删除时
                if (this.loginInfo.type != ELoginType.Google) {
                    sys.localStorage.removeItem('userData');
                    let data: ILoginInfo = {};
                    data.user.loginData.is_guest = 1;

                    this.wariteVerifyIdToken(data);
                }

                // Appic.resMg.destoryRes();
                AudioMgr.GetInstance(AudioMgr).stop();
                director.loadScene('Login');
                console.log('Login scene preloaded');
            });
        });
    }
    public exitApp() {
        if (sys.isNative) {
            console.log('退出应用!!!!');
            if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod('com/cocos/game/AppActivity', 'exitApp', '()V');
            }
            //  else if (cc.sys.os == cc.sys.OS_IOS) {
            //     jsb.reflection.callStaticMethod(Native.ApiIOS, 'logOutGoogle', null);
            // }
        }
    }

    public static getItemOfArr<T>(key: string, arr: T[]): T | null {
        for (const item of arr) {
            if (key == item['name']) {
                return item;
            }
        }
        return null;
    }
}
