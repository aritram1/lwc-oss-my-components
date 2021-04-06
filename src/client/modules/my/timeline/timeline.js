/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api } from 'lwc';
import { Helper } from './timelinehelper'
const DATA = [
    {year:2008, winner:'Rajasthan Royals'},{year:2009, winner:'Deccan Chargers'},{year:2010, winner:'Chennai Super Kings'},
    {year:2011, winner:'Chennai Super Kings'},{year:2012, winner:'Kolkata Knight Riders'},{year:2013, winner:'Mumbai Indians'},
    {year:2014, winner:'Kolkata Knight Riders'},{year:2015, winner:'Mumbai Indians'},{year:2016, winner:'Sunrisers Hyderabad'},
    {year:2017, winner:'Mumbai Indians'},{year:2018, winner:'Chennai Super Kings'},{year:2019, winner:'Mumbai Indians'},
    {year:2020, winner:'Mumbai Indians'}
];
        
export default class Timeline extends LightningElement {
   
    @api variant;
    @api v;
    @api timelinedata = [];
    
    constructor(){
        super();
        this.timelinedata = DATA;
        if(this.v && this.variant && this.variant !== this.v){ this.v = this.variant }
        if(this.variant && !this.v) { this.v = this.variant; }
        if(this.v && !this.variant) { this.variant = this.v; }
        console.log(`From constructor : v is : ${this.v} and variant is ${this.variant}`);
        console.log(`Random Number : ${new Helper().test()}`);
    }

    connectedCallback() {

    }

    renderedCallback(){

    }
}

////util
// let data = document.querySelectorAll('td>b>a');
// let result=[];
// for(let i=0; i<data.length; i++){
//     result.push(`{year:${2008+i}, winner:'${data[i].textContent}'}`);
// }
// console.log(JSON.stringify(result).replaceAll('"',''));