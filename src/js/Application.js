import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }
<<<<<<< HEAD

    constructor() {
        super();

        this._loading = document.querySelector('progress');

        this._startLoading();
        this.emit(Application.events.READY);
    }
    _startLoading() {
        this._loading.style.visibility = 'visible';
    }





=======

    constructor() {
        super();

        this.planets = [];

    this._loading = document.body.querySelector('.progress');

    this._load().then(() => this.emit(Application.events.READY));
  }

  async _load() {
    const URL = 'https://swapi.boom.dev/api/planets/';
    let next = URL;

    this._startLoading();

    while (next) {
      const response = await fetch(next);

      if (!response.ok) {
        throw new Error (`HTTP error! Status: ${response.status}`);
      }

      const planetCollection = await response.json();
      next = planetCollection.next;

  
      this.planets = [...this.planets, ...planetCollection.results];
    }

    this._create();

    this._stopLoading();
  }

  _create() {
    this.planets.forEach(planet => {
      const box = document.createElement('div');
      box.classList.add('box');

      box.innerHTML = this._render({
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
      });

      document.body.querySelector(".main").appendChild(box);
    })
  }

  _startLoading() {
    this._loading.style.display = 'block';
  }

    // this.emit(Application.events.READY);
  _stopLoading() {
    this._loading.style.display = 'none';
  }

  _render({ name, terrain, population }) {
    return `
<article class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src="${image}" alt="planet">
    </figure>
  </div>
  <div class="media-content">
    <div class="content">
    <h4>${name}</h4>
      <p>
        <span class="tag">${terrain}</span> <span class="tag">${population}</span>
        <br>
      </p>
    </div>
  </div>
</article>
    `;
  }
>>>>>>> dev
}