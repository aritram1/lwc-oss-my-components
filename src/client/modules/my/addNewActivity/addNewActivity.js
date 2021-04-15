/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement } from 'lwc';
import { v4 as uuidv4 } from 'uuid';
        
export default class AddNewActivity extends LightningElement {
    
    title='';
    time='';
    type='';
    detail='';

    handleCaptureActivityType(e){
        console.log(e.target.value);
        this.type = e.target.value;
    }

    handleSave(e){
        this.title = this.template.querySelector(`[data-name*="title"]`).value;
        this.time = this.template.querySelector(`[data-name*="time"]`).value;
        this.detail = this.template.querySelector(`[data-name*="detail"]`).value;
        this.type = this.template.querySelector(`[data-name*="detail"]`).value;
        
        console.log('VALUES');
        console.log('--' + this.type + '--' + this.title + '--' + this.time +  '--' + this.detail);
        
        this.dispatchEvent(new CustomEvent('saveactivity', {
                detail: {
                    id: uuidv4(),
                    title: this.title ? this.title : 'Unknown Tea shop',
                    time: this.time ? this.time : 'Usual',
                    type: this.type ? this.type : 'Discussion on recent affairs',
                    image: './resources/lwc.png'
                }
            }
        ));
    }

    handleHide(){
        this.dispatchEvent(new CustomEvent('hide', {
                detail: false
            }
        ));
    }
}