var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackSubmit = feedbackPopup.querySelector(".submit-form");
var feedbackFormName = feedbackPopup.querySelector("[name=user-name]");

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    feedbackFormName.focus();
})

feedbackClose.addEventListener("click", function (evt) {
    if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
    }
})
feedbackButton.addEventListener("blur", function (evt) {
    if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.cslassList.remove("modal-show");
    }
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedbackPopup.classList.contains("modal-show")) {
            feedbackPopup.classList.remove("modal-show");
        }
    }
})
feedbackSubmit.addEventListener("click", function (evt) {
    if (feedbackPopup.classList.contains("modal-show")) {
        feedbackPopup.classList.remove("modal-show");
    }
})