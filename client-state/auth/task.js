let formBlock = document.getElementById('signin');
let sighInBtn = document.getElementById('signin__btn');
let form = document.getElementById('signin__form');
let welcomeBlock = document.getElementById('welcome');
let userID = document.getElementById('user_id');
// localStorage.clear();
if (localStorage.user_id) {
    userID.innerText = localStorage.user_id;
    welcomeBlock.classList.add('welcome_active');
} else {
    formBlock.classList.add('signin_active');
}

sighInBtn.addEventListener('click', function (e) {
    let formData = new FormData(form);
    let checkUser = new XMLHttpRequest();
    checkUser.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    checkUser.send(formData);

    checkUser.onreadystatechange = function () {
        if(checkUser.readyState === 4) {

            let data = JSON.parse(checkUser.responseText);
            if (data.success === true) {
                formBlock.classList.remove('signin_active');
                welcomeBlock.classList.add('welcome_active');
                userID.innerText = data.user_id;
                localStorage.setItem('user_id', data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
            
        }
            
    }
    e.preventDefault();
});














