import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginLayer')
export class LoginLayer extends Component {
    start() {
    }

    update(deltaTime: number) {
        
    }

    openMainLayer() {
        director.loadScene("mainLayer_FMKITA")
    }
}


