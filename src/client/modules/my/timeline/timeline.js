import { LightningElement, api } from 'lwc';
import { Helper } from './timelinehelper';
const helper = new Helper();
export default class Timeline extends LightningElement {
   
    @api title;
    @api timelinedata = [];
    
    constructor(){
        super();
        console.log(`Random Number from Helper : ${helper.getRandomNumber()}`);
        console.log('constructor : I am called!');
    }

    connectedCallback() {
        console.log('connectedCallback : I am called!');
        
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        if(!this.timelinedata) this.timelinedata = helper.getDefaultData();
        
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        if(!this.title) this.title = helper.getTitle();
    }

    renderedCallback(){
        console.log('renderedCallback : I am called!');

        // // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        // if(!this.timelinedata) this.timelinedata = helper.getDefaultData();
        
        // // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        // if(!this.title) this.title = helper.getTitle();
    }

    reloadData(){
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.timelinedata = helper.getDefaultData();
        console.log('reloadData : I am called!');
    }
}

////util
// let data = document.querySelectorAll('td>b>a');
// let result=[];
// for(let i=0; i<data.length; i++){
//     result.push(`{year:${2008+i}, winner:'${data[i].textContent}'}`);
// }
// console.log(JSON.stringify(result).replaceAll('"',''));