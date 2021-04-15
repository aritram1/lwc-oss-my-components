export class Helper{
    constructor(){
        this.r = (Math.random(1) * 100).toFixed(2);
    }
    getRandomNumber(){
        return this.r;
    }

    getDefaultData(){
        return [
            {year:2008, winner:'Rajasthan Royals'},{year:2009, winner:'Deccan Chargers'},{year:2010, winner:'Chennai Super Kings'},
            {year:2011, winner:'Chennai Super Kings'},{year:2012, winner:'Kolkata Knight Riders'},{year:2013, winner:'Mumbai Indians'},
            {year:2014, winner:'Kolkata Knight Riders'},{year:2015, winner:'Mumbai Indians'},{year:2016, winner:'Sunrisers Hyderabad'},
            {year:2017, winner:'Mumbai Indians'},{year:2018, winner:'Chennai Super Kings'},{year:2019, winner:'Mumbai Indians'},
            {year:2020, winner:'Mumbai Indians'}
        ];
    }

    getTitle(){
        return 'IPL Winners';
    }

    // util to get ```above IPL winner data from Wiki Page```
    // USage : Open the IPL wiki page and run in console.
    // let data = document.querySelectorAll('td>b>a');
    // let result=[];
    // for(let i=0; i<data.length; i++){
    //     result.push(`{year:${2008+i}, winner:'${data[i].textContent}'}`);
    // }
    // console.log(JSON.stringify(result).replaceAll('"',''));

}