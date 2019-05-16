import RaceService from "./RaceService.js";

//Private
let _raceService = new RaceService()

function _drawFrogs() {
    let frogs = _raceService.Frogs
    let template = ''

    for (let i = 0; i < frogs.length; i++) {
        let frog = frogs[i]
        template += frog.template
    }
    document.getElementById("frogs").innerHTML = template
}
//Public

export default class RaceController {
    constructor() {
        _raceService.addSubscriber("frogs", _drawFrogs)
    }
    race() {
        _raceService.startRace()
    }
}