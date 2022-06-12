let inputDemo = document.querySelector("#inputDemo");
let divDemo = document.querySelector("#divDemo");

inputDemo.addEventListener("input", function () {
    divDemo.style.background = inputDemo.value;
})