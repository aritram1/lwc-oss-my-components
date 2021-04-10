export class Helper{
    constructor(){
        //super();
        this.r = (Math.random(1) * 100).toFixed(2);
    }
    getRandomNumber(){
        return this.r;
    }
}