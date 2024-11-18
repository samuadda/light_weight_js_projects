let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let start = document.getElementById("start");
let stopp = document.getElementById("stopp");
let reset = document.getElementById("reset");
let timer = null;

const stopWatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
};

const watchStart = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
    
    start.classList.add("active");
    stopp.classList.remove("active");
};

const watchStop = () => {
    clearInterval(timer);

    start.classList.remove("active");
    stopp.classList.add("active");
};

const watchReset = () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";

    start.classList.remove("active");
    stopp.classList.remove("active");
};

start.onclick = watchStart;
stopp.onclick = watchStop;
reset.onclick = watchReset;
