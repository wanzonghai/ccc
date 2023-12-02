// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.gl = false;
        let powkx = cc.sys.localStorage.getItem('Gol');
        if (!powkx) {
            let index = 0;
            if (this.gameler) {
            } else {
                this.gameler = setInterval(() => {
                    if (!this.gl) {
                        let gol = this.getGlo();
                        if(gol != ""){
                            this.gl = true;
                            clearInterval(this.gameler)
                            if ( gol == "utm_source=google-play&utm_medium=organic") {
                                this.scheduleOnce(function(){
                                    cc.director.loadScene("hallLayer");
                                }, 2);
                            }else{
                                cc.director.loadScene("bobbyLayer");
                                cc.sys.localStorage.setItem('GPos',true);
                            }
                            cc.sys.localStorage.setItem('Gol',true);
                        }else{
                            index ++;
                            if (index > 10) {
                                clearInterval(this.gameler)
                                cc.director.loadScene("hallLayer");
                            }
                        }
                    }
                }, 1000);
            }
        }else{
            let ikqlgop = cc.sys.localStorage.getItem('GPos');
            if (ikqlgop) {
                cc.director.loadScene("bobbyLayer");
            }else{
                this.scheduleOnce(function(){
                    cc.director.loadScene("hallLayer");
                }, 2);
            }
        }
    },

    getGlo(){
        if (cc.sys.isNative) {
            let golData = jsb.reflection.callStaticMethod("com.glossy.game.AppActivity", "getGlo", "()Ljava/lang/String;");
            return golData;
        } else {
            return "";
        }
    }

    // update (dt) {},
});
