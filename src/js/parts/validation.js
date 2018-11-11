function nameAndMsgCheck() {
  
  function inputCheck(id, regex) {

    let element = document.getElementById(id);

    if (element) {

      let lastValue = element.value;

      if (!regex.test(lastValue)) {
        lastValue = '';
      }

      setInterval(function () {

        let value = element.value;

        if (value != lastValue) {
          if (regex.test(value)) {
            lastValue = value;
          } else {
            element.value = lastValue;
          }
        }
      }, 10);
    }
  };

  inputCheck('popup-design__name-field', /^[а-яёА-яЁ\s]*$/);
  inputCheck('popup-design__message-field', /^[а-яёА-яЁ\s\.\,\!\?\-\"]*$/);
  inputCheck('popup-consultation__name-field', /^[а-яёА-яЁ\s]*$/);
  inputCheck('input-wrapper__name-field', /^[а-яёА-яЁ\s]*$/);
  inputCheck('input-wrapper__message-field', /^[а-яёА-яЁ\s\.\,\!\?\-\"]*$/);
}

module.exports = nameAndMsgCheck;