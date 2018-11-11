function accordion() {
    let accordionHeading = document.querySelectorAll('.accordion-heading'),
        accordionBlock = document.querySelectorAll('.accordion-block');

    accordionBlock.forEach((item) => item.style.display = 'none');

    for (let i = 0; i < accordionHeading.length; i++) {
        accordionHeading[i].addEventListener('click', function () {
            if (!(this.classList.contains('ui-accordion-header-active'))) {
                for (let i = 0; i < accordionHeading.length; i++) {
                    accordionHeading[i].classList.remove('ui-accordion-header-active');
                    accordionBlock[i].style.display = 'none';
                }
                this.classList.add('ui-accordion-header-active');
                accordionBlock[i].style.display = 'block';
            } else {
                accordionHeading[i].classList.remove('ui-accordion-header-active');
                accordionBlock[i].style.display = 'none';
            }

            function showBlock() {
                accordionBlock[i].classList.add('block-animation');
            }
            showBlock();
        });
    }
}

module.exports = accordion;