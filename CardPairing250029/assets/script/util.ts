import {Node, UITransform, Vec2, Vec3, tween, v3} from "cc"
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
        let nodePos = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)).clone();
        let topPos = v3(nodePos.x, nodePos.y + height/2);
        let bottomPos = v3(nodePos.x, nodePos.y - height/2);
        let leftPos = v3(nodePos.x - width/2, nodePos.y);
        let rightPos = v3(nodePos.x + width/2, nodePos.y);

        if(point.x >= leftPos.x && point.x <= rightPos.x && point.y >= bottomPos.y && point.y <= topPos.y) {
            return node;
        }

        return null;
    }

    /* 随机获取数组中指定数量元素
    * @param list 提供数据的数组
    * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
    * @param isRepetition 返回元素是否允许重复
    */
    public getRandomListItme(list: Array<any>, itemNum: number, isRepetition: boolean = false) {
        let copyList = this.copyObj(list);
        let randomList: Array<any> = [];

        list.splice

        if(isRepetition) {
            for(let i: number = 0; i < itemNum; i++) {
                randomList.push({
                    element: copyList[this.getRandom(0, copyList.length-1)],
                    index: this.getRandom(0, copyList.length-1)
                })
            }
        } else {
            let getItem = () => {
                if(copyList.length == 0) {
                    return;
                }
                let item = copyList.splice(this.getRandom(0, copyList.length-1), 1)[0];

                randomList.push({
                    element: item,
                    index: this.getRandom(0, copyList.length-1)
                });
                if(--itemNum > 0) {
                    getItem();
                }
            }

            getItem();
        }

        return randomList;
    }

    /**
     * 深拷贝
    */
    copyObj = (obj = {}) => {            //变量先置空
        let newobj = null;  

        //判断是否需要继续进行递归
        if (typeof (obj) == 'object' && obj !== null) {
            newobj = obj instanceof Array ? [] : {};                //进行下一层递归克隆
            for (var i in obj) {
                newobj[i] = this.copyObj(obj[i])
            }                //如果不是对象直接赋值
        } else{
            newobj = obj
        };            
        return newobj;    
    }

    /**
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    tweenUpdate(time: number, updateFunc: Function) {
        let startObj = {num: 0};
        let endObj = {num: 100};
        let tweenObj = tween(startObj)
            .to(time, endObj, {progress: (start: number, end: number, current: number, ratio: number): number => {
                updateFunc(ratio);

                return 1;
            }})
        tweenObj.start();

        return tweenObj;
    }
}
export default util.instance;