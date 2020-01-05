const fontSizes = Array.from(document.getElementsByClassName('font-size'));
let activeFont = Array.from(document.getElementsByClassName('font-size_active'));
let bookText = document.querySelector('.book__content');

fontSizes.forEach (e =>
    e.addEventListener('click', function () {
        let nowActiveFont = activeFont;
        if (bookText.classList.contains(`book_fs-${nowActiveFont[0].getAttribute("data-size")}`)) {
            bookText.classList.remove(`book_fs-${nowActiveFont[0].getAttribute("data-size")}`);
        }
        e.classList.add('font-size_active');
        let newActiveFont = e;
        let outputFont = [...nowActiveFont, newActiveFont];
        outputFont[0].classList.remove('font-size_active');
        outputFont.splice(0, 1);
        activeFont = outputFont;
        if (activeFont[0].getAttribute("data-size")) {
        bookText.classList.add(`book_fs-${activeFont[0].getAttribute("data-size")}`);    
        }
    })
)

fontSizes.forEach (e =>
    e.addEventListener('click', function (event) {
        event.preventDefault();
    })
)

