export default class Frog {
    constructor(data) {
        this.name = data.name
        this.time = data.time || Math.random() * 10
        this.finished = data.finished || false
        this.started = data.started || false
    }

    get template() {
        let temp = `
        <div class="col">
        <h2>${this.name}</h2>
        `
        if (!this.started) {
            temp += '<img src="https://images-na.ssl-images-amazon.com/images/I/71OQaYbGtHL._SX425_.jpg" />'
        } else if (!this.finished) {
            temp += '<img src="https://media.giphy.com/media/Sux3kje9eOx1e/giphy.gif" />'
        } else {
            temp += `
            <marquee><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSY-y51HY-MgirGUgvQVa55wA9GG4qyWRRfq2Opqz8k8qK5qZx" />
            <h2>${this.time.toFixed(3)}</h2></marquee>
            `
        }
        return temp + '</div>'
    }
}


//racing: https://media.giphy.com/media/Sux3kje9eOx1e/giphy.gif
//finished:   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSY-y51HY-MgirGUgvQVa55wA9GG4qyWRRfq2Opqz8k8qK5qZx

