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

function _drawFinishers() {
    console.log('finishers draw')
    let frogs = _raceService.Finishers
    let template = ''
    for (let i = 0; i < frogs.length; i++) {
        let frog = frogs[i]
        template += frog.template
    }
    document.getElementById("finishers").innerHTML = template
}
//Public

export default class RaceController {
    constructor() {
        //register subscribers
        _raceService.addSubscriber("frogs", _drawFrogs)
        _raceService.addSubscriber('finishers', _drawFinishers)
        //get data
        _raceService.getFrogs()

    }
    race() {
        _raceService.startRace()
    }
}