const weather = document.querySelector(".js-weather");//날씨 정보를 전달할 영역
const API_KEY = "e48c13751700fa6ba3f285c889459c35";//https://openweathermap.org/ api key
const COORDS = 'coords';//위치 정보가 로컬스토리지에 저장될 키의 값 설정

function getWeather(lat, lng){//날씨 가져오기 함수 선언
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`//받아올 api
    ).then(function(response){//데이터가 완전히 넘어온 다음에 실행할것을 then 구문에 넣어준다
        return response.json();//json데이터를 받아와라
    }).then(function(json){//json데이터가 준비되면 실행할 구문을 넣어준다
        const temperature = json.main.temp;//받아온 json데이터에서 온도 정보를 가져와서 변수에 담아준다
        const place = json.name;//받아온 장소 정보를 가져와서 변수에 담아준다
        weather.innerText = `${temperature} @ ${place}`//날씨정보를 전달할 영역의 텍스트로 정보를 넣는다
    })
}

function saveCoords(coordsObj){//위치정보를 저장하는 함수 선언
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));//json 형식으로 로컬스토리지에 위치정보를 저장
}

function handleGeoSucces(position){//위치정보 얻기 동의 되었을 때 실행되는 함수 선언
    const latitude = position.coords.latitude;//위도를 얻어 변수에 할당
    const longitude = position.coords.longitude;//경도를 얻어 변수에 할당
    const coordsObj = {//위도와 경도를 객체로 할당할 변수 선언
        latitude,//latitude : latitude 와 같은 역할을 함. 키와 동일한 값을 부여할 때 이렇게 축약해서 쓸 수 있음.
        longitude
    }
    saveCoords(coordsObj);//위치정보를 저장하는 함수 실행
    getWeather(latitude, longitude);//위치정보를 넘기며 날씨 가져오기 함수를 실행한다
}
function handleGeoError(){//위치정보 얻기 거부 되었을 때 실행되는 함수 선언
    console.log("Cant access geo location");//에러메세지 노출
}

function askForCoords(){//위치제공 동의를 묻는 함수 선언
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);//이미 만들어져있는 getCurrentPosition() 메서드를 호출해 사용자의 현재 위치를 얻는다. 위치가 확인되면 첫번째 인자로 들어간 함수가 실행되고, 거부 당하면 두번째 인자로 들어간 함수가 실행된다. 
}
function loadCoords(){//위치정보를 불러오는 함수 선언
    const loadedCoords = localStorage.getItem(COORDS);//로컬스토리지에 저장해놓은 위치정보를 가져와서 변수에 선언
    if(loadedCoords === null){//저장된 위치정보가 없으면
        askForCoords();//위치제공 동의를 묻는 함수 실행
    }else{//저장된 위치정보가 있으면
        const parsedCoords = JSON.parse(loadedCoords);//로컬스토리지의 위치정보를 json으로 잘 변환하고
        getWeather(parsedCoords.latitude, parsedCoords.longitude);//날씨 가져오기 함수를 실행한다
    }
}

function init(){
    loadCoords();//위치정보를 불러오는 함수 실행
}

init();