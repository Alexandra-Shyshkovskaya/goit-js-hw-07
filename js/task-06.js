//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

  
const validatiorInput = document.querySelector("#validation-input");

validatiorInput.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  let validInputLength = document.getElementById("validation-input").value.length;
  let dataAttributeLength = validatiorInput.getAttribute("data-length");
  console.log(validInputLength);
  console.log(dataAttributeLength);
  if (Number(validInputLength) === Number(dataAttributeLength)) {
    validatiorInput.classList.add("valid");
    validatiorInput.classList.remove("invalid");
  } else {
    validatiorInput.classList.add("invalid");
    validatiorInput.classList.remove("valid");
  }
}