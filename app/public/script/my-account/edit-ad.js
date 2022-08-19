const selectedSpace = document.querySelector(".selected-space");
const optionsSpaces = document.querySelector(".options-spaces");

const optionsSpacesList = document.querySelectorAll(".option-space");

selectedSpace.addEventListener("click", () => {
  optionsSpaces.classList.toggle("active");
});

optionsSpacesList.forEach(o => {
  o.addEventListener("click", () => {
    selectedSpace.innerHTML = o.querySelector("options-space").innerHTML;
    optionsSpaces.classList.remove("active");
  });
});

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active1");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("option").innerHTML;
    optionsContainer.classList.remove("active1");
  });
});

const selectedCategory = document.querySelector(".selected-category");
const optionsCategory= document.querySelector(".options-category");

const optionsCategoryList = document.querySelectorAll(".option-category");

selectedCategory.addEventListener("click", () => {
  optionsCategory.classList.toggle("active2");
});

optionsCategoryList.forEach(o => {
  o.addEventListener("click", () => {
    selectedCategory.innerHTML = o.querySelector("option-category").innerHTML;
    optionsCategory.classList.remove("active2");
  });
});

const selectedSubcategory = document.querySelector(".selected-subcategory");
const optionsSubcategory= document.querySelector(".options-subcategory");

const optionsSubcategoryList = document.querySelectorAll(".option-subcategory");

selectedSubcategory.addEventListener("click", () => {
  optionsSubcategory.classList.toggle("active3");
});

optionsSubcategoryList.forEach(o => {
  o.addEventListener("click", () => {
    selectedSubcategory.innerHTML = o.querySelector("option-subcategory").innerHTML;
    optionsSubcategory.classList.remove("active3");
  });
});

const plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      num = document.querySelector('.num');

update = (n) => {
    num.innerText = ( n <10 && n > 0) ? `${n}` : n;
}

let a = 1;

plus.addEventListener('click', () => update(++a));
minus.addEventListener('click', () => update(--a));

$(document).ready(function () {
    $("#cep_ad").mask("00.000-000");
    $("#price").mask("R$: 0,00");
});
