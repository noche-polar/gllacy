var loginLink = document.querySelector(".login");
var loginPopup = document.querySelector(".modal-login");
var loginFormEmail = loginPopup.querySelector("[name=user-email]");

loginLink.addEventListener("mouseover", function (evt) {
    if (searchPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        searchPopup.classList.remove("modal-show");
    }
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    loginFormEmail.focus();
})
loginLink.addEventListener("focus", function (evt) {
    if (searchPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        searchPopup.classList.remove("modal-show");
    }
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    loginFormEmail.focus();
})

loginLink.addEventListener("blur", function (evt) {
    if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
    }
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (loginPopup.classList.contains("modal-show")) {
            loginPopup.classList.remove("modal-show");
        }
    }
})
window.addEventListener("click", function (evt) {
    if (!evt.target.closest('.modal-login') && evt.target != loginPopup) {
        if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
        }
    }
})