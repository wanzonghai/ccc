import { UITransform, Node, v3, random, Vec2, Vec3 } from "cc";

/** 方向类型 */
export enum DirectionType {
    Top = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
}

class util{
    public static readonly instance = new util();

    // 获取两个数间的随机值(包括min max)
    public getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    
    /**
     * 判断移动方向
     * @param startPos 初始位置
     * @param endPos 结束位置
    */
    isDirection(startPos: Vec2, endPos: Vec2): DirectionType{
        let direction: DirectionType = DirectionType.Left;
        let offsetX = Math.abs(endPos.x - startPos.x);
        let offsetY = Math.abs(endPos.y - startPos.y);

        if(offsetX >= offsetY) {
            direction = endPos.x > startPos.x ? DirectionType.Right : DirectionType.Left;
        } else {
            direction = endPos.y > startPos.y ? DirectionType.Top : DirectionType.Bottom;
        }

        return direction;
    }

    /**
     * 判断一个点是否在目标节点内(目标点需是目标节点同一父节点下位置)
     * @param node 目标节点
     * @param point 目标点位置
    */
    checkPointExistNode(node: Node, point: Vec2 | Vec3) {
        let width = node.getComponent(UITransform).width * node.scale.x;
        let height = node.getComponent(UITransform).height * node.scale.y;
        let nodePos = v3(node.position.x, node.position.y);
        let topPos = v3(nodePos.x, nodePos.y + height/2);
        let bottomPos = v3(nodePos.x, nodePos.y - height/2);
        let leftPos = v3(nodePos.x - width/2, nodePos.y);
        let rightPos = v3(nodePos.x + width/2, nodePos.y);

        if(point.x >= leftPos.x && point.x <= rightPos.x && point.y >= bottomPos.y && point.y <= topPos.y) {
            return node;
        }

        return null;
    }

    /**
     * 生成一个随机点
     * @param parent 当前节点父节点
     * @param item 当前需要加入的节点
    */
    public generateRandomPoint(parent: Node, item: Node){
        let halfWidth = parent.getComponent(UITransform).width/2 * parent.scale.x;
        let halfHeight = parent.getComponent(UITransform).height/2 * parent.scale.y;
        let itemWidth = item.getComponent(UITransform).width/2 * item.scale.x;
        let itemHeight = item.getComponent(UITransform).height/2 * item.scale.y;
        let randomPos = v3(0, 0);
        let checkPointAllowPlace = (point) => { // 检测点是否允许放置
            let isAllowPlace = true;
            let checkPointList = [ // 当前需要加入的item四个角位置
                v3(point.x - itemWidth/2, point.y + itemHeight/2),
                v3(point.x + itemWidth/2, point.y + itemHeight/2),
                v3(point.x - itemWidth/2, point.y - itemHeight/2),
                v3(point.x + itemWidth/2, point.y - itemHeight/2),
            ];

            parent.children.forEach((child) => {
                if(!child.active) return;
                checkPointList.forEach((checkPoint) => {
                    if(this.checkPointExistNode(child, checkPoint)) { // 点位置存在节点
                        isAllowPlace = false;
                    }
                })
            });

            return isAllowPlace;
        }
        let getPos = () => {
            let pos = v3(0, 0);

            let x = this.getRandom(parent.position.x - halfWidth, parent.position.x + halfWidth + 1);
            let y = this.getRandom(parent.position.y - halfHeight, parent.position.y + halfHeight + 1);

            if(checkPointAllowPlace(v3(x, y))) {
                pos = v3(x, y);
            } else {
                pos = getPos();
            }

            return pos;
        }

        randomPos = getPos();

        return randomPos;
    }

    
    /**
     * 获得运动时间
    */
    getMoveTime(startPos: Vec3 | Vec2, endPos: Vec3 | Vec2) {
        let speed = 500;
        let xLenth = 0;
        let yLenth = 0;

        xLenth = Math.abs(endPos.y - startPos.y);
        yLenth = Math.abs(endPos.x - startPos.x);

        return Math.max(xLenth, yLenth) / speed;
    }
}
export default util.instance;