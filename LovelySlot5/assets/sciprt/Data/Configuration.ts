import { Friut, GameStatus } from "../util/define";

class Configuration {
    public static readonly instance = new Configuration();

    //结果展示时间
    public resTime = 0.45

    //boder停留时间
    public speed = 0.05

    //旋转圈数
    public truns:number = 3

    // 指定结果  (!= -1 则指定为相应的index结果)
    public resIndex:number = -1  

    // 指定分数配置
    public getScordArray:Array<number> = [200,200,200,200,200]

}

export default Configuration.instance;