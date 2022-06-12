/**
 * @var {Element} inputExo1 notre input
 */
let inputExo1 = document.querySelector("#inputExo1");
/**
 * @var {Element} divExo1 notre div
 */
let divExo1 = document.querySelector("#divExo1");

inputExo1.addEventListener("input", function () {
    //le contenu de ma div est égale a la valeur de mon input
    divExo1.innerHTML = inputExo1.value;
})