import { v4 as uuidv4 } from 'uuid';

export class Helper{
    getDefaultTimeline(){
        return {
            id: uuidv4(),
            title: 'Chai pe charcha',
            time: '7AM Morning',
            type: 'Chai event',
            image: './resources/lwc.png',
            detail: 'Chai milegi chai..'
        };
    }
    getTimeLine(){
        //TBD
    }
    processTimeLineData(){
        return {
            id: uuidv4(),
            title: 'Processed : Tea Discussion',
            time: '7-11 AM Morning',
            type: 'Team Event',
            image: './resources/lwc.png',
            detail: 'Come together, have chai and charcha without any kharcha..'
        };
    }
}