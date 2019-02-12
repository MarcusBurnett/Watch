function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = document.getElementById('time');
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

startTime();

function runClock(){
    var hourHand = document.getElementById("hours");
    var minuteHand = document.getElementById("minutes");
    var secondHand = document.getElementById("seconds");
    var today = new Date();
    var hour = today.getHours() % 12;
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    var hourRotation = (30 * hour) + minute * 0.5;
    var minuteRotation = 6 * minute;
    var secondRotation = 6 * second;

    if (secondRotation == 0) {
        secondHand.style.transition = 'none';
        secondHand.style.transform = "rotate(0deg)";
    } else {
        secondHand.style.transform = "rotate(" + secondRotation + "deg)";
        secondHand.style.transition = "transform 0.25s cubic-bezier(.4,2.08,.55,.44)";
    }   

    if (minuteRotation == 0) {
        minuteHand.style.transition = 'none';
        minuteHand.style.transform = "rotate(0deg)";
    } else {
        minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
        minuteHand.style.transition = "transform 0.3s cubic-bezier(.4,2.08,.55,.44)";
    }
    
    hourHand.style.transform = "rotate(" + hourRotation + "deg)";

    requestAnimationFrame(runClock);
}

runClock();