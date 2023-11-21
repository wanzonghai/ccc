import { EventId } from "../define";
import Event from "./Event";


export default class EventMgr {
    private eventMap: Map<EventId, Array<Event>> = new Map();
    
    private static instance: EventMgr;
    public static get Instance() {
        if (this.instance == null) {
            this.instance = new EventMgr();
        }
        return this.instance;
    }

    public Register(eventId: EventId, callback: Function, scope: any = null) {
        let event = new Event(eventId, callback, false, scope);
        this.setEvent(eventId, event);
    }

    public Once(eventId: EventId, callback: Function, scope: any = null) {
        let event = new Event(eventId, callback, true, scope);
        this.setEvent(eventId, event);
    }

    public Off(){
        this.eventMap = new Map()
    }

    public Emit(evId: EventId, ...args) {
        if (!this.eventMap.has(evId)) {
            return;
        }
        let evts = this.eventMap.get(evId);
        if (evts.length) {
            let newEvts = new Array<Event>();
            for (let i = 0; i< evts.length; i++) {
                let ev = evts[i];
                ev.Call(...args);

                if (!ev.Once) {
                    newEvts.push(ev);
                }
            }
            this.eventMap.set(evId, newEvts);
        }
    }

    private setEvent(eventId: EventId, event: Event ) {
        if (this.eventMap.has(eventId)) {
            let evts = this.eventMap.get(eventId);
            let finder = evts.findIndex((evt) => evt.Equel(event));
            if (finder == -1) {
                evts.push(event);
                this.eventMap.set(eventId, evts);
            } else {
                evts.splice(finder, 1);
                evts.push(event);
                this.eventMap.set(eventId, evts);
            }
        } else {
            let evts = new Array()
            evts.push(event);
            this.eventMap.set(eventId, evts);
        }
    }
}