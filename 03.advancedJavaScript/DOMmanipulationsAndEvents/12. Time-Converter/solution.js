function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', () => {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    });

    hoursBtn.addEventListener('click', () => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 60 * 60;
    });

    minutesBtn.addEventListener('click', () => {
        hours.value = minutes.value / 60;
        days.value = minutes.value / 60 / 24;
        seconds.value = minutes.value * 60;
    });

    secondsBtn.addEventListener('click', () => {
        hours.value = seconds.value / 60 / 60;
        minutes.value = seconds.value / 60;
        days.value = seconds.value / 60 / 60 / 24;
    });
}