function minuteModal() {
    let popupDesign = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupGift = document.querySelector('.popup-gift');
        
    setTimeout(() => {
        if((popupDesign.style.display == 'block') || (popupConsultation.style.display == 'block') || (popupGift.style.display == 'block')) {
            popupConsultation.style.display = 'none';
        } else {
            popupConsultation.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }, 60000);
}

module.exports = minuteModal;