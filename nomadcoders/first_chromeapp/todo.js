const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");//등록된 li를 담을 ul

const TODOS_LS = "toDos";//로컬스토리지에 저장될 todo리스트의 키값 설정
const toDos = [];//todo 리스트 배열을 저장할 변수 선언

function saveToDos(){//로컬스토리지에 투두리스트를 저장시키는 함수 선언
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//로컬스토리지 toDos키에 todo리스트의 json 키, 밸류값을 담은 배열로 저장시킴
}
function paintToDo(text){//todo등록 함수 선언
    const li = document.createElement("li");//li를 만드는 변수 선언
    const delBtn = document.createElement("button");//버튼을 만드는 변수 선언
    const span = document.createElement("span");//span 만드는 변수 선언
    const newId = toDos.length + 1;//li에 부여될 id 값= todo리스트 배열의 현재 길이에 1을 추가한 값으로 다음 생성 시킬 리스트의 id를 부여함
    delBtn.innerText = "❌";//버튼을 만드는 변수의 텍스트로 x 모양 이모지 적용
    span.innerText = text;//span의 텍스트로 인풋 벨류로 넘어온 값을 넘김
    li.appendChild(span);//li에 span을 넣어줌
    li.appendChild(delBtn);//li에 del버튼을 넣어줌
    li.id = newId;//li의 id에 id값을 넣어줌
    toDoList.appendChild(li);//ul에 li를 넣어줌
    const toDoObj = {//todo리스트 오브젝트 선언
        text : text,//text키에는 todo 텍스트 인풋 입력받은 벨류가 들어갈 것
        id : newId//id 키에는 위에 설정해준 id값을 적용해줌  
    };
    toDos.push(toDoObj);//todo리스트 배열에 todo리스트 오브젝트를 넣어줌
    saveToDos();//로컬스토리지에 투두리스트를 저장시키는 함수 실행
}

function handleSubmit(event){//submit시 적용될 함수 선언
    event.preventDefault();//기본이벤트 발생 막음
    const currentValue = toDoInput.value;//todo인풋의 벨류를 변수에 할당함
    paintToDo(currentValue);//ToDo 등록 함수를 실행함
    toDoInput.value = "";//todo인풋의 벨류는 초기화 시켜줌
}
function loadToDos(){//스토리지에 저장된 todo리스트를 불러오는 함수 선언
    const loadedToDos = localStorage.getItem(TODOS_LS);//저장된 todo리스트를 변수에 담음
    if(loadedToDos !== null){//저장된 todo리스트가 비어있지 않으면
        const parsedToDos = JSON.parse(loadedToDos);//스토리지에 저장된 todo리스트를 json 문법으로 파싱하여 변수에 할당
        parsedToDos.forEach(function(toDo){//todo리스트에 대해 반복하여 실행시켜줌
            paintToDo(toDo.text);//todo등록함수 실행
        });
    }
}
function init(){
    loadToDos();//저장된 todo리스트를 불러오는 함수 실행
    toDoForm.addEventListener("submit", handleSubmit);//todo폼에서 submit이벤트가 발생할때 handleSubmit 함수 연결
}
init();