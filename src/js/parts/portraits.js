function portraits() {
    let imageOne = document.querySelector('.size-1'),
    imageTwo = document.querySelector('.size-2'),
    imageThree = document.querySelector('.size-3'),
    imageFourth = document.querySelector('.size-4');


function imgOnWall(numImages, srcBg, srcPhoto) {

    numImages.addEventListener('mouseover', () => {
        numImages.src = srcPhoto;
        numImages.style.position = 'relative';
        numImages.style.zIndex = '1';
    });

    numImages.addEventListener('mouseout', () => {
        numImages.src = srcBg;
        numImages.style.zIndex = '';
    });

}

imgOnWall(imageOne, "img/sizes-1.png", "img/sizes-1-1.png");
imgOnWall(imageTwo, "img/sizes-2.png", "img/sizes-2-1.png");
imgOnWall(imageThree, "img/sizes-3.png", "img/sizes-3-1.png");
imgOnWall(imageFourth, "img/sizes-4.png", "img/sizes-4-1.png");
}

module.exports = portraits;