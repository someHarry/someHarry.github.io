const tabsToChange = document.querySelectorAll(".nav-tabs__tab");
const contentToHide = document.querySelectorAll(".first-lvl-container--left, .first-lvl-container--right");

function changeTab() {
    for (let i = 0; i < tabsToChange.length; i++) {
        tabsToChange[i].classList.toggle("nav-tabs__tab--active");
    }
    for (let i = 0; i < contentToHide.length; i++) {
        contentToHide[i].classList.toggle("first-lvl-container--hidden");
    }
}

for (let i = 0; i < tabsToChange.length; i++) {
    tabsToChange[i].onclick = (event) => {
        if (!tabsToChange[i].classList.contains("nav-tabs__tab--active")) {
            changeTab();
        }
    }
}
