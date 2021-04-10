import { LightningElement } from 'lwc';
const SAMPLEDATA = [{year:1983, winner:'Cricket World Cup'},{year:2007, winner:'T20 World Cup Chargers'}];
export default class App extends LightningElement {
    
    constructor(){
        super();
        this.data = SAMPLEDATA;
    }
}
