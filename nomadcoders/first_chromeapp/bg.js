const body = document.querySelector("body");

const IMG_NUMBER = 7;//배경 이미지 갯수를 지정하는 변수 선언
function paintImage(imgNumber){//배경이미지를 그려주는 함수 선언
    const image = new Image();//image변수에 새로운 이미지 객체를 생성해줌
    image.src = `images/${imgNumber + 1}.jpg`;//이미지 객체의 src 속성에 적용될 이미지 경로 설정
    image.classList.add("bgImage");//이미지 객체의 클래스명으로 bgImage 적용
    body.prepend(image);//body 안의 앞쪽에 이미지 객체를 삽입시킴

};
function genRandom(){//랜덤의 수를 가져오는 함수 선언
    const number = Math.floor(Math.random() * IMG_NUMBER);//0부터 배경이미지 갯수까지의 랜덤한 숫자를 생성하여 number변수에 넘겨줌
    return number;//숫자를 반환
}

function init(){
    const randomNumber = genRandom();//랜덤의 수를 가져오는 함수를 실행해서 변수에 전달
    paintImage(randomNumber);//랜덤한 수를 넘겨서 배경이미지를 그려주는 함수 실행
}

init();