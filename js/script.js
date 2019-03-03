/*  Модальное окно сообщения */
          var link = document.querySelector(".contact-button");
          var popup = document.querySelector(".modal-write-us");
          var close = document.querySelector(".modal-close");

           var form = popup.querySelector("form");
           var name = popup.querySelector(".user-name-icon");
           var email = popup.querySelector(".user-mail-icon");
           var mailtext = popup.querySelector(".area");
           var login = popup.querySelector("[name]");


/*  Модальное окно сообщения */
          
          link.addEventListener("click", function(evt) {
          evt.preventDefault();
          popup.classList.add("open");
          login.focus();

                });

          close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("open");
            });

         

/*  Модальное окно Карты */

          var linkMap = document.querySelector(".link-map");
            var popupMap = document.querySelector(".modal-map");
            var closeMap = document.querySelector(".modal-close-map");

            linkMap.addEventListener("click", function (evt) {
            evt.preventDefault();
            popupMap.classList.add("modal-map-open");

                  });
            closeMap.addEventListener("click", function (evt) {
            evt.preventDefault();
            popupMap.classList.remove("modal-map-open");
            });

            


/*  Модальное окно покупки */

            var buyLink = document.querySelector(".buy");
            var basketPopup = document.querySelector(".goods-basket");
            var basketClose = document.querySelector(".modal-close-basket");


            buyLink.addEventListener("click", function (evt) {
            evt.preventDefault();
            basketPopup .classList.add("goods-open");

                  });
            basketClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            basketPopup.classList.remove("goods-open");
            });

           
            
