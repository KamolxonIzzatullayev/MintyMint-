let minutes = 0;
let result = 0;
let isDisabled = false;
let timer = undefined;


document.getElementById('set-timer').addEventListener('click', function () {
    let minutes = document.getElementById('minutes').value;
    if (minutes) {
        document.getElementById('min').innerText = minutes;
    }
});
