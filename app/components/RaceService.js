import Frog from "../model/Frog.js";
//Private
let _state = {
    frogs: [],
    finishers: []
}
let _subscribers = {
    frogs: [],
    finishers: []
}
function _setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}

function _startFrogs() {
    _state.frogs.forEach(frog => {  // start all frogs running
        frog.started = true
        setTimeout(() => {
            //this runs after frog.time seconds
            frog.finished = true
            _state.frogs.splice(_state.frogs.indexOf(frog), 1)
            _state.finishers.push(frog)
            _setState('frogs', _state.frogs)
            _setState('finishers', _state.finishers)
        }, frog.time * 1000)
    })

    _setState('frogs', _state.frogs) // draws running frogs
}
//Public
export default class RaceService {



    get Frogs() {
        return _state.frogs.map(f => new Frog(f))
    }

    get Finishers() {
        return _state.finishers.map(f => new Frog(f))
    }

    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }
    startRace() {
        _startFrogs()
    }
    getFrogs() {
        // FAKING DATABASE CALL
        let resultsFromDb = [
            new Frog({ name: 'Kermit' }),
            new Frog({ name: 'Slippy' }),
            new Frog({ name: 'Hoppy' })
        ]
        _setState('frogs', resultsFromDb)
    }
}