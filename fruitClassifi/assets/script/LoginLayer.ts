import { _decorator, Component, Node, director, Button, v2, Animation, tween, Tween, v3, AudioClip, AudioSource, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginLayer')
export class LoginLayer extends Component {
    @property(Node)
    checkBtn: Node = null

    @property(Node)
    page: Node = null

    @property({type: [AudioClip], tooltip: "音效"})
    audios: AudioClip[] = [];

    private isPolicy:boolean = false

    start() {
        this.checkBtn["startPos"] = this.checkBtn.position.clone();
    }

    update(deltaTime: number) {
        
    }

    
    onChange(){
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[0])
        this.isPolicy = !this.isPolicy
    }

    showPage() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[0])
        this.page.active = true
        this.page.getComponent(Animation).play();
    }

    
    closePage(){
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[0])
        this.page.active = false
    }

    openMainLayer() {
        find("Canvas").getComponent(AudioSource).playOneShot(this.audios[0])
        if(this.isPolicy) {
            director.loadScene("mainLayer")
        } else {
            find("Canvas").getComponent(AudioSource).playOneShot(this.audios[1])
            Tween.stopAllByTarget(this.checkBtn);
            this.checkBtn.position = this.checkBtn["startPos"].clone();
            tween(this.checkBtn)
                .by(0.1, {position: v3(-10, 0)})
                .by(0.1, {position: v3(20, 0)})
                .by(0.1, {position: v3(-10, 0)})
                .start();
        }
    }
}


