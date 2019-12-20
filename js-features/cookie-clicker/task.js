const image = document.getElementById("cookie");

const count = document.getElementById("clicker__counter");

const speed = document.getElementById("clicker__speed");

var lastClick = 0;



function game() {
    let x = parseInt(count.textContent, 10);
    if ( ( x % 2 ) > 0 ) {
        image.width = 250;
    } else {
        image.width = 200;
    }
    x += 1;
    count.textContent = x;
    clickSpeed();
}

function clickSpeed() {
    let nowClick = Date.now();
    let secBetweenClick = (nowClick - lastClick) / 1000;
    let round = 1 / secBetweenClick;
    round = round.toFixed(2);
    speed.textContent = round;
    console.log(speed.textContent)
    lastClick = nowClick;
}


image.onclick = game;


