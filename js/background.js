const images = ["0.jpg", "1.jpg", "2.jpg"];

//랜덤으로 나온 숫자에 배열 길이 값을 곱한 숫자를 내림
const chosenImage = images[Math.floor(Math.random()*images.length)];

//js에서 html element 생성
const bgImage = document.createElement("img");

//bgImage의 소스 설정 = html에서 <img src = "img/0.jpg"/> 하는 걸 js에서 해줌
bgImage.src = `img/${chosenImage}`;

//html에 body 추가

document.body.appendChild(bgImage);