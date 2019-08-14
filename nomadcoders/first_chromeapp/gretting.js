const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");//인삿말 노출 영역
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    greeting.classList.add(SHOWING_CN);//인삿말에 showing 클래스 적용
    greeting.innerText = `Hello ${text}`//인삿말의 텍스트로 Hello 입력값이 노출되게 함
}
function loadName(){//이름불러오기 함수 선언
    const currentUser = localStorage.getItem(USER_LS);//로컬스토리지에 저장되어있는 항목중 currentUser의 값을 불러옴
    if(currentUser === null){//currentUser이 비어있으면

    }else{//비어있지않으면
        paintGreeting(currentUser);//currentUser이를 넘기고 paintGreeting 호출
    }
}
function init(){
    loadName();//이름불러오기 함수실행
}

init();