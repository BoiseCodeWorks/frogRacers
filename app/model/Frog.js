export default class Frog {
    constructor(data) {
        this.name = data.name
        this.time = data.time || Math.random() * 10
        this.finished = data.finished || false
    }

    get template() {
        let temp = `
        <div class="col">
        <img src="https://placehold.it/200x200" alt="">
        <h2>${this.name}</h2>
        `
        if (this.finished) {
            temp += `<h2>${this.time}</h2>`
        }
        return temp + '</div>'
    }
}

