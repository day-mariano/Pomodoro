//Dados
var timerElement = window.document.getElementById('timer');

var buttonPomodoro = window.document.getElementById('pomodoro');
buttonPomodoro.addEventListener('click', startPomodoro);

var buttonShortBreak = window.document.getElementById('shortBreak');
buttonShortBreak.addEventListener('click', startShortBreak);

var buttonLongBreak = window.document.getElementById('longBreak');
buttonLongBreak.addEventListener('click', startLongBreak);

var chosenTime = 0;
var time = 0;
var minute = 0;
var second = 0;
var interval = 0;

//on click dos botões: 25, 5 ou 10 min
function startPomodoro() {
    stopClock();
    chosenTime = 25;
    time = chosenTime * 60;
    /*minute = Math.floor(time / 60);
    second = time % 60;*/

    runTime();
    startClock();
}
function startShortBreak() {
    stopClock();
    //clearInterval(setInterval)

    chosenTime = 5;
    time = chosenTime * 60;
    /*minute = Math.floor(time / 60);
    second = time % 60;*/

    runTime();
    startClock();
}
function startLongBreak() {
    stopClock();
    chosenTime = 10;
    time = chosenTime * 60;
    /*minute = Math.floor(time / 60);
    second = time % 60;*/

    runTime();
    startClock();
}
//Rodar tempo
function runTime() {
    time = time - 1;

    timerElement.innerHTML = `${addZero(Math.floor(time / 60))} : ${addZero(time % 60)}`;
    console.log(time)
}
function addZero(n) {
    return n < 10 ? `0${n}` : n;
}

//atualizar a cada segundo
function startClock() {
    interval = setInterval(runTime, 1000);
}

function stopClock() {
    clearInterval(interval);
}
