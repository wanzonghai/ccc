import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScrollItem')
export class ScrollItem extends Component {
    @property(Label)
    lblNum: Label = null;

    setData(index: number) {
        this.lblNum.string = `${index}`;
    }
}

