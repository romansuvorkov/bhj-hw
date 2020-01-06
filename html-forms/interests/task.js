let parents = document.querySelectorAll('div.interests_main > ul > li.interest > label > input.interest__check');
let childrens = document.querySelectorAll('ul.interests_active > li.interest > label > input.interest__check');

console.log(parents);
console.log(childrens);

function parentClick() {
    if (this.checked == true) {
        let thisChildrens = this.closest('.interest').querySelectorAll('ul.interests_active > li.interest > label > input.interest__check');
        thisChildrens.forEach(element => {
            element.checked = true;
        });
    }
    if (this.checked == false) {
        let thisChildrens = this.closest('.interest').querySelectorAll('ul.interests_active > li.interest > label > input.interest__check');
        thisChildrens.forEach(element => {
            element.checked = false;
        });
    }
}

function childrensClick() {
    let brothers = this.closest('.interests_active').querySelectorAll('ul.interests_active > li.interest > label > input.interest__check');
    let checkedBrothers = 0;
    for (let i = 0; i < brothers.length; i++) {
        if (brothers[i].checked) {
            checkedBrothers += 1;
        }
    }
    let parent = this.closest('ul.interests_active').previousElementSibling;
    if (checkedBrothers === brothers.length) {        
        console.log(1);
        parent.querySelector('input.interest__check').checked = true;
        parent.querySelector('input.interest__check').indeterminate = false;
    } else if (checkedBrothers === 0) {
        console.log(2);
        parent.querySelector('input.interest__check').checked = false;
        parent.querySelector('input.interest__check').indeterminate = false;
    } else if (checkedBrothers !== 0 && checkedBrothers < brothers.length) {
        console.log(3);
        parent.querySelector('input.interest__check').indeterminate = true;
    }

}





parents.forEach(element => {
    element.addEventListener('click', parentClick)
});

childrens.forEach(element => {
    element.addEventListener('click', childrensClick)
});

