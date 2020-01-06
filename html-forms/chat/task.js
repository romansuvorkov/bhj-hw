const openChat = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
let inputText = document.getElementById('chat-widget__input');
let robotAnswerBase = [ 'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
                        'Пока',
                        'Нам не интересно',
                        'Не пишите нам больше',
                        'Добрый день! До свидания'
]
let robotQuestionBase = [   'Ну и?',
                            'Все опоздал. Вопросы больше не принимаем'
];
let timerForQuestion;
let check;

function checkTime(taskTimeMillisecond) {
    let time = new Date();
    console.log(time);
    console.log(timerForQuestion);
    if ((time.getTime() - timerForQuestion.getTime()) >= taskTimeMillisecond) {
        robotAnswer(robotQuestionBase);
        clearInterval(check);
    }
}

inputText.addEventListener('focus', function () {
    timerForQuestion = new Date();
    check = setInterval(checkTime, 1000, 30000);
});

openChat.addEventListener('click', function () {
    chatWidget.classList.add('chat-widget_active');
    timerForQuestion = new Date();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function robotAnswer(arr) {
    let time = new Date();
    let nowHour = time.getHours();
    if (nowHour < 10) {
        nowHour = '0' + nowHour;
    }
    let nowMinute = time.getMinutes();
    if (nowMinute.length < 10) {
        nowMinute = '0' + nowMinute;
    }
    
    let answerNumb = getRandomInt(arr.length);
    let answer = arr[answerNumb];
    
    messages.innerHTML +=
            `
            <div class="message">
                <div class="message__time">${nowHour}:${nowMinute}</div>
                <div class="message__text">
                    ${answer}
                </div>
            </div>
            `;
    messages.scrollIntoView(false);

}


inputText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && inputText.value.length > 0) {
        let time = new Date();
        let nowHour = time.getHours();
        if (nowHour < 10) {
            nowHour = '0' + nowHour;
        }
        let nowMinute = time.getMinutes();
        if (nowMinute.length < 10) {
            nowMinute = '0' + nowMinute;
        }
        messages.innerHTML +=
            `
            <div class="message message_client">
                <div class="message__time">${nowHour}:${nowMinute}</div>
                <div class="message__text">
                    ${inputText.value}
                </div>
            </div>
            `;
        inputText.value = '';
        messages.scrollIntoView(false);
    
        setTimeout(robotAnswer, 500, robotAnswerBase);    
    }

});

















