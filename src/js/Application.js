import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();

        this._loading = document.querySelector('progress');

        this._startLoading();
        this.emit(Application.events.READY);
    }
    _startLoading() {
        this._loading.style.visibility = 'visible';
    }





}