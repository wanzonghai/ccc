// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class date_Class extends cc.Component {
    @property(cc.Label)
    balanceLabel: cc.Label = null;
    @property('number')
    balance: number = -1;

    // onLoad () {}

    start() {
        // cc.sys.localStorage.setItem('balance', this.balance + "");
        // let balance = cc.sys.localStorage.getItem('balance');
        // balance = parseInt(balance);
        // console.log(balance);
        // console.log(typeof balance);

        let balance = cc.sys.localStorage.getItem('balance');
        balance = parseInt(balance);
        if (balance == -1 || balance == null) {
            this.balance = 999;
            cc.sys.localStorage.setItem('balance', this.balance);
        } else {
            this.balance = balance;
        }
        this.renew_balance();
    }

    renew_balance() {
        cc.sys.localStorage.setItem('balance', this.balance);
        let balance = cc.sys.localStorage.getItem('balance');
        balance = parseInt(balance);
        this.balance = balance;
        this.balanceLabel.string = '' + this.balance;
    }

    // update (dt) {}
}
