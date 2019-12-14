const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector("js-greeting");

const USER_LS = "currentUser";
const SHOWINT_CN = "showing";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }

}

function init() {
    
}

init();