const inputField = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const buttonAdd = document.getElementById('tasks__add');

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && inputField.value.length > 0) {
        taskList.insertAdjacentHTML('beforeEnd',`
        <div class="task">
          <div class="task__title">
            ${inputField.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        inputField.value = '';
        let newElement = taskList.lastElementChild;
        let newDeleteBtn = Array.from(newElement.getElementsByClassName('task__remove'));
        newDeleteBtn[0].addEventListener('click', remove);
        event.preventDefault();
    }
});

buttonAdd.addEventListener('click', function (event) {
    if (inputField.value.length > 0) {
        taskList.insertAdjacentHTML('beforeEnd',`
        <div class="task">
          <div class="task__title">
            ${inputField.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        inputField.value = '';
        let newElement = taskList.lastElementChild;
        let newDeleteBtn = Array.from(newElement.getElementsByClassName('task__remove'));
        newDeleteBtn[0].addEventListener('click', remove);
        event.preventDefault();
    } else {
        event.preventDefault();
    }
});

function remove() {
    let targetDiv = this.closest('.task');
    targetDiv.remove();
    return false;
}