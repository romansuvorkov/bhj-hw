let winCount = document.getElementById("dead");
let loseCount = document.getElementById("lost");

function checkMole() {
    
    if (this.className.includes( 'hole_has-mole' )) {
    let a = parseInt(winCount.textContent, 10);
    console.log(1)
    a += 1;
    winCount.textContent = a;
    checkWin(winCount, loseCount)
  } else {
    let b = parseInt(loseCount.textContent, 10);
    console.log(2)
    b += 1;
    loseCount.textContent = b;
    checkWin(winCount, loseCount)
  }
  

}

let check1 = document.getElementById("hole1");
let check2 = document.getElementById("hole2");
let check3 = document.getElementById("hole3");
let check4 = document.getElementById("hole4");
let check5 = document.getElementById("hole5");
let check6 = document.getElementById("hole6");
let check7 = document.getElementById("hole7");
let check8 = document.getElementById("hole8");
let check9 = document.getElementById("hole9");

check1.onclick = checkMole;
check2.onclick = checkMole;
check3.onclick = checkMole;
check4.onclick = checkMole;
check5.onclick = checkMole;
check6.onclick = checkMole;
check7.onclick = checkMole;
check8.onclick = checkMole;
check9.onclick = checkMole;

function checkWin(x, y) {
    let z = parseInt(x.textContent, 10);
    if (z > 10) {
    alert('Вы победили');
    x.textContent = 0;
    y.textContent = 0;
  }
  let f = parseInt(y.textContent, 10)
  if (f > 5) {
    alert('Вы проиграли');
    x.textContent = 0;
    y.textContent = 0;
  }
}

// hole.className.includes( 'hole_has-mole' );
