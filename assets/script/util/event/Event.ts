import { EventId } from "../define";



export default class Event {
    public EventId: EventId;
    public Callback: Function;
    public Scope: any;
    public Once: boolean;
    public RealCallBakc: Function;

    constructor(eventId: EventId, callbak: Function, once:boolean, scope: any = null) {
        this.EventId = eventId;
        this.Callback = callbak;
        this.Scope = scope;
        if (scope != null || scope != undefined) {
            this.RealCallBakc = callbak.bind(scope);
        } else {
            this.RealCallBakc = this.Callback;
        }
        this.Once = once;
    }

    public get Call() {
        return this.RealCallBakc;
    }

    public Equel(other: Event) {
        return this.EventId == other.EventId && this.Callback == other.Callback && this.Once == other.Once && this.Scope == other.Scope;
    }
}