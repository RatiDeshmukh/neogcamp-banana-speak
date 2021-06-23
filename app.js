var btnTranslate = document.querySelector("#btn-translator");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "Rati deshmukh"


btnTranslate.addEventListener("click", clickEventHandler)

function clickEventHandler() {
    outputDiv.innerText = "ajajajajaj " + txtInput.value;
};