import { Vec2, Vec3, Node, UITransform, v3 } from "cc";

class util{
    public static readonly instance = new util();

    // 获取两个数间的随机值(包括min max)
    public getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    /* 判断一个点是否在目标节点内
     * @param node 目标节点
     * @param point 目标点位置(世界坐标)
    */
    checkPointExistNode(node: Node, point: Vec2 | Vec3) {
        let width = node.getComponent(UITransform).width;
        let height = node.getComponent(UITransform).height;
        let nodePos = node.worldPosition.clone();
        let topPos = v3(nodePos.x, nodePos.y + height/2);
        let bottomPos = v3(nodePos.x, nodePos.y - height/2);
        let leftPos = v3(nodePos.x - width/2, nodePos.y);
        let rightPos = v3(nodePos.x + width/2, nodePos.y);

        if(point.x >= leftPos.x && point.x <= rightPos.x && point.y >= bottomPos.y && point.y <= topPos.y) {
            return node;
        }

        return null;
    }
}
export default util.instance;