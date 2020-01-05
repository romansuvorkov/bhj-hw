const revealBlocks = Array.from(document.getElementsByClassName('reveal'));
console.log(revealBlocks);

function checkPlaceOnScreen() {
    let elementBottom = this.getBoundingClientRect().bottom;
    console.log(elementBottom);
    let viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    if (elementBottom < window.innerHeight) {
        this.classList.add('reveal_active');
    }
}

document.addEventListener('scroll', function () {
    revealBlocks.forEach(e => {
        let elementBottom = e.getBoundingClientRect().bottom;
        console.log(elementBottom);
        let viewportHeight = window.innerHeight;
        console.log(viewportHeight);
        if (elementBottom < window.innerHeight) {
            e.classList.add('reveal_active');
        }
    });   
});
