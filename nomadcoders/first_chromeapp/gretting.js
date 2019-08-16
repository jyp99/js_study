const form = document.querySelector(".js-form");//이름 입력을 받는 텍스트 인풋을 감싼 폼 영역
const input = form.querySelector("input");//이름 입력을 받는 텍스트 인풋
const greeting = document.querySelector(".js-greetings");//인삿말 노출 영역
const USER_LS = "currentUser";//로컬스토리지의 key값으로 들어갈 문구
const SHOWING_CN = "showing";//폼이나 인삿말이 노출될 때 적용될 클래스명

function saveName(text){//이름 저장 함수 선언
    localStorage.setItem(USER_LS, text);//로컬스토리지의 키와 벨류값으로 입력받은 정보를 넘김
}
function handleSubmit(event){//폼이 전달될때 발생하는 이벤트 선언
    event.preventDefault();//기본으로 발생하는 이벤트 발생을 막음
    const currentValue = input.value;//인풋의 벨류를 변수에 할당해줌
    paintGreeting(currentValue);//인삿말 노출 함수에 인풋 벨류를 전달하여 실행시킴
    saveName(currentValue);//이름 저장 함수에도 인풋 벨류를 전달하여 실행시킴
}
function askForName(){//이름을 물어보는 함수 선언
    form.classList.add(SHOWING_CN);//폼에 showing 클래스 적용하여 폼을 노출시킴
    form.addEventListener("submit", handleSubmit);//폼이 전달될때 handleSubmit 함수 연결
}
function paintGreeting(text){//인삿말 노출 함수 선언
    form.classList.remove(SHOWING_CN);//폼은 숨겨지도록 showing 클래스 제거
    greeting.classList.add(SHOWING_CN);//인삿말에 showing 클래스 적용
    greeting.innerText = `Hello ${text}`//인삿말의 텍스트로 "Hello + '입력값'"이 노출되게 함
}
function loadName(){//이름 불러오기 함수 선언
    const currentUser = localStorage.getItem(USER_LS);//로컬스토리지에 저장되어있는 항목중 불러올 값 지정
    if(currentUser === null){//불러오려 하는 값이 비어있으면
        askForName();//이름을 물어보는 함수 실행
    }else{//비어있지않으면
        paintGreeting(currentUser);//저장된 값을 넘겨서 인삿말 노출 함수 실행
    }
}
function init(){
    loadName();//이름 불러오기 함수실행
}

init();