var btnTranslate = document.querySelector("#btn-translator");

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

btnTranslate.addEventListener("click", clickEventHandler)

function clickEventHandler() {
    console.log("Clicked");
    console.log("input", txtInput.value);
};