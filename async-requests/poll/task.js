const title = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let newQuestion = new XMLHttpRequest();

newQuestion.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

newQuestion.send();

newQuestion.onreadystatechange = function () {
    if(newQuestion.readyState === 4) {
        let data = JSON.parse(newQuestion.responseText);
        console.log(data);
        title.innerText = data.data.title;

        for (let answer in data.data.answers) {
            pollAnswers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${data.data.answers[answer]}</button>`);
            let newBtn = pollAnswers.lastElementChild;
            newBtn.addEventListener('click', buttonPress);
        }
    
    }
    
}

function buttonPress()  {
    alert('Спасибо, Ваш голос засчитан!');
}

