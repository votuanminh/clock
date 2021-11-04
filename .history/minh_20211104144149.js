function showTime() {
    let date = new Date();
    let hours = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let seconds = date.getSeconds();//0 -59
    console.log(hours, minutes, seconds);
    let time = hours + ":" + minutes + ":" + seconds;

    

    setTimeout(showTime, 1000);
}
showTime();