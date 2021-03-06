/*  Модальное окно сообщения */
var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=nametext]");
var useremail = popup.querySelector("[name=mail");
var usermailtext = popup.querySelector("[name=mailtext]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("messageFrom");
  storage = localStorage.getItem("eMail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("open");
  login.focus();

});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("open");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!username.value || !useremail.value || !usermailtext.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("usermail", usermail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-write-us")) {
      evt.preventDefault();
      popup.classList.remove("open");
      popup.classList.remove("modal-error");
    }
  }
});


/*  Модальное окно Карты */

var linkMap = document.querySelector(".link-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-close-map");

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-open");

});
closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-map-open");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-map")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-map-open");
    }
  }
});

/*  Модальное окно покупки */

var buyLink = document.querySelector(".buy");
var basketPopup = document.querySelector(".goods-basket");
var basketClose = document.querySelector(".modal-close-basket");


buyLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  basketPopup.classList.add("goods-open");

});
basketClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  basketPopup.classList.remove("goods-open");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("goods-basket")) {
      evt.preventDefault();
      basketPopup.classList.remove("goods-open");
    }
  }
});