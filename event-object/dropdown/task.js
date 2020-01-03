// const openListButton = Array.from(document.getElementsByClassName('dropdown__value'));
// const dropdownListItems = Array.from(document.getElementsByClassName('dropdown__item'));

// openListButton.forEach( element =>
//     element.onclick = () => {
//         element.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
// });



// dropdownListItems.forEach( element =>
//     element.onclick = () => {
//         element.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
//         element.closest('.dropdown').getElementsByClassName('dropdown__value')[0].textContent = element.textContent;
//         return false;
        
// });



const openListButton = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownListItems = Array.from(document.getElementsByClassName('dropdown__item'));

openListButton.forEach( element =>
    element.addEventListener('click', function() {
        element.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
        return false;
}));

let link = Array.from(document.getElementsByClassName('dropdown__link'));
link.forEach( element =>
    element.addEventListener('click', function(event) {
    event.preventDefault();
}));

dropdownListItems.forEach( element =>
    element.addEventListener('click', function() {
        element.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        element.closest('.dropdown').getElementsByClassName('dropdown__value')[0].textContent = element.textContent;
        return false;
}));

