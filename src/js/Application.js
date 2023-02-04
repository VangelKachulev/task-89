import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this._loading = document.getElementsByClassName('progress');
        const main = document.getElementsByClassName('main');

        this._load = async function() {
            const planets = await fetch(`https://swapi.boom.dev/api/planets`);
            

        };
        
        this._create = function() {

        };
        this._startLoading = function() {

        };
        this._stopLoading = function() {

        };
        this._render = function() {

        };
        this.emit(Application.events.READY);

    }


}