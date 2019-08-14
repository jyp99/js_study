const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){//현재 시간정보를 가져올 getTime함수 생성
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;//h1의 글자를 가져온 시간정보로 업데이트, 10이하의 숫자인 경우 앞에 0이 붙도록 함
}

function init(){
    getTime();
    setInterval(getTime, 1000);//1초마다 getTime함수를 실행하여 시간이 갱신되도록 한다
}

init();
