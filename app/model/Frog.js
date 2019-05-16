export default class Frog {
    constructor(data) {
        this.name = data.name
        this.time = data.time || Math.random() * 10
    }

    get template() {
        return `
        <div class="col">
        <img src="https://placehold.it/200x200" alt="">
        <h2>Frog Name</h2>
        <h2>Time</h2>
        </div>
        `
    }
}

