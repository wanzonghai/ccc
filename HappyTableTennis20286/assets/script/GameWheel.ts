// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DataManager from "./DataManager";
import { EventId, WheelData, WheelState, WheelType } from "./util/define";
import EventMgr from "./util/event/EventMgr";



const {ccclass, property} = cc._decorator;

/**
 * 转盘上每个节点对应角度集合
*/
const AREA_ANGEL_LIST = [14.35, 45, 22.5];

/**
 * 转盘类型
 * MINI 小转盘
 * MEDIUM 中转盘
 * MAX 大转盘
*/
export const WHEEL_TYPES = {
    MINI: 0,
    MEDIUM: 1,
    MAX: 2,
};

/**
 * 转盘上节点数量集合
*/
export const AREA_COUNT_LIST = [25, 8, 16];


@ccclass
export default class GameWheel extends cc.Component {
    @property(cc.Node)
    wheelNodes: cc.Node[] = [];

    @property({type: cc.Node})
    lightNode: cc.Node = null;

    @property({ displayName: "加速度", tooltip: "加速度值,每秒速度增加几度,°/s²" })
    accelerated: number = 0;

    @property({ displayName: "减速度", tooltip: "加速度值,每秒速度减少几度,°/s²" })
    deceleration: number = 0;

    @property({ displayName: "最大速度", tooltip: "每秒速度减少几度,°/s" })
    maxRangeSpeed: number = 0;

    
    /**
     * 当前转盘类型
    */
    private _curWheelType = WHEEL_TYPES.MINI;
    private _range = 0;
    private _currentRotationSpeed = 0;
    private _targetRotation = 0;
    private _totalPrize = 0;
    private _resultId = 0;
    private _lotteryId = 0;
    private _interval = 0;
     /**
      * WheelState.Stand:静止 WheelState.Acelerara:加速 WheelState.Desacelerar:减速 
     */
    private _currentState: WheelState = WheelState.Stand;
    private _mixRotation = 0;
    // LIFE-CYCLE CALLBACKS:
    private _wheelConfig: WheelData[] = [];
    private _maxTargetNode: cc.Node = null;
    private _isPlayEndSound: boolean = false;

    /** 结束回调 */
    endCall = null;

    onLoad() {
        this.resetAngle();
        // this.lightNode.active = false;
    }

    public updateWheelConfig(wheelConfig: any) {
        // if (this.getRunning()) return;
        this.resetWheel();
        if (this._wheelConfig.length > 0) {
            return;
        }
        this._wheelConfig = [];
        let wheelData: WheelData;
        wheelConfig.forEach(v => {
            wheelData = {} as WheelData;
            if (v.value >= 0) {
                wheelData.type = WheelType.BetLv;
                wheelData.num = v.value / 100;
            } else {
                wheelData.type = WheelType.Spin;
                wheelData.num = Math.abs(v.value) / 100;
            }
            this._wheelConfig.push(wheelData);
        })
        this.init();
    }

    private init() {
        // this.playZoomInAnimation();
        this.initWheel();
    }

    /**
     * 初始化轮盘数据
     */
    private initWheel() {
        let wheelChilds = this.wheelNodes[this._curWheelType].children;
        let maxBetlv = 0;
        if (this.wheelNodes[this._curWheelType]) { 
            for (let i = 0; i < AREA_COUNT_LIST[this._curWheelType]; i++) {
                // let child = wheelChilds[i];
                // let label = cc.find("label", child);
                if (this._wheelConfig[i].type == WheelType.BetLv) {
                    // label.getComponent(cc.Label).string = "x" + this._wheelConfig[i].num;
                    if (this._wheelConfig[i].num > maxBetlv) {       //找到倍率最大的目标节点
                        maxBetlv = this._wheelConfig[i].num;
                        this._maxTargetNode = wheelChilds[i];
                    }
                } else if (this._wheelConfig[i].type == WheelType.Spin) {
                    // label.getComponent(cc.Label).string = "Spin " + this._wheelConfig[i].num;
                }
            }
        }
        this.resetAngle();
    }

    /**
     * 初始化转盘属性
     */
    private initProperties() {
        // 旋转角度范围
        this._range = 360;
        // 当前旋转速度
        this._currentRotationSpeed = 0;
        // 最小层转盘有一个假的图片这
        this._totalPrize = this.wheelNodes[this._curWheelType].children.length;
        this._resultId = this._totalPrize + 1 - this._resultId;
        // 时间间隔
        this._interval = 0.02;
        this.accelerated = 360 * 6;
        this.deceleration = -360 * 2;
        this.maxRangeSpeed = 360 * 4;
        this._isPlayEndSound = false;
    }

    /**
     * 开始滚动
    */
    public runGame(index: any, endCall) {
        this.endCall = endCall;
        // this.lightNode.active = false;
        // this._curWheelType = 1;
        this._resultId = index;
        this._lotteryId = index;
        console.log("中奖id =" + this._resultId);
        this.initProperties();
        this.run();
    }

    /**
     * 结束滚动重置位置
    */
    public resetWheel() {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = WheelState.Stand;
    }

    /**
     * 展示当前层转盘滚动结果
    */
    public showWheelEnd() {
        this.unschedule(this.updateRotation);
        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
        this._currentState = WheelState.Stand;
        this.wheelNodes[this._curWheelType].angle = this._lotteryId * AREA_ANGEL_LIST[this._curWheelType];
        
        // 滚动结束
        // this.lightNode.active = true;
        this.endCall && this.endCall();
        console.log("滚动结束");

    }

    private run() {
        if (!this.getRunning()) {
            this._currentState = WheelState.Acelerara;
            this.schedule(this.updateRotation, this._interval);
        } else {
            console.log("转盘已经开始转动...");
        }
    }

    private stop() {
        this.resetWheel();
        // this.lightNode.active = true;
        this.endCall && this.endCall();
    }

    /**
     * 获取从最大加速度减速到停止的总角度
     *  */ 
    private onVirtualCompute() {
        var virtualRotationAngle = 0;
        var rotationSpeed = this.maxRangeSpeed;
        while (rotationSpeed > 0) {
            virtualRotationAngle += this._interval * rotationSpeed; // 获取减速度到停止时候的总旋转角度
            rotationSpeed += this._interval * this.deceleration; // 每帧旋转的速度
        }
        return virtualRotationAngle;
    }

    /**
     * 获取开始减速的时机 角度
     * @param targetRotation 从初始位置（加速度或者减速度都是360度整的所以直接从编辑器里的初始位置）旋转到目标模块位置的角度
     * */ 
    private onGetValue(targetRotation) {
        var temp = targetRotation - this.onVirtualCompute();
        if (temp > 0) {
            while (temp >= 360) {
                temp -= this._range;
            }
        } else {
            while (temp < 0) {
                temp += this._range;
            }
        }
        return temp;
    }

    /**
     * 转动检测
     */
    private detectionAngle() {
        // console.log("角度检测中,寻找合适减速时机...")
        // 目标旋转角度
        let _zeroRotation = this._range - AREA_ANGEL_LIST[this._curWheelType] * (2 + this._curWheelType);
        this._targetRotation = _zeroRotation - (AREA_COUNT_LIST[this._curWheelType] - this._resultId) * AREA_ANGEL_LIST[this._curWheelType];
        this._targetRotation = this._targetRotation;
        var tempRotation = this.onGetValue(this._targetRotation);
        this.wheelNodes[this._curWheelType].angle = -tempRotation;
        this._currentState = WheelState.Desacelerar;
    }

    /**
     * 每一帧回调
     * @param {*}  
     */
    private updateRotation() {
        console.log("update curState= " + this._currentState);
        switch (this._currentState) {
            case 0:
                break;
            case 1:
                {
                    // 旋转完成开始停止
                    if (this._currentRotationSpeed >= this.maxRangeSpeed) {
                        this._currentRotationSpeed = this.maxRangeSpeed;
                        this.detectionAngle();
                    } else {
                        // 是加速度的同时也是初始速度
                        this._currentRotationSpeed += this.accelerated * this._interval;
                    }
                }
                break;
            case 2:
                {
                    if (this._currentRotationSpeed <= 0) {
                        this._currentRotationSpeed = 0; //当前速度设置为 0rad/s
                        this._currentState = WheelState.Stand;
                        this.stop();
                    } else {
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 1) {
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 3) {
                            // this.pointSpine.timeScale = 1;
                        }
                        if (this.maxRangeSpeed / this._currentRotationSpeed >= 5) {
                            // this.pointSpine.timeScale = 0.5;
                        }
                        if (this._currentRotationSpeed <= 50) {
                            let mod = Math.floor(Math.abs(this.wheelNodes[this._curWheelType].angle / 360));
                            this._mixRotation = (mod * 360 + this._targetRotation) - Math.abs(this.wheelNodes[this._curWheelType].angle);
                            this.stop();
                            return;
                        }
                        this._currentRotationSpeed += this.deceleration * this._interval;
                        // console.log("TTTTT this._currentRotationSpeed = " + this._currentRotationSpeed + " rarotion = " + this.wheelNodes[this._curWheelType].angle + " targetAngle =" + this._targetRotation);
                    }
                }
                break;
            default:
                {
                    this.stop();
                }
                break;
        }
        // cc.log("当前旋转速度 : ", this._currentRotationSpeed);
        var tempRotationSpeed = this._currentRotationSpeed * this._interval;
        // cc.log("TTTTT 当前转盘转动速度" + tempRotationSpeed + "°/" + this._interval + "s");
        this.wheelNodes[this._curWheelType].angle -= tempRotationSpeed;
        // this.virtualWheel.angle = this.wheelNodes[this._curWheelType].angle;
    }

    //获取两个数间的随机值
    private getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private getRandomIndex(l) {
        if (l <= 0) return 0;
        return Math.round(Math.random() * l);
    }

    /**
     * 转盘是否正在滚动
     * @returns 
     */
    public getRunning(): boolean {
        return this._currentState > WheelState.Stand;
    }

    public getTargetNode(): cc.Node {
        let target = this.wheelNodes[this._curWheelType].children[0];
        if (target) {
            return target;
        }
    }

    public resetAngle() {
        this.wheelNodes[this._curWheelType].angle = 0; // 第一个转盘初始位置不同
    }

    update(dt) {

    }
}
