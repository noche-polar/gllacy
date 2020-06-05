var cartLink = document.querySelector(".cart-link");
var cartPopup = document.querySelector(".modal-cart");
var cartOrder = cartPopup.querySelector(".order");

cartLink.addEventListener("mouseover", function (evt) {
    if (searchPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        searchPopup.classList.remove("modal-show");
    }
    else if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
    }
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
})
cartLink.addEventListener("focus", function (evt) {
    if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
    }
    else if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
    }
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
        }
    }
})
cartPopup.addEventListener("blur", function (evt) {
    if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
    }
})
window.addEventListener("click", function (evt) {
    if (!evt.target.closest('.modal-cart') && evt.target != cartPopup) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
        }
    }
})
cartOrder.addEventListener("click", function (evt) {
    if (cartPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
    }
})