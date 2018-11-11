function newStyle() {
    let buttonMoreStyles = document.querySelector('.more-styles'),
        stylesTwo = document.querySelectorAll('.styles-2');


    buttonMoreStyles.addEventListener('click', () => {
        stylesTwo.forEach(function (item, i) {
            stylesTwo[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            stylesTwo[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        buttonMoreStyles.style.display = 'none';
    });
}

module.exports = newStyle;