function showTime() {
    let date = new Date();
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let seconds = date.getSeconds();//0 -59
    let dayNight = "AM";

    console.log(hours, minutes, seconds);
    if(hours >12){
        hours = hours -12;
        dayNight = "PM";
    }
    if(hours == 0){
        hours = 12;
        dayNight = "AM";
    }
    let time = (hours<10 ? "0"+hours : hours )  + ":" + (minutes<10 ? "0"+minutes : minutes ) + ":" + (seconds<10 ? "0"+seconds : seconds ) + dayNight;

    let timeClock = document.querySelector("#MyClockDisplay");

    timeClock.innerHTML =time;
    // timeClock.innerText = time;
    // timeClock.textContent = time;
    setTimeout(showTime, 1000);
}
showTime();