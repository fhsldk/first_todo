const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input[type='text']");
const greeting=document.querySelector("#greeting");

//반복되는 string들은 대문자 변수로 저장하는 게 좋음
const HIDDEN_CLASSNAME ="hidden";
//"username" 오타방지를 위해 변수로 고정, 변수명이 틀린 건 js가 지적해줌
const USERNAME_KEY="username";


//2.
function onLoginSubmit(event){
    //브라우저의 기본 동작(페이지 새로고침) 막기
    event.preventDefault();
    //유저가 submit하면 loginForm 다시 숨김
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //input으로 받는 유저정보를 변수로 저장
    const username = loginInput.value;
    //KEY 값과 함께 유저정보(value)를 local strage에 저장
    localStorage.setItem(USERNAME_KEY, username);
    //input에서 받은 유저정보를 인자로 가진 함수 호출
    paintGreetings(username);
}

//greeting.innerText=`hello ${username}`;
//greeting.classList.remove(HIDDEN_CLASSNAME); 중복되니까 username을 인자로 받는 함수 만들기
function paintGreetings(username){
    //greeting에 텍스트 `hello $(username) 추가
    greeting.innerText=`Hello ${username}!`;
    //greeting에 다시 보이게 하기
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//1. local storage에서 username 불러오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

//local storage에 정보가 없으면 처음부터 폼 보여주고 입력받으면 됨
//하지만 local storage에 정보가 있으면 폼 보여주지말고 그 정보 그냥 보여줌

if(savedUsername===null){
   //loginForm으로부터 HIDDEN_CLASSNAME 제거
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   //loginForm에 addEventListner 더하고 submit 기다리기, submit 발생하면 onLoginSubmit 함수 실행
   loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //local storage에서 받은 유저정보를 인자로 가진 함수 호출
    paintGreetings(savedUsername);
    
}