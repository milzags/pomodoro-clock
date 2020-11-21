let timeRemaining = document.getElementsByClassName('countdown');
let startTime;

let timerId = setInterval(() => {
    startTime -= 1;
    timeRemaining.innerText = startTime;

}, 1000)