let now = new Date();
// let now = {hours: 0, minutes: 0, second: 5};
const elementMain = document.getElementById("timer");
// console.log(now);

let nowHours = now.getHours();

let nowMinutes = now.getMinutes();

let nowSeconds = now.getSeconds();

// let nowTime = {hours: nowHours, minutes: nowMinutes, second: nowSeconds};
let nowTime = {hours: 00, minutes: 0, second: 5};

const timeCount = function(arrWithTime, output) {
    if (arrWithTime.second === 0) {
        if (arrWithTime.minutes === 0) {
            if (arrWithTime.hours === 0) {
                alert('Вы победили в конкурсе');
                clearInterval(timerCounter);
                window.location.assign("download.docx");
                return output.textContent = (arrWithTime.hours < 10 ? '0' : '') + arrWithTime.hours + ':' + (arrWithTime.minutes < 10 ? '0' : '') + arrWithTime.minutes + ':' + (arrWithTime.second < 10 ? '0' : '') + arrWithTime.second;
                
            } else {
                arrWithTime.hours = arrWithTime.hours - 1;
                arrWithTime.minutes = 59;
                arrWithTime.second = 59;
                return output.textContent = (arrWithTime.hours < 10 ? '0' : '') + arrWithTime.hours + ':' + (arrWithTime.minutes < 10 ? '0' : '') + arrWithTime.minutes + ':' + (arrWithTime.second < 10 ? '0' : '') + arrWithTime.second;
            }
        } else {
            arrWithTime.minutes = arrWithTime.minutes - 1;
            arrWithTime.second = 59;
            return output.textContent = (arrWithTime.hours < 10 ? '0' : '') + arrWithTime.hours + ':' + (arrWithTime.minutes < 10 ? '0' : '') + arrWithTime.minutes + ':' + (arrWithTime.second < 10 ? '0' : '') + arrWithTime.second;
        } 
    } else {
        arrWithTime.second = arrWithTime.second - 1;
        return output.textContent = (arrWithTime.hours < 10 ? '0' : '') + arrWithTime.hours + ':' + (arrWithTime.minutes < 10 ? '0' : '') + arrWithTime.minutes + ':' + (arrWithTime.second < 10 ? '0' : '') + arrWithTime.second;
    }
}


var timerCounter = setInterval(timeCount, 1000, nowTime, elementMain);


