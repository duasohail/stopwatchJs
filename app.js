var min=0;
var sec=0;
var msec=0;
var min_hd =document.getElementById("min");
var sec_hd =document.getElementById("sec");
var msec_hd =document.getElementById("msec");
var interval;

function timer(){

    msec++
    msec_hd.innerHTML=msec;
    if(msec >= 1000){
        sec++
        sec_hd.innerHTML=sec;
        msec=0;

    }else if(sec >= 60){
        min++
        min_hd.innerHTML=min;
        sec=0;

    }

}


function start(){

    interval=setInterval(timer,100)
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;
    document.getElementById("reset").disabled=false;

}
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
    document.getElementById("reset").disabled=false;


}
function reset(){
    min=0;
    sec=0;
    msec=0;
    min_hd.innerHTML=min;
    sec_hd.innerHTML=sec;
    msec_hd.innerHTML=msec;
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=false;
    document.getElementById("reset").disabled=true;
    clearInterval(interval)
}