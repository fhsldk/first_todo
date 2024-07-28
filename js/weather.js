function onGeoOk(position){
    const lat = position.coords.latitude ;
    const lng = position.coords.longitude;
    //lat, lng를 장소로 바꿔줄 서비스 이용 api
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.404672&lon=126.9661696&appid=49b7c418a6d2c4a968ae1efc4756a3dd&units=metric';
    //실제 url에 갈 필요 없이 js가 대신 url 호출
    //fetch는 promise 당장 뭐가 일어나지 않고 시간이 좀 걸린 뒤 발생함
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//js가 obj 줌
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


