import { LightningElement } from 'lwc';
import '@lwc/synthetic-shadow'; //to incorporate LWC Base components

export default class App extends LightningElement {
    showApp1 = false;
    showApp2 = false;
    showApp3 = false;
    showApp4 = false;
    showApp5 = false;
    allApps=[];
    value='';

    constructor(){
        super();
        this.value = 'App3';
        this.showApp3 = true;
        this.allApps = [
            { label: 'Timeline example 1', value: 'App1' },
            { label: 'Timeline activity Example 1', value: 'App2' },
            { label: 'CSS Demo', value: 'App3' },
            //{ label: 'Exerimental', value: 'App4' },
            //{ label: 'Login Form', value: 'App5' }
        ];
    }

    handleChange(e){
        try{
            console.log('hello1 : ' + e.detail.value); 
            console.log('hello2 : ' + e.target.value); 
            
            this.reset();
            this.value = e.target.value;
            console.log('-->' + this.value);
            switch(e.target.value){
                case 'App1':
                    this.showApp1 = true;    
                    break;
                case 'App2':
                    this.showApp2 = true;    
                    break;
                case 'App3' :
                    this.showApp3 = true;    
                    break;
                case 'App4' :
                        this.showApp4 = true;    
                        break;
                case 'App5' :
                    this.showApp5 = true;    
                    break;
                default :
                    break;
            }
        }
        catch(error){
            console.log(error);
        }
    }

    reset(){
        this.showApp1 = false;
        this.showApp2 = false;
        this.showApp3 = false;
        this.showApp4 = false;
        this.showApp5 = false;
    }
}
