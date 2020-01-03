const tabs = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));
let activeTab = Array.from(document.getElementsByClassName('tab_active'));
let activeTabContent = Array.from(document.getElementsByClassName('tab__content_active'));

let nowActiveTabNumb;

function nowActiveTab(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].className.includes('tab_active')) {
            nowActiveTabNumb = i;
        }
    }
}
nowActiveTab(tabs);
console.log(nowActiveTabNumb);


function openTab() {
    let activeTabs = Array.from(document.getElementsByClassName('tab_active'));
    if (this.className.includes('tab_active')) {

    } else {
        if (activeTabs.length > 0) {
        let previousActiveTab = activeTab;
        this.classList.add('tab_active');
        let newArrWithTabs = [...activeTabs, ...previousActiveTab];
        newArrWithTabs[0].classList.remove('tab_active');
        newArrWithTabs.splice(0, 1);
        activeTab = newArrWithTabs;
        nowActiveTab(tabs);
        tabContent[nowActiveTabNumb].classList.add('tab__content_active');
        let newArrTabContentActive = [...activeTabContent, tabContent[nowActiveTabNumb]];
        newArrTabContentActive[0].classList.remove('tab__content_active');
        newArrTabContentActive.splice(0, 1);
        activeTabContent =  newArrTabContentActive;
        }
    }
}

tabs.forEach( element =>
    element.addEventListener('click', openTab) );

