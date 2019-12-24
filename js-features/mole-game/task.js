
let winCount = document.getElementById("dead");
let loseCount = document.getElementById("lost");

function checkMole() {
    
    if (this.className.includes( 'hole_has-mole' )) {
    let a = parseInt(winCount.textContent, 10);
    console.log(1)
    a += 1;
    winCount.textContent = a;
    if (a > 10) {
    alert('Вы победили');
    winCount.textContent = 0;
    loseCount.textContent = 0;
    }
  } else {
    let b = parseInt(loseCount.textContent, 10);
    console.log(2)
    b += 1;
    loseCount.textContent = b;
    if (b > 5) {
    alert('Вы проиграли');
    winCount.textContent = 0;
    loseCount.textContent = 0;
    }
  }

}

function getHole(n) {
   const output = document.getElementById(`hole${n}`);
   return output;
}


for (let i = 1; i < 10; i++) {
  getHole(i).onclick = checkMole;
}
