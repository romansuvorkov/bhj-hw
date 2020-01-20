let textArea = document.getElementById('editor');
if (localStorage.text == undefined) {
    
} else {
    textArea.value = localStorage.text;
}

textArea.addEventListener('keyup', function () {
    localStorage.text = textArea.value;
})

