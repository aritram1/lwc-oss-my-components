import { LightningElement } from 'lwc';
import '@lwc/synthetic-shadow'; //to incorporate LWC Base components

export default class App extends LightningElement {
    showType1 = false;
    showType2 = false;
    showType3 = false;
    value;

    constructor(){
        super();
        this.value = 'Type1';
        this.allTypes = [
            { label: 'Type 1', value: 'Type1' },
            { label: 'Type 2', value: 'Type2' },
            { label: 'Type 3', value: 'Type3' }
        ];
    }

    handleChange(e){
        console.log('hello');
        this.reset();
        this.value = e.target.value;
        console.log('-->' + this.value);
        switch(e.target.value){
            case 'Type1':
                this.showType1 = true;    
                break;
            case 'Type2' :
                this.showType2 = true;    
                break;
            case 'Type3' :
                this.showType3 = true;    
                break;
            default :
                break;
        }
    }

    reset(){
        this.showType1 = false;
        this.showType2 = false;
        this.showType3 = false;
    }
}
