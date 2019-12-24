
const mainModal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const closeBtn = Array.from(document.getElementsByClassName('modal__close'));
console.log(closeBtn);
const show_success = Array.from(document.getElementsByClassName('show-success'));

mainModal.classList.add('modal_active');

closeBtn.forEach( element =>
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active');
    });

show_success.forEach( element =>
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });


    

































