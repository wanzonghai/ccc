
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = StartGameManger
 * DateTime = Thu Sep 14 2023 14:47:18 GMT+0800 (中国标准时间)
 * Author = ZHIZH
 * FileBasename = StartGameManger.ts
 * FileBasenameNoExtension = StartGameManger
 * URL = db://assets/script/manger/StartGameManger.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('StartGameManger')
export class StartGameManger extends Component {


    start () {
        // [3]
    }

    switchScene() {
        director.loadScene("game");
    }
}
