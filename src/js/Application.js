import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this._loading = document.createElement('progress');
        this._load = function() {

        };

        this._create = function() {

        };
        this._startLoading = function() {

        };
        this._stopLoading = function() {

        };
        this.emit(Application.events.READY);
    }
    _load() {
        console.log(`haha`);
    }
}