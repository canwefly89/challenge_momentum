const form = document.querySelector(".js-form"),    //class로 찾을 시, 하나라도 array에 넣음 => classname[]로 찾아야함
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing";

//3. 제출 버튼 동작 구현
function handleSubmit(event) {
    event.preventDefault(); // form에서 submit 동작시 어딘가로 보내는 디폴트 동작 없애기
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//5. 사용자가 입력한 이름을 로컬 스토리지에 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

//4. 제출 버튼 클릭 시, handleSubmit 함수 호출
function askForName() {
    form.classList.add(SHOWING_CN);     //CN = class name
    form.addEventListener("submit", handleSubmit)
}

//2. 이름이 있을 때, 폼을 지우고 인사말을 띄움
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

//1. 사용자 이름을 받는 함수 (이름이 있는 지 없는 지 판단)
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);  //lS = local storage
    if (currentUser === null) {
        askForName();
        // he is not
    } else {
        // he is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
