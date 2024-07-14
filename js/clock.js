
const clock = document.querySelector("#clock")

function getClock(){
    //코드를 실행한 시점의 날짜 및 시간 가져오기
    const date = new Date();
    // string이 두글자가 되길 원하고 앞쪽에 추가
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//시계 바로 호출
getClock(); 
//지정 간격ms마다 실시간 호출하기
setInterval(getClock,1000);

//지정 간격ms 후 딱 한 번 호출
// setTimeout(함수, 5000);




