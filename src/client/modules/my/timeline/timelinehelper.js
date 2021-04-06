export class Helper{
    constructor(){
        this.value = (Math.random(1) * 100).toFixed(2);
    }
    test(){
        console.log(`I am a test method, value is ${this.value}`);
    }
}