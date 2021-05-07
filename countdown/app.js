const days1=document.getElementById("days-col");
const hour1=document.getElementById("hours-col");
const mins1=document.getElementById("mins-col");
const seconds1=document.getElementById("secs-col");
const targetDay="28 May 2021";
var flag=1;
var audio=new Audio('sound.wav');
function countdown(){
    const targetDate=new Date(targetDay);
    const currentDate=new Date();
    const totalSeconds=(targetDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    days1.innerHTML=days;
    hour1.innerHTML=format(hours);
    mins1.innerHTML=format(minutes);
    seconds1.innerHTML=format(seconds);
    
    //for alert massege;
    notification();
}

function notification() {
    var currentTime = new Date();
    var d=currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if(flag && d==27 && hours==23 && minutes==58 && audio.paused){
        flag=0;
        audio.play();
        setTimeout(function() {
            audio.pause(); 
            alert("Be Ready");
        },3000);
    }
}
//helper to format time;
function format(time){
    if(time<10)
        return `0${time}`;
    else
        return time;
}
//function call with a given interval
if(flag==1)
    setInterval(countdown,1000);