const title= document.querySelector("#title");//title에 타겟요소 연결

const CLICKED_CLASS = "clicked";//클릭시 추가될 클래스명 정의

function handleClicked(){//클릭함수 정의
    const hasClass = title.classList.contains(CLICKED_CLASS);//classList메서드를 이용하여 title이 가지고 있는 클래스명 목록에 접근하고 contains함수를 이용하여 위에 지정해놓은 클래스명이 존재하는지 확인한다.
    if(hasClass){//클래스명이 존재하면 그 클래스명을 지운다
        title.classList.remove(CLICKED_CLASS);
    }else{//클래스명이 존재하지 않으면 지정해놓은 클래스명 추가한다
        title.classList.add(CLICKED_CLASS);
    }

    //title.classList.toggle(CLICKED_CLASS);//title에 classList메소드의 toggle함수 적용. 인자로 위에 정의 해놓은 클래스명 넘김  위 코드와 정확히 동일한 동작 수행 함
    
}

function init(){//초기화 함수 정의
    title.addEventListener("click", handleClicked);//title에 click 이벤트 발생 시 handleClicked 함수 연결 
}
init();//초기화 함수 실행