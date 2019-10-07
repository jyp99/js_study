const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");//캔버스의 가질 컨텍스트를 지정한다?
const colors = document.getElementsByClassName("jsColor");//컬러버튼
const range = document.getElementById("jsRange");//브러쉬 사이즈 조정을 위한 게이지바
const mode = document.getElementById("jsMode");//칠하기/채우기 전환모드 버튼
const saveBtn = document.getElementById("jsSave");//저장 버튼
const INITIAL_COLOR = "#2c2c2c";//브러쉬 초기 컬러값 세팅
const CANVAS_SIZE = 700;//캔버스 사이즈값

canvas.width = CANVAS_SIZE;//캔버스 사이즈 값을 캔버스 가로 사이즈에 대입
canvas.height = CANVAS_SIZE;//캔버스 사이즈 값을 캔버스 세로 사이즈에 대입
ctx.fillStyle = "white";//캔버스 바탕색 초기값 지정
ctx.strokeStyle = "#2c2c2c";//선의 초기 컬러값 설정
ctx.lineWidth = 2.5;//선의 초기값 설정

let painting = false;//페인팅의 초기 기본 값을 false로 설정
let filling = false;//칠하기 초기 기본 값을 false로 설정

function stopPainting(){//페인팅을 멈추는 함수 생성
    painting = false
}

function startPainting(){//페인팅을 시작하는 함수 생성
    painting = true;
}

function onMouseMove(event){//마우스가 움직일때 동작하는 함수 생성
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){//페인팅이 펄스인 경우 
        ctx.beginPath();//패스를 시작
        ctx.moveTo(x, y);//좌표위치에서
    }else{//페인팅이 트루인 경우
        ctx.lineTo(x, y);//선이 연결되는느낌인가
        ctx.stroke();//그려진다
    }

}

function handleChangeColor(event){//컬러를 바꾸는 함수 선언
    const color = event.target.style.backgroundColor;//color 변수에 선택된 버튼의 백그라운드 컬러를 넣어줌
    ctx.strokeStyle = color;//얻어온 컬러를 칠하기색에 적용
    ctx.fillStyle = color;//얻어온 컬러를 채우기색에도 적용

}

function handleRangeChange(event){//브러쉬 사이즈를 바꾸는 함수 선언
    const size = event.target.value;//range의 현재값을 받아온다
    ctx.lineWidth = size;//캔버스 라인의 두깨에 range 현재값을 대입한다

}

function handleModeClick(event){//모드 버튼 클릭했을때 실행될 함수 선언
    if(filling === true){//칠하기가 트루면
        filling = false;//칠하기를 끄고
        mode.innerText = "Fill";//칠하기로 버튼텍스트 변경
        
    }else{//아니면
        filling = true;//칠하기를 트루로 주고
        mode.innerText = "Paint";//채우기로 버튼텍스트 변경

    }
}

function handleCavasClick(){//캔버스를 클릭했을때 실행될 함수 선언
    if(filling){//칠하기 모드이면
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)//캔버스를 칠한다. 좌표 전체 지정
    }
}
function handleCM(event){//우측마우스 클릭했을때 실행될 함수 선언
    event.preventDefault();//기본이벤트 실행안함
}
function handleSaveClick(){//저장버튼 클릭했을때 실행될 함수 선언
    const image = canvas.toDataURL();//이미지 경로를 받아옴
    const link = document.createElement("a");//a 링크를 생성함
    link.href = image;//a링크의 경로에 이미지 이름을 대입
    link.download = "PaintJS[EXPORT]";//저장될 이미지 이름 지정
    link.click();//a 링크 클릭함수 실행

}

if(canvas){//캔버스가 존재하는지 확인
    canvas.addEventListener("mousemove" , onMouseMove);//캔버스에 이벤트 연결. 마우스가 움직이면 onMouseMove 함수가 실행
    canvas.addEventListener("mousedown", startPainting);//마우스가 클릭되면 페인팅을 시작한다
    canvas.addEventListener("mouseup", stopPainting);//마우스 클릭이 떼어지면 페인팅을 멈춘다
    canvas.addEventListener("mouseleave", stopPainting);//마우스가 캔버스를 머무는 동안 페인팅을 멈춘다
    canvas.addEventListener("click", handleCavasClick);//캔버스 클릭되었을때 실행되는 함수 연결
    canvas.addEventListener("contextmenu", handleCM);//컨텍스트 메뉴 호출했을때 실행되는 함수 연결
}


Array.from(colors).forEach(color => //컬러버튼 배열에 클릭을 했을때 실행되는 컬러함수를 반복적용
    color.addEventListener("click" ,handleChangeColor)
);


//각 인풋에 함수 연결
if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}