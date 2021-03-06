import { LightningElement } from 'lwc';
// import { Helper} from './raptorgamehelper';
// const helper = new Helper();
const SPEED_GRADIENT=10;
const DELAY=50;
const MAX_CIRCLE_Y = 300;
let MIN_CIRCLE_Y = 10;
const CIRCLE_SPEED_STEP = 15;

const TRIANGLE_ROTATION_ANGLE=10;

export default class CSSDemo extends LightningElement {
   
    countCircle=0;
    countTriangle=0;
    triangles = [];
    circles = [];
    angle=0;
    triangleTimerId;
    circleTimerId;
    speedTriangle=0;
    speedCircle=0;
    rpm=0;
    currentShape='';

    top=10;
    direction = 1;

    get disableTriangleButtons(){
        return this.triangles.length === 0;
    }
    get disableCircleButtons(){
        return this.countCircle === 0;
    }

    constructor(){
        super();
        console.log('constructor : I am called!');
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

    handleClearTriangles(){
        this.triangles = [];
        this.countTriangle = 0;
    }
    handleClearCircles(){
        this.circles = [];
        this.countCircle = 0;
    }

    handleRotationCW(event){
        if(this.countTriangle === 0) return;
        this.angle = this.angle + TRIANGLE_ROTATION_ANGLE;
        this.handleRotation();
    }

    handleRotationCCW(event){
        if(this.countTriangle === 0) return;
        this.angle = this.angle - TRIANGLE_ROTATION_ANGLE;
        this.handleRotation();
    }

    handleRotation(){
        this.angle = this.angle % 360;
        let elements = this.template.querySelectorAll('.triangles > p');
        console.log(`${elements.length} triangles are rotated!`);
        elements.forEach(el => {
            el.style.transform = `rotate(${this.angle}deg)`;
        });
    }

    handleStartSpin(){
        this.speedTriangle = this.speedTriangle + 1;
        if(this.countTriangle === 0) return;
        if(this.triangleTimerId){
            clearInterval(this.triangleTimerId);
        }
        this.triangleTimerId = setInterval(()=>{
            let elements = this.template.querySelectorAll('.triangles > p');
            this.angle = (this.angle + this.speedTriangle*SPEED_GRADIENT) % 360 ;
            this.rpm = ((1000*60*this.speedTriangle*SPEED_GRADIENT)/(360*DELAY)).toFixed(2);
            elements.forEach(el => {
                el.style.transform = `rotate(${this.angle}deg)`;
            });
        },DELAY);
    }

    // eslint-disable-next-line no-unused-vars
    handleStopSpin(event){
        console.log('Triangle Timer id->' + this.triangleTimerId);
        clearInterval(this.triangleTimerId);
        this.angle = 0;
        this.template.querySelectorAll('.triangles > p').forEach(el => {
            el.style.transform = `rotate(0deg)`;
        });
        this.rpm = 0;
        this.speedTriangle = 0;
    }

    // eslint-disable-next-line no-unused-vars
    handleCircleMove(event){
        this.speedCircle = this.speedCircle + 1;
        if(this.countCircle === 0) return;
        if(this.circleTimerId){
            clearInterval(this.circleTimerId);
        }
        this.circleTimerId = setInterval(()=>{
            let elements = this.template.querySelectorAll('.circles > p');
            this.top = this.top + 5;
            if(this.top > MAX_CIRCLE_Y) this.top = 0;
            elements.forEach(el => {
                el.style.top = `${this.top}px`;
            });
        },DELAY);
    }

    // eslint-disable-next-line no-unused-vars
    handleCircleStop(event){
        console.log('Timer id->' + this.circleTimerId);
        clearInterval(this.circleTimerId);
        this.template.querySelectorAll('.circles > p').forEach(el => {
            el.style.top = '0px';
        });
        this.angle = 0;
        this.top = 0;
        this.speedCircle = 0;
    }

    // eslint-disable-next-line no-unused-vars
    handleShapeChange(event){
        this.template.querySelectorAll('.triangles > p').forEach(el => {
            if(el.classList.contains('triangle')){
                el.classList.toggle('triangle');
                el.classList.add('pacman');
            }
            else if(el.classList.contains('pacman')){
                el.classList.toggle('pacman');
                el.classList.add('trapezium');
            }
            else if(el.classList.contains('trapezium')){
                el.classList.toggle('trapezium');
                el.classList.add('triangle');
            }
        });
    }

     // eslint-disable-next-line no-unused-vars
    handleDrop(event){
        if(this.countCircle === 0) return;
        if(this.circleTimerId){
            clearInterval(this.circleTimerId);
        }
        this.circleTimerId = setInterval(()=>{
            let elements = this.template.querySelectorAll('.circles > p');

            if(this.top < MIN_CIRCLE_Y){
                this.direction = 2;
            }
            if(this.top > MAX_CIRCLE_Y){
                this.direction = -1;
                if(MIN_CIRCLE_Y<MAX_CIRCLE_Y){
                    MIN_CIRCLE_Y = MIN_CIRCLE_Y + CIRCLE_SPEED_STEP;
                }
                else{
                    MIN_CIRCLE_Y = 10;
                    this.top = MIN_CIRCLE_Y + CIRCLE_SPEED_STEP;
                }
            }
            this.top = this.top + (CIRCLE_SPEED_STEP * this.direction);
            elements.forEach(el => {
                el.style.top = `${this.top}px`;
            });
        },DELAY);
    }
}