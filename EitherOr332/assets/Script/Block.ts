
const {ccclass, property} = cc._decorator;

@ccclass
export default class Block extends cc.Component {
    startPos = cc.v3(0, 0, 0);
     onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event) {
       this.node.opacity = 100;
       this.startPos = this.node.position;
       this.node.zIndex = 1;
       
    }
    onTouchMove(event) {
        // let delta = event.getDelta();
        // this.node.x += delta.x;
        // this.node.y += delta.y;
   
        let startPos = event.getStartLocation();
        let endpos = event.getLocation();
        let  offsetx = endpos.x-startPos.x;
        let  offsety = endpos.y-startPos.y;
        // // 计算当前触摸位置与起始位置的差值
        let currentPos = event.getLocation();
        let deltass = cc.v3(offsetx , offsety,0);
    
        // // 更新方块节点的位置
        this.node.x += deltass.x;
        this.node.y += deltass.y;
    
        // // 更新起始位置
        this.startPos = currentPos;
    }
    onTouchEnd(event) {
        this.node.opacity = 255;
        this.node.zIndex = 0;
    }
    
}
