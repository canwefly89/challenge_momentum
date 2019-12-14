const toDoForm = document.querySelector(".js-toDoForm"), 
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });      //filte는 arrary의 모든 요소를 통해 함수를 실행하고, true인 item만으로 새로운 array를 만듦
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //브라우저의 local storage는 string형태로만 저장하기 떄문에 타입을 변경해줌
}

function paintToDo(text){
    const li = document.createElement("li"); //html에 element를 생성
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;     //delete를 위해 각 todo에 id값 부여
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText =  text;
    li.appendChild(delBtn);
    li.appendChild(span);   //li라는 부모 속성 안에 span 넣기
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);    //string으로 바꾼 ToDoList를 다시 객체로 변환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })       //forEach는 array에 담겨있는 것들 각각에 한번씩 함수를 실형시켜줌
                //parsedToDo의 각 요소들에게 paintToDo 함수를 적용함
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();