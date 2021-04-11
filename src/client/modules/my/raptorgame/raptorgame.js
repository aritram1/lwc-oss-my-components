import { LightningElement } from 'lwc';
import { Helper} from './raptorgamehelper';
const helper = new Helper();
const SPEED_GRADIENT=10;
const DELAY=100;
        
export default class RaptorGame extends LightningElement {
   
    showCircle = false;
    showTriangle = false;
    countCircle=0;
    countTriangle=0;
    triangles = [];
    circles = [];
    angle=0;
    triangleTimerId;
    circleTimerId;
    speed=0;
    rpm=0;

    top=0;

    constructor(){
        super();
        console.log('constructor : I am called!');
        this.showCircle = true;
        this.showTriangle = true;
    }

    connectedCallback() {
        console.log('connectedCallback : I am called!');
    }

    renderedCallback(){
        //console.log('renderedCallback : I am called!', 'circles:', this.countCircle, 'triangles', this.countTriangle);
    }

    handleCreateCircle(){
        this.countCircle = this.countCircle + 1;
        this.circles = [...this.circles, this.countCircle];
    }

    handleCreateTriangle(){
        this.countTriangle = this.countTriangle + 1;
        this.triangles = [...this.triangles, this.countTriangle];
    }

    makeCircle(e){
        this.showCircle = true;
    }

    makeTriangle(e){
        this.showTriangle = true;
    }

    handleClearTriangles(){
        this.triangles = [];
        this.countTriangle = 0;
    }
    handleClearCircles(){
        this.circles = [];
        this.countCircle = 0;
    }

    handleRotation(event){
        
        if(this.countTriangle === 0) return;
        let btnName = event.target.textContent;
        if(btnName === 'Rotate+') this.angle = this.angle + 5;
        if(btnName === 'Rotate-') this.angle = this.angle - 5;
        
        this.angle = this.angle % 360;
        
        let elements = this.template.querySelectorAll('.triangles > p');
        console.log(elements.length);
        elements.forEach(el => {
            el.style.transform = `rotate(${this.angle}deg)`;
        });
    }

    handleStartSpin(){
        this.speed = this.speed + 1;
        if(this.countTriangle === 0) return;
        if(this.triangleTimerId){
            clearInterval(this.triangleTimerId);
        }
        this.triangleTimerId = setInterval(()=>{
            let elements = this.template.querySelectorAll('.triangles > p');
            this.angle = (this.angle + this.speed*SPEED_GRADIENT) % 360 ;
            this.rpm = (1000*60*this.speed*SPEED_GRADIENT)/(360*DELAY).toFixed(2);
            elements.forEach(el => {
                el.style.transform = `rotate(${this.angle}deg)`;
            });
        },DELAY);
    }

    // eslint-disable-next-line no-unused-vars
    handleStopSpin(event){
        console.log('Timer id->' + this.timerId);
        clearInterval(this.timerId);
        this.angle = 0;
        this.template.querySelectorAll('.triangles > p').forEach(el => {
            el.style.transform = `rotate(0deg)`;
        });
    }

    // eslint-disable-next-line no-unused-vars
    handleCircleMove(event){
        //this.speed = this.speed + 1;
        if(this.countCircle === 0) return;
        if(this.timerId){
            clearInterval(this.timerId);
        }
        this.circleTimerId = setInterval(()=>{
            let elements = this.template.querySelectorAll('.circles > p');
            this.top = this.top + 10;
            elements.forEach(el => {
                el.style.top = `${this.top}px`;
            });
            if(this.top === 120) this.top = 0;
        },DELAY);
    }
}