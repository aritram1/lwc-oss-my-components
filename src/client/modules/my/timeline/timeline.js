import { LightningElement, api } from 'lwc';
import { Helper } from './timelinehelper'
const DATA = [
    {year:2008, winner:'Rajasthan Royals'},{year:2009, winner:'Deccan Chargers'},{year:2010, winner:'Chennai Super Kings'},
    {year:2011, winner:'Chennai Super Kings'},{year:2012, winner:'Kolkata Knight Riders'},{year:2013, winner:'Mumbai Indians'},
    {year:2014, winner:'Kolkata Knight Riders'},{year:2015, winner:'Mumbai Indians'},{year:2016, winner:'Sunrisers Hyderabad'},
    {year:2017, winner:'Mumbai Indians'},{year:2018, winner:'Chennai Super Kings'},{year:2019, winner:'Mumbai Indians'},
    {year:2020, winner:'Mumbai Indians'}
];
// util to get ```above IPL winner data from Wiki Page```
// USage : Open the IPL wiki page and run in console.
// let data = document.querySelectorAll('td>b>a');
// let result=[];
// for(let i=0; i<data.length; i++){
//     result.push(`{year:${2008+i}, winner:'${data[i].textContent}'}`);
// }
// console.log(JSON.stringify(result).replaceAll('"',''));
        
export default class Timeline extends LightningElement {
   
    @api variant;
    @api v;
    @api timelinedata = [];
    helper = new Helper();
    
    
    count = 0; //test

    constructor(){
        super();
        this.timelinedata = DATA;
        this.v = 1;
        this.variant = 1;
        // console.log(`Random Number : ${this.helper.getRandomNumber()}`);
        console.log('constructor : I am called!');
    }

    connectedCallback() {
        console.log('connectedCallback : I am called!');
    }

    renderedCallback(){
        console.log('renderedCallback : I am called!');
        console.log(this.count);
        if(this.count % 2 === 0){
            console.log('renderedCallback : I am called for even count!');
        }
    }

    reloadData(){ //test
        this.timelinedata = DATA;
        console.log('reloadData : I am called!');
        this.count+=1;//test
    }//test
}

////util
// let data = document.querySelectorAll('td>b>a');
// let result=[];
// for(let i=0; i<data.length; i++){
//     result.push(`{year:${2008+i}, winner:'${data[i].textContent}'}`);
// }
// console.log(JSON.stringify(result).replaceAll('"',''));