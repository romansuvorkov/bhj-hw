const linkOpenSubMenu = document.querySelectorAll('ul.menu_main > li.menu__item > a.menu__link');
var activeMenu = Array.from(document.querySelectorAll('.menu_active'));



linkOpenSubMenu.forEach( element =>
    element.onclick = () => {
        var x = Array.from(document.querySelectorAll('.menu_active'));
        if (x != 0) {
            var y = activeMenu;
            element.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
            var z = [...y, ...x];
            z[0].classList.remove('menu_active');
            z.splice(0, 1);
            activeMenu = z;
            return false;
        } else {
            element.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
            return false;    
        }

    });



