function showTime() {
    let date = new Date();
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let seconds = date.getSeconds();//0 -59

    let time = '${hours}:${minutes}:${seconds}';

    let timeClock = document.querySelector(".clock");
    timeClock.innerHTML	= time;
    setTimeout(showTime, 1000);
}
showTime();