function formValidation (formItem) {
  if (formItem === 'email') {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailString = document.getElementById(formItem).value;
    const isValid = re.test(emailString);
  
    if (isValid) {
      const emailErrorMsg = document.getElementById('email-error-msg');
      emailErrorMsg.setAttribute('class', 'error-msg--off')

      const emailErrorIcon = document.getElementById('email-error-icon');
      emailErrorIcon.setAttribute('class', 'error-icon--off')
  
      document.getElementById(formItem).value = "";

    } else {
      const inputElement = document.getElementById(formItem);
      inputElement.style.outlineColor = 'red';

      const emailErrorMsg = document.getElementById('email-error-msg');
      emailErrorMsg.setAttribute('class', 'error-msg--on')
  
      const emailErrorIcon = document.getElementById('email-error-icon');
      emailErrorIcon.setAttribute('class', 'error-icon--on')
  
      document.getElementById('email').value = "";
    } 
   } else {
    const inputItemValue = document.getElementById(formItem).value;

    if (inputItemValue === "" || inputItemValue === "         ") {

      const inputElement = document.getElementById(formItem);
      inputElement.style.outlineColor = 'red';

      const inputErrorMsgId = formItem + '-error-msg';
      const ErrorMsg = document.getElementById(inputErrorMsgId);
      ErrorMsg.setAttribute('class', 'error-msg--on')
  
      const inputErrorIconId = formItem + '-error-icon'
      const ErrorIcon = document.getElementById(inputErrorIconId);
      ErrorIcon.setAttribute('class', 'error-icon--on')
  
      document.getElementById(formItem).value = "";
    }
    else {
      document.getElementById(formItem).value = "";
    }
  }
}

export default formValidation;