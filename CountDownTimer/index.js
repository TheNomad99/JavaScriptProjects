// let contdownDate = new Date("Jan 1, 2021 00:00:00");
// let now = new Date().getTime();
// let distance = contdownDate - now;
// let days = Math.floor(distance/(1000*60*60*24));
//   console.log(Math.floor(Math.abs(days)/7));
let CountingFromDate = new Date("Jun 20, 2023 00:00:00");
// const Week = document.getElementById("weeks");
// const Days = document.getElementById("days");
// const Hours = document.getElementById("hours");
// const Minutes = document.getElementById("minutes");
// const Seconds = document.getElementById("seconds");
const x = setInterval(function(){
    let now = new Date().getTime();

    let distance = CountingFromDate - now;
    
    let days = Math.abs(Math.floor(distance/ (1000*60*60*24)));
    let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = Math.abs(Math.floor((distance % (1000*60*60))/(1000*60)));
    let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
    if(days == 0 && days == 0 && minutes == 0 && seconds == 0){
        clearInterval(x);
    }
    console.log(days+"d - "+hours+"h - "+minutes+"m - "+seconds+"s");
    document.getElementById("days").innerText=days+"d";
    document.getElementById("hours").innerText=hours+"h";
    document.getElementById("minutes").innerText=minutes+"m";
    document.getElementById("seconds").innerText=seconds+"s";
    // Week.innerHTML="0"+weeks;
    // Days.innerHTML=days;
    // Hours.innerHTML=hours;
    // Minutes.innerHTML=minutes;
    // Seconds.innerHTML=seconds;
},1000);

function CountingDownMinutes(ags){
    let setDate = new Date(ags);
    let s = setInterval(() => {
        let now = new Date().getTime();
        let distance = setDate - now;
        
        let weeks = Math.floor(days/7);
        let days = Math.abs(Math.floor(distance/ (1000*60*60*24)));
        let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutes = Math.abs(Math.floor((distance % (1000*60*60))/(1000*60)));
        let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
        if(weeks == 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 0){
            clearInterval(s)
        }    
    });

}
function CountingDownDays(date){
    let setDate = new Date(date);
    let s = setInterval(() => {
        let now = new Date().getTime();
        let distance = setDate - now;
          
        let weeks = Math.floor(days / 7);
        let days = Math.abs(Math.floor(distance / (1000*60*60*24)));
        let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutes = Math.abs(Math.floor((distance % (1000*60*60)) / (1000*60)));
        let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
        if(weeks == 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 0){
            clearInterval(s)
        }    
    });

}