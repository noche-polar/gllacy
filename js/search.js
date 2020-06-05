var searchButton = document.querySelector(".search-button");
var searchPopup = document.querySelector(".modal-search");
var searchForm = searchPopup.querySelector("[name=search]");

searchButton.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    searchPopup.classList.add("modal-show");
})
searchButton.addEventListener("focus", function (evt) {
    evt.preventDefault();
    searchPopup.classList.add("modal-show");
})

searchButton.addEventListener("blur", function (evt) {
    if (searchPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        searchPopup.classList.remove("modal-show");
    }
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (searchPopup.classList.contains("modal-show")) {
            searchPopup.classList.remove("modal-show");
        }
    }
})
window.addEventListener("click", function (evt) {
    if (!evt.target.closest('.modal-search') && evt.target != searchPopup) {
        if (searchPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            searchPopup.classList.remove("modal-show");
        }
    }
})