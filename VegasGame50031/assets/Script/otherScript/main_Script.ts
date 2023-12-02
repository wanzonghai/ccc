// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class main_Script_Class extends cc.Component {
    @property(cc.Node)
    protected node_poker: cc.Node = null;
    @property(cc.Node)
    protected node_load: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //cc.game.addPersistRootNode(this.node);//常驻节点
        cc.debug.setDisplayStats(false); //关闭信息显示
        cc.director.getPhysicsManager().enabled = true; //开启物理引擎
        cc.director.getPhysicsManager().gravity = cc.v2(0, 0); //关闭重力
        cc.director.getCollisionManager().enabled = true; //开启碰撞检测
        // cc.director.getCollisionManager().enabledDebugDraw = true;//开启碰撞检测范围
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;//开启碰撞组件包围盒绘制
        this.node_poker.active = false;
        this.node_load.active = !this.node_poker.active;
        this.scheduleOnce(() => {
            this.node_load.active = !this.node_load.active;
            this.node_poker.active = !this.node_poker.active;
        }, 1.5);
    }

    start() {}

    // update (dt) {}
}
