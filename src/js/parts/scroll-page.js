function scrollPage() {
    let btns = document.getElementsByTagName('button'),
        countBtns = 0;

    function btnPressCheck() {
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                countBtns += 1;
            });
        }
    };

    btnPressCheck();

    let scrollHeight = window.pageYOffset,
        availHeight = window.screen.availHeight,
        body = document.body,
        html = document.documentElement,
        height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight),
        countBottom = 0,
        newHeight = height - height / 60,
        buttonGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift');

    window.addEventListener('scroll', function () {
        scrollHeight = window.pageYOffset;

        availHeight = window.screen.availHeight;

        if (scrollHeight + availHeight >= newHeight && countBottom === 0 && countBtns === 0) {
            countBottom += 1;

            popupGift.style.display = 'block';
            buttonGift.style.display = 'none';
        }
    });
}

module.exports = scrollPage;