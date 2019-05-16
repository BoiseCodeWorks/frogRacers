import Frog from "../model/Frog.js";
//Private
let _state = {
    frogs: []
}
let _subscribers = {
    frogs: []
}
function _setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}

function _startFrogs() {
    _state.frogs.forEach(frog => {
        setTimeout(() => {
            frog.finished = true
            _setState('frogs', _state.frogs)
        }, frog.time * 1000)
    })
}
//Public
export default class RaceService {
    get Frogs() {
        return _state.frogs.map(f => new Frog(f))
    }
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }
    startRace() {

    }
}