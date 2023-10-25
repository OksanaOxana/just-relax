const timer = 1;
let amountTime = 60*timer;
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})

function calculateTime() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds<10) {
        seconds = "0" + seconds
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    if(amountTime<0) {
        stopTime();
        amountTime = 0;
    }
    function stopTime() {
        clearInterval(timeId)
    }
    console.log(countdown)
}
let timeId = setInterval(calculateTime, 1000)