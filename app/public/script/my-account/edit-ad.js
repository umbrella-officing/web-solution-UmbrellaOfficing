const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("option").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const selectedCategory = document.querySelector(".selectCategory-box");
const optionsCategory = document.querySelector(".options-category");

const optionsCategoryList = document.querySelectorAll(".option-category");

selectedCategory.addEventListener("click", () => {
  optionsCategory.classList.toggle("active1");
});

optionsCategoryList.forEach(o => {
  o.addEventListener("click", () => {
    selectedCategory.innerHTML = o.querySelector("option-category").innerHTML;
    optionsCategory.classList.remove("active1");
  });
});


$(document).ready(function () {
    $("#cep_ad").mask("00.000-000");
    $("#price").mask("R$: 0,00");
});

