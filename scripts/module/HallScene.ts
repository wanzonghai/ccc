import { Node, Button, Component, Label, ResolutionPolicy, Sprite, _decorator, find, view, Event, director, log, ScrollView, instantiate, Prefab, UITransform, SpriteFrame } from 'cc';
import Appic from '../tools/Appic';
import { Until } from '../tools/Until';
import { IPlayerInfo } from '../tools/interface';
import RecycleScroll from '../commons/uiComponent/RecycleScroll';
import { ScrollItem } from './Hall/ScrollItem';
import GameMgr from '../manages/GameMgr';

const { ccclass, property } = _decorator;

@ccclass('HallScene')
export default class HallScene extends Component {
    protected layer_mid: Node = null;
    //**********m_avatar
    protected sprite_avatar: Sprite = null;
    protected label_userName: Label = null;
    protected label_userCoin: Label = null;
    protected btn_recharge: Button = null;

    //***************button
    protected btn_service: Button = null;
    protected btn_set: Button = null;
    protected btn_checkIn: Button = null;
    protected btn_eMail: Button = null;
    protected btn_share: Button = null;

    protected itemScroll: ScrollView = null;

    private userInfo: IPlayerInfo = null;

    // LIFE-CYCLE CALLBACKS:

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
        //**********m_avatar
        this.layer_mid = find('Canvas/layer_mid');
        this.sprite_avatar = find('m_avatar/bg/Mask/sprite_avatar', this.layer_mid)?.getComponent(Sprite);
        this.label_userName = this.layer_mid.getChildByName('label_userName')?.getComponent(Label);
        this.label_userCoin = this.layer_mid.getChildByName('label_userCoin')?.getComponent(Label);
        this.btn_recharge = find('m_avatar/bg/btn_recharge', this.layer_mid)?.getComponent(Button);
        //**********button
        this.btn_service = this.layer_mid.getChildByName('btn_service')?.getComponent(Button);
        this.btn_set = this.layer_mid.getChildByName('btn_set')?.getComponent(Button);
        this.btn_checkIn = this.layer_mid.getChildByName('btn_checkIn')?.getComponent(Button);
        this.btn_eMail = this.layer_mid.getChildByName('btn_eMail')?.getComponent(Button);
        this.btn_share = this.layer_mid.getChildByName('btn_share')?.getComponent(Button);

        this.itemScroll = this.layer_mid.getChildByName('ScrollView')?.getComponent(ScrollView);
    }
    protected onEnable() {
        this.initEvent();
        this.userInfo = Appic.gameMg.loginInfo.user;
        this.updateUserCoin();
        this.updateView();
    }
    protected onDisable() {
        this.removeEvent();
    }
    protected start() {
        this.loadRes();
    }
    async loadRes() {
        director.preloadScene('Login', () => {
            console.log('Login scene preloaded');
        });
        await Appic.DAM.loadDir(this.node, 'texture/hall', SpriteFrame, (resSpriteFrams: SpriteFrame[]) => {
            Appic.DAM.load(this.node, 'prefab/hall/ItemPass', Prefab, (resPre: Prefab) => {
                this.updateScrollView(resPre, resSpriteFrams);
            });
        });
    }
    private initEvent() {
        this.btn_recharge && this.btn_recharge.node.on('click', this.onClickHandel, this);
        this.btn_service && this.btn_service.node.on('click', this.onClickHandel, this);
        this.btn_set && this.btn_set.node.on('click', this.onClickHandel, this);
        this.btn_checkIn && this.btn_checkIn.node.on('click', this.onClickHandel, this);
        this.btn_eMail && this.btn_eMail.node.on('click', this.onClickHandel, this);
        this.btn_share && this.btn_share.node.on('click', this.onClickHandel, this);
    }
    private removeEvent() {
        this.btn_recharge && this.btn_recharge.node.off('click', this.onClickHandel, this);
        this.btn_service && this.btn_service.node.off('click', this.onClickHandel, this);
        this.btn_set && this.btn_set.node.off('click', this.onClickHandel, this);
        this.btn_checkIn && this.btn_checkIn.node.off('click', this.onClickHandel, this);
        this.btn_eMail && this.btn_eMail.node.off('click', this.onClickHandel, this);
        this.btn_share && this.btn_share.node.off('click', this.onClickHandel, this);
    }
    private updateScrollView(resPre: Prefab, resSpriteFrams: SpriteFrame[]) {
        let itemPassPre: Prefab = resPre;
        for (let index = 0; index < 5; index++) {
            let itemPaa: Node = instantiate(itemPassPre);
            let keyStr: string = index + 1 + '';
            itemPaa.getComponent(Sprite).spriteFrame = GameMgr.getItemOfArr(keyStr, resSpriteFrams);
            this.itemScroll.content.getComponent(UITransform).width += itemPaa.getComponent(UITransform).width;
            itemPaa.setParent(this.itemScroll.content);
        }
    }
    update(deltaTime: number) {}

    private updateView() {
        this.label_userName.string = Until.climeUserName(this.userInfo.name, 8);
    }
    private updateUserCoin() {
        this.label_userCoin.string = Until.formatNumber3(this.userInfo.score.toString());
    }
    protected lateUpdate() {}
    private onClickHandel(evet: Event) {
        let targetName: string = evet.target.name;
        switch (targetName) {
            case 'btn_recharge':
                this._rechargeHandel();
                break;
            case 'btn_service':
                this._serviceHandel();
                break;
            case 'btn_set':
                this._setHandel();
                break;
            case 'btn_checkIn':
                this._checkInHandel();
                break;
            case 'btn_eMail':
                this._eMailHandel();
                break;
            case 'btn_share':
                this._shareHandel();
                break;

            default:
                break;
        }
    }
    /** recharge*/
    private _rechargeHandel() {
        console.log('recharge');
    }
    /** service*/
    private _serviceHandel() {
        console.log('service');
    }
    /** set*/
    private _setHandel() {
        console.log('set');
        director.loadScene('Login');
    }
    /** checkIn*/
    private _checkInHandel() {
        console.log('checkIn');
    }
    /** eMail*/
    private _eMailHandel() {
        console.log('eMail');
    }
    /** share*/
    private _shareHandel() {
        console.log('share');
        Appic.gameMg.androidShare();
    }

    protected onDestroy() {}
}
