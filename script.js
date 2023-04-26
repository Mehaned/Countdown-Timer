const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let countDownDate = new Date('Feb 07, 2024 23:59:59');

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    dataDays.innerHTML = days;

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    dataHours.innerHTML = hours;

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    dataMinutes.innerHTML = minutes;

    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
    dataSeconds.innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
        // document.querySelector('.container').innerHTML = 'Die Zeit ist Vorbei';
    }

}, 1000)