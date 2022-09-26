const unfoldButtons = document.querySelectorAll(".foldable > p.unfold-button");

for (let i = 0; i < unfoldButtons.length; i++) {
    unfoldButtons[i].onclick = (event) => {
        unfoldButtons[i].closest("section").classList.toggle("foldable--unfold");
    }
}