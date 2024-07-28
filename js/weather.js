function onGeoOk(position){
    const lat = position.coords.latitude ;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
   
    
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


