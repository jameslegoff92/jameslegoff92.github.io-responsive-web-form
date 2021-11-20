import formValidation from "./js/formValidation.js";
import formReset from "./js/formReset.js";

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formItemsNodeList = document.querySelectorAll(".form__input");
  const formItemsArray = Array.from(formItemsNodeList);
  
  formItemsArray.forEach((formItem) => {
    formValidation(formItem.id);
  })
})

formReset();

