function form(){
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
    
    let formDown = document.querySelector('#form-down'),         
        formBig = document.querySelector('.big-form'), 
        formSmall = document.querySelector('.small-form'),
        inputFormD = formDown.getElementsByTagName ('input'),
        inputFormB = formBig.getElementsByTagName ('input'),
        inputFormS = formSmall.getElementsByTagName ('input'),
        statusMessage = document.createElement('div');
         
    
        statusMessage.classList.add('status');
    
    function sendForm(elem){
    
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
        
            let formData = new FormData(elem);
        
        function postData() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'mailer/smart.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        
                request.onreadystatechange = function () {
                    if(request.readyState < 4) {
                        resolve();
                        document.body.style.overflow = 'hidden';
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                            document.body.style.overflow = 'hidden';
                        } else {
                            reject()
                            document.body.style.overflow = 'hidden';
                        }
                    }
                };
        
                let obj = {};
                formData.forEach (function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
    
    
            });
        }
        
        function clearInput() {
            for (let i = 0; i < inputFormD.length; i++) {
                inputFormD[i].value = '';
            }
            for (let i = 0; i < inputFormB.length; i++) {
                inputFormB[i].value = '';
            }
            for (let i = 0; i < inputFormS.length; i++) {
                inputFormS[i].value = '';
            }
        }
        
        postData (formData)
            .then (() => statusMessage.innerHTML = message.loading)
            .then (() => statusMessage.innerHTML = message.sucsess)
            .catch (() => statusMessage.innerHTML = message.failure)
            .then (clearInput)
        });
    
    
    }
    
    sendForm(formDown);
    sendForm(formBig);
    sendForm(formSmall);
}

module.exports = form;