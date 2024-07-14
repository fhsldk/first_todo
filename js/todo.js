const toDoForm=document.getElementById("todo-form");

//document.querySelector("#todo-form input"과 동일)
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos=[];

function saveToDos(){
    //js의 object나 array등을 string으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    //click event의 타겟인 버튼의 부모 = li
    //삭제하고 싶은 li 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(event){
    const li = document.createElement("li");
    li.id = event.id;
    const span = document.createElement("span");
    span.innerText = event.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    //span을 li 내부로 넣기
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//방금 발생한 event를 함수의 첫번째 인자로 줌
function handleToDoSubmit(event){
    //submit 기본동작인 새로고침 방지
    event.preventDefault();
//input value 비우기 전에 값 저장(input의 value를 새로운 변수에 복사하는 것)    
    const newTodo=toDoInput.value;
//input value 비우기(newTodo가 비워지는 건 아님)    
    toDoInput.value="";
//array에 단순 텍스트가 아닌 obj넣어서 아이디 주기    
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos =localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    //string을 다시 js에서 사용가능한 object로 만들기
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //for each로 배열 안에 있는 각각의 item에 대해 함수 실행
    parsedToDos.forEach(paintToDo);
}



