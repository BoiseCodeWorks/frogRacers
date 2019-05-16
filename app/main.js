import RaceController from "./components/RaceController.js";




class App {
    constructor() {
        this.controllers = {
            raceController: new RaceController()
        }
    }
}
window['app'] = new App()