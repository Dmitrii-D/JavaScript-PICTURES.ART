function burger() {
    let burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    srcWidth = window.screen.availWidth; 


        if (srcWidth < 768) {
        burger.addEventListener('click', function () {
            if(burgerMenu.style.display =='block') {
                burgerMenu.style.display = 'none';
            } else {
                burgerMenu.style.display ='block';
            }
        });
    }
}

module.exports = burger;