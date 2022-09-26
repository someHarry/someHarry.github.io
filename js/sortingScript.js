const sortingIcons = document.querySelectorAll(".sorting-icon");

for (let i = 0; i < sortingIcons.length; i++) {
    sortingIcons[i].onclick = (event) => {
        if (sortingIcons[i].classList.contains("sorting-icon--sort-down")) {
            sortingIcons[i].classList.remove("sorting-icon--sort-down");
            sortingIcons[i].classList.add("sorting-icon--sort-up");
        } else if (sortingIcons[i].classList.contains("sorting-icon--sort-up")) {
            sortingIcons[i].classList.remove("sorting-icon--sort-up");
        } else {
            sortingIcons[i].classList.add("sorting-icon--sort-down");
        }
    }
}