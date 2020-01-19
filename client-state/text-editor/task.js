let textArea = document.getElementById('editor');
if (localStorage.text == '') {
    console.log('1');
} else {
    textArea.value = localStorage.text;
}

localStorage.setItem('text', '');
console.log(textArea);
console.log(localStorage);

textArea.addEventListener('keyup', function () {
    localStorage.text = textArea.value;
})

// localStorage.setItem('text', textArea);