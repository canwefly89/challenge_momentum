const body = document.querySelector("body");

const IMG_NUMBER = 4;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    body.appendChild(image);        //prependChild와의 차이
    image.classList.add("bgImage");     //왜 classname이 아니고 classlist인가?
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;      //Math.floor() : 내림, Math.ceil() : 올림
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
