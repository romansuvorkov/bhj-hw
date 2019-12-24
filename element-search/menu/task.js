const linkOpenSubMenu = document.querySelectorAll('ul.menu_main > li.menu__item > a.menu__link');

console.log(linkOpenSubMenu);

linkOpenSubMenu.forEach( element =>
    element.onclick = () => {

        element.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
        return false;

    });



