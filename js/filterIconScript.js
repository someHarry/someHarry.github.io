const filterButton = document.querySelectorAll(".filter-icon");

filterButton[0].onclick = (event) => {
    filterButton[0].classList.toggle("filter-icon--activated");
}
