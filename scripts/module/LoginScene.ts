import { _decorator, Button, Canvas, Component, find, Node, ResolutionPolicy, Size, view, Event, director, sys } from 'cc';
import { ILoginInfo } from '../tools/interface';
import Appic from '../tools/Appic';
import { AudioMgr } from '../manages/AudioMgr';
import { EAudioType, EEventRult, ELoginResult, ELoginType } from '../tools/enumes';
import { EveMgr } from '../manages/EveMgr';
const { ccclass, property } = _decorator;

@ccclass('LoginScene')
export class LoginScene extends Component {
    /**谷歌登录 */
    protected btn_google: Button = null;
    /**邮箱登录 */
    protected btn_email: Button = null;
    /**试玩登录 */
    protected btn_guest: Button = null;

    private isCanLogin: boolean = false;

    private userData: ILoginInfo = {};

    private setFrameFit(): void {
        const designResolution = view.getDesignResolutionSize();
        const visibleSize = view.getVisibleSize(); // 屏幕可见区域
        // 场景适配
        if (visibleSize.width / visibleSize.height < designResolution.width / designResolution.height) {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_WIDTH);
        } else {
            view.setDesignResolutionSize(designResolution.width, designResolution.height, ResolutionPolicy.FIXED_HEIGHT);
        }
    }
    protected onLoad(): void {
        this.setFrameFit();
        this.initView();
    }
    private initView() {
        this.btn_google = find('Canvas/layer_mid/btn_google')?.getComponent(Button);
        this.btn_guest = find('Canvas/layer_mid/btn_guest')?.getComponent(Button);
    }

    private initEvent() {
        this.btn_google && this.btn_google.node.on('click', this.onClickHandel, this);
        this.btn_guest && this.btn_guest.node.on('click', this.onClickHandel, this);
        EveMgr.event.on(ELoginType.Google, this.googleLoginPost, this);
        EveMgr.event.on(ELoginResult.Success, this.loginResultHandel, this);
    }
    private removeEvent() {
        this.btn_google && this.btn_google.node.off('click', this.onClickHandel, this);
        this.btn_guest && this.btn_guest.node.off('click', this.onClickHandel, this);
        EveMgr.event.off(ELoginType.Google, this.googleLoginPost, this);
        EveMgr.event.off(ELoginResult.Success, this.loginResultHandel, this);
    }
    protected onEnable(): void {
        this.initEvent();
    }

    protected start() {
        Appic.gameMg.init();
        this.loadRes();
        this.loadData();
    }
    protected onDisable(): void {
        this.removeEvent();
    }
    
    async loadRes() {
        director.preloadScene('Hall', () => {
            console.log('Hall scene preloaded');
            this.isCanLogin = true;
        });
    }
    async loadData() {
        this.isCanLogin = false;
        this.userData = JSON.parse(sys.localStorage.getItem('userData'));
        this.btn_guest.node.active = !(this.userData && this.userData.user.loginData.is_guest && this.userData.user.loginData.is_guest == 1);
        if (this.userData) {
            this.isCanLogin = true;
            Appic.gameMg.loginInfo = this.userData;

            if (Appic.gameMg.loginInfo.user.loginData.id_token) {
                Appic.gameMg.loginSucess(Appic.gameMg.loginInfo);
            }
        }
    }
    update(deltaTime: number) {}

    private onClickHandel(evet: Event) {
        let targetName = evet.target.name;
        switch (targetName) {
            case 'btn_google':
                this._onGoogleLogin();
                break;
            case 'btn_guest':
                this._onGuestLogin();
                break;

            default:
                break;
        }
    }

    /**谷歌登录请求服务器 */
    private _onGoogleLogin(): void {
        AudioMgr.GetInstance(AudioMgr).playOneShot(EAudioType.E_btnEff1);
        this.changeBtnStatue(false);
        // App.SysMg.showWaite();
        Appic.gameMg.logInGoogle();
    }
    /**游客登录 */
    private _onGuestLogin(): void {
        AudioMgr.GetInstance(AudioMgr).playOneShot(EAudioType.E_btnEff1);
        this.changeBtnStatue(false);
        // App.SysMg.showWaite();
        Appic.gameMg.GuideHandel();
    }

    private changeBtnStatue(btnStatue: boolean) {
        this.btn_google.interactable = btnStatue;
        this.btn_guest.interactable = btnStatue;
        this.scheduleOnce(() => {
            if (!btnStatue) {
                this.btn_google.interactable = !btnStatue;
                this.btn_guest.interactable = !btnStatue;
            }
        }, 1.5);
    }
    /**谷歌登录回调 */
    public googleLoginPost(data: ILoginInfo) {
        Appic.gameMg.loginSucess(data);
    }

    /*login success**/
    private loginResultHandel() {
        Appic.gameMg.getUserInfo().then(() => {
            this.loadScene();
        });
    }

    /**跳转场景 */
    private loadScene() {
        // Appic.gameMg.hideWaite();
        // let waitimg: cc.Node = this.node.getChildByName(this.nodeName);
        // if (waitimg) {
        //     App.ResMg.putNode(waitimg);
        // }
        this.isCanLogin = true;
        director.loadScene('Hall');
    }
    protected onDestroy(): void {}
}
