const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1");

//make clock
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();    
    const seconds = date.getSeconds();
    //HTML에 현재 시각 전달 (00:00:00 형태로)
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;       //mini if = condition ? true : false
}

function init() {     
    getTime();
    setInterval(getTime, 1000); //1초마다 갱신
}

init();