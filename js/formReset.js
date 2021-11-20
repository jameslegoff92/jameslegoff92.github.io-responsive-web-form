function formReset() {
  const inputElementsNodeList = document.querySelectorAll('.form__input');
  const inputElementsArray = Array.from(inputElementsNodeList);

  inputElementsArray.forEach((inputElementItem) => {

    inputElementItem.addEventListener('input', () => {
      const inputElement = document.getElementById(inputElementItem.id);
      inputElement.style.outlineColor = 'lightblue';

      const inputErrorMsgId = inputElement.id + '-error-msg';
      const ErrorMsg = document.getElementById(inputErrorMsgId);
      ErrorMsg.setAttribute('class', 'error-msg--off')

      const inputErrorIconId = inputElement.id + '-error-icon'
      const ErrorIcon = document.getElementById(inputErrorIconId);
      ErrorIcon.setAttribute('class', 'error-icon--off')
   })
  })
}

export default formReset;

