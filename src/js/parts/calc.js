function calc(){
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        coupon = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price'),
        total = 0;
        let reg = /IWANTPOPART/;
        

function costCalculation(paragraph) {
paragraph.addEventListener('change', function() {
    total = ((+size.value * +material.value) + (+options.value));
    if ((size.value == 0 && material.value == 0) || size.value == '' ||  material.value == ''){
        totalValue.innerHTML = '';
    } else {
        if (coupon.value.match(reg)) {
            totalValue.innerHTML = total - (total*0.3);
        } else {
            totalValue.innerHTML = total;
        }
    }
});
}
costCalculation(size);
costCalculation(material);
costCalculation(options);
costCalculation(coupon);
}

module.exports = calc;