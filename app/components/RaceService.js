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
//Public
export default class RaceService {
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }
}