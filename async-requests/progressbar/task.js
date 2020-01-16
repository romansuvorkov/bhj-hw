const form = document.getElementById('form');
const progress = document.getElementById('progress');
const btnSend = document.getElementById('send');

form.addEventListener('submit', function (e) {
    let formData = new FormData(form);
    let newLoad = new XMLHttpRequest();
    newLoad.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    newLoad.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
      }
    newLoad.send(formData);
    e.preventDefault();
});


