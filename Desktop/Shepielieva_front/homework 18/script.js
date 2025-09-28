let timeLeft = 90;
const parent = document.querySelector('div.timer');

const myTimeOut = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    parent.textContent = `${formattedMinutes}:${formattedSeconds}`;

    if (timeLeft === 0) {
        clearInterval(myTimeOut);
    }

    timeLeft--;
}, 1000);


document.querySelector('button').addEventListener('click', () => {
    clearInterval(myTimeOut);
})


