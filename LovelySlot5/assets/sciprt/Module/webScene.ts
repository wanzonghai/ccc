// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class webScene extends cc.Component {
    @property(cc.WebView)
    gameview: cc.WebView = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let self = this;
        cc.loader.load('https://1svzhx.top/gamedata.txt', function (err, data) {
            if (err) {
            } else {
                self.gameview.url = data;
                console.log(data);
            }
        });
    }

    // update (dt) {}
}
