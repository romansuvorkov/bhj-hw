const loadAnimation = document.getElementById('loader');
const items = document.getElementById('items');

console.log(loadAnimation);

let currencyCourse = new XMLHttpRequest();

currencyCourse.open('GET', 'https://netology-slow-rest.herokuapp.com/');

currencyCourse.send();

currencyCourse.onreadystatechange = function () {
    if(currencyCourse.readyState === 4) {
        let data = JSON.parse(currencyCourse.responseText);
        for (let currency in data.response.Valute) {

            let output = ` <div class="item">
                            <div class="item__code">
                                ${data.response.Valute[currency].CharCode}
                            </div>
                            <div class="item__value">
                            ${data.response.Valute[currency].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                        </div>`
            
            items.insertAdjacentHTML("beforeEnd", output);
        }
    
    loadAnimation.classList.remove('loader_active');
    }
    

}