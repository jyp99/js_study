const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");//등록된 li를 담을 ul

const TODOS_LS = "toDos";//로컬스토리지에 저장될 todo리스트의 키값 설정

function paintToDo(text){//todo등록 함수 선언
    const li = document.createElement("li");//li를 만드는 변수 선언
    const delBtn = document.createElement("button");//버튼을 만드는 변수 선언
    delBtn.innerText = "❌";//버튼을 만드는 변수의 텍스트로 x 모양 이모지 적용
    const span = document.createElement("span");//span 만드는 변수 선언
    span.innerText = text;//span의 텍스트로 인풋 벨류로 넘어온 값을 넘김
    li.appendChild(span);//li에 span을 넣어줌
    li.appendChild(delBtn);//li에 del버튼을 넣어줌
    toDoList.appendChild(li);//ul에 li를 넣어줌
}

function handleSubmit(event){//submit시 적용될 함수 선언
    event.preventDefault();//기본이벤트 발생 막음
    const currentValue = toDoInput.value;//todo인풋의 벨류를 변수에 할당함
    paintToDo(currentValue);//ToDo 등록 함수를 실행함
    toDoInput.value = "";//todo인풋의 벨류는 초기화 시켜줌
}
function loadToDos(){//저장된 todo리스트를 불러오는 함수 선언
    const toDos = localStorage.getItem(TODOS_LS);//저장된 todo리스트를 변수에 담음
    if(toDos !== null){//저장된 todo리스트가 비어있지 않으면

    }
}
function init(){
    loadToDos();//저장된 todo리스트를 불러오는 함수 실행
    toDoForm.addEventListener("submit", handleSubmit);//todo폼에서 submit이벤트가 발생할때 handleSubmit 함수 연결
}
init();