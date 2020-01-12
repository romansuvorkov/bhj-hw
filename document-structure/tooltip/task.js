const links = Array.from(document.getElementsByClassName('has-tooltip'));
let tooltipBlock = Array.from(document.getElementsByClassName('tooltip'));
console.log(links);

links.forEach (e =>
    e.addEventListener('click', function (event) {
        event.preventDefault();
    })
)


links.forEach (e =>
    e.addEventListener('focus', function () {
        
        tooltipBlock[0].innerText = `${this.title}`;
        let coordinates = this.getBoundingClientRect();
        console.log(coordinates.height);
        tooltipBlock[0].style = `left: ${coordinates.x}px; top: ${coordinates.y + coordinates.height}px`;
        console.log(coordinates.x);
        tooltipBlock[0].classList.add('tooltip_active');
    })
)

links.forEach (e =>
    e.addEventListener('blur', function () {
        let tooltipBlock = Array.from(document.getElementsByClassName('tooltip'));
        tooltipBlock.forEach(e => {
            e.classList.remove('tooltip_active');
        })
    })
);
