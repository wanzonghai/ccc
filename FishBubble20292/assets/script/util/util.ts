class util{
    public static readonly instance = new util();

    /** 获取两个数间的随机值(包括min max) */
    public getRandom(min, max) {
        if(min == -1 || max == -1) return;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

     /**随机生成数组 */
     getRandArray(min:number,max:number,length:number):Array<number>{
        let NumberArray:Array<number> = []
        for(let i=0;i<length;i++){
            NumberArray.push(this.getRandom(min,max))
        }
        return NumberArray
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
     * 随机获取数组中指定数量元素
     * @param list 提供数据的数组
     * @param itemNum 获取元素数量(当需要元素不重复时此值大于数组长度会打乱返回整个数组)
     * @param isRepetition 返回元素是否允许重复
    */
    public getRandomListItme(list: Array<any>, itemNum: number, isRepetition: boolean = false) {
        let copyList = this.copyObj(list);
        let randomList = [];

        list.splice

        if(isRepetition) {
            for(let i: number = 0; i < itemNum; i++) {
                randomList.push(copyList[this.getRandom(0, copyList.length-1)])
            }
        } else {
            let getItem = () => {
                if(copyList.length == 0) {
                    return;
                }
                let item = copyList.splice(this.getRandom(0, copyList.length-1), 1)[0];

                randomList.push(item);
                if(--itemNum > 0) {
                    getItem();
                }
            }

            getItem();
        }

        return randomList;
    }
     /**
     * 网格裁切纹理
    */
    gridCutSpriteFrame(sf: cc.SpriteFrame, rowNum: number, colNum: number) {
        let sp = sf.getTexture();
        let picWidth = sp.width/colNum;
        let picHeight = sp.height/rowNum;
        let sfList: Array<Array<cc.SpriteFrame>> = [];
        for(let i: number = 0; i < rowNum; i++) {
            sfList.push([]);
            for(let j: number = 0; j < colNum; j++) {
                let cutPic = new cc.SpriteFrame(sp);
                cutPic.setRect(new cc.Rect(j * picWidth, i*picHeight, picWidth, picHeight));
                sfList[i].push(cutPic);
            }
        }
        return sfList;
    }

    /**
     * 缓动更新事件
     * @param time 缓动运动时间
     * @param updateFunc 每帧调用的事件会传入百分比
    */
    tweenUpdate(time: number, updateFunc: Function) {
        let startObj = {num: 0};
        let endObj = {num: 100};
        let tw = cc.tween(startObj)
            .to(time, endObj, {progress: (start: number, end: number, current: number, ratio: number): number => {
                updateFunc(ratio);
                return
            }})
            tw.start();
            return tw
    }

}
export default util.instance;