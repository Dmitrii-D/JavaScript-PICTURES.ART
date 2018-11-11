function modalWindows() {
    let buttonDesign = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        buttonGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        popupContent = document.querySelectorAll('.popup-content'),
        popupDialog = document.querySelectorAll('.popup-dialog'),
        close = document.querySelectorAll('.popup-close');

    buttonDesign.forEach(function (item, i) {
        buttonDesign[i].addEventListener('click', function () {
            popupDesign.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });


    buttonConsultation.forEach(function (item, i) {
        buttonConsultation[i].addEventListener('click', function () {
            popupConsultation.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });


    buttonGift.addEventListener('click', () => {
        popupGift.style.display = 'block';
        buttonGift.style.display = 'none';
        document.body.style.overflow = 'hidden';
    });


    close.forEach(function (item, i) {
        close[i].addEventListener('click', function () {
            popupDesign.style.display = 'none';
            popupConsultation.style.display = 'none';
            popupGift.style.display = 'none';
            document.body.style.overflow = '';
        });

    });

    popupContent.forEach((item, i) => {
        popupContent[i].parentNode.addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('popup-dialog')) {
                popupDesign.style.display = 'none';
                popupConsultation.style.display = 'none';
                popupGift.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
}

module.exports = modalWindows;