const mainModal = document.getElementById('subscribe-modal');
const closeBtn = Array.from(mainModal.getElementsByClassName('modal__close'));
// document.cookie = 'modalClosed=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
console.log(document.cookie);
// document.cookie = 'modalClosed=true';
function findCookie(input) {
    let cookie = "; " + document.cookie;
    let parts = cookie.split("; " + input + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}


let getCookie = findCookie("modalClosed");

if (getCookie == "true") {

} else {
    mainModal.classList.add('modal_active');   
}



closeBtn.forEach( element =>
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active');
        document.cookie = 'modalClosed=true';
});



