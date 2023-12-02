import { _decorator, Component, Node, director, Toggle, Tween, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginLayer')
export class LoginLayer extends Component {

    @property({type: Node, tooltip: "复选框"})
    toggleNode: Node = null;

    @property({type: Node, tooltip: "隐私协议弹框"})
    privacyPolicyLayer: Node = null;

    start() {
        this.toggleNode["startPos"] = this.toggleNode.position.clone();
    }

    update(deltaTime: number) {
        
    }
    
    /** 展示隐私协议 */
    showPrivacyPolicyLayer() {
        this.privacyPolicyLayer.active = true;
    }

    /** 关闭隐私协议弹框 */
    clsoePrivacyPolicyLayer() {
        this.privacyPolicyLayer.active = false;
    }


    openMainLayer() {
        if(this.toggleNode.getComponent(Toggle).isChecked) {
            director.loadScene("mainLayer_CPV");
        } else {
            Tween.stopAllByTarget(this.toggleNode);
            this.toggleNode.position = this.toggleNode["startPos"].clone();
            tween(this.toggleNode)
                .by(0.1, {position: v3(-10, 0)})
                .by(0.1, {position: v3(20, 0)})
                .by(0.1, {position: v3(-10, 0)})
                .start();
        }
    }
}


