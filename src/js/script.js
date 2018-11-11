window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

let firstSlider = require('./parts/first-slider.js'),
    modalWindows = require('./parts/modal-windows.js'),
    form = require('./parts/form.js'),
    validation = require('./parts/validation.js'),
    newStyle = require('./parts/new-style.js'),
    calc = require('./parts/calc.js'),
    filterWorks = require('./parts/filter-works.js'),
    portraits = require('./parts/portraits.js'),
    gorizontalSlider = require('./parts/gorizont-slider.js'),
    accordion = require('./parts/accordion.js'),
    burger = require('./parts/burger.js'),
    scrollPage = require('./parts/scroll-page.js'),
    minuteModal = require('./parts/minute-modal.js');

    firstSlider();
    modalWindows();
    form();
    validation();
    newStyle();
    calc();
    filterWorks();
    portraits();
    gorizontalSlider();
    accordion();
    burger();
    scrollPage();
    minuteModal();

});