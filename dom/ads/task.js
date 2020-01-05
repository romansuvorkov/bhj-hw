const rotatorCaseItems = Array.from(document.getElementsByClassName('rotator__case'));

function changeColor(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.color = arr[i].getAttribute("data-color");
    } 
}

function changeItem(arr, name) {
    let numb;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].className.includes(name)) {
        numb = i;
        }
    }
    
    arr[numb].classList.remove(name);
    if (numb === (arr.length - 1)) {
        numb = 0;
    } else {
        numb = numb + 1;
    }
    arr[numb].classList.add(name);
    
}

changeColor(rotatorCaseItems);

setInterval(changeItem, 1000, rotatorCaseItems, 'rotator__case_active');