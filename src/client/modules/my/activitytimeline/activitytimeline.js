/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api } from 'lwc';
import { Helper} from './activitytimelinehelper';
const helper = new Helper();
        
export default class ActivityTimeline extends LightningElement {
   
    @api timelinedata;
    showAddNewScreen = false;

    constructor(){
        super();
        this.timelinedata = [helper.getDefaultTimeline(), helper.processTimeLineData()];
        console.log('constructor : I am called!');
    }

    connectedCallback() {
        console.log(this.timelinedata);
        console.log('connectedCallback : I am called!');
    }

    renderedCallback(){
        console.log('renderedCallback : I am called!');
    }

    get timelineAvailable(){
        return this.timelinedata && this.timelinedata.length !== 0;
    }

    handleClear(){
        this.timelinedata = [];
    }
    handleAddNew(){
        this.showAddNewScreen = true;
    }
    handleAddDefault(){
        this.timelinedata = [helper.getDefaultTimeline(), ...this.timelinedata];
    }
    handleHideAddNewScreen(e){
        this.showAddNewScreen = e.detail;
        //same as 
        //this.showAddNewScreen = false;
    }

    handleSaveActivity(e){
        console.log('RECEIVED==>' + JSON.stringify(e.detail));
        this.timelinedata = [e.detail, ...this.timelinedata];
        this.showAddNewScreen = false;
    }
    
}