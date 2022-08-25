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

const selectedType = document.querySelector(".selected-type");
const typeContainer = document.querySelector(".type-container");

const typeList = document.querySelectorAll(".type");

selectedType.addEventListener("click", () => {
  typeContainer.classList.toggle("active-type");
});

typeList.forEach(t => {
  t.addEventListener("click", () => {
    selectedType.innerHTML = t.querySelector("option").innerHTML;
    typeContainer.classList.remove("active-type");
 });
});

const selectedCategory = document.querySelector(".selected-category");
const categoryContainer = document.querySelector(".category-container");

const categoryList = document.querySelectorAll(".category");

selectedCategory.addEventListener("click", () => {
  categoryContainer.classList.toggle("active-category");
});

categoryList.forEach(c => {
  c.addEventListener("click", () => {
    selectedCategory.innerHTML = c.querySelector("option").innerHTML;
    categoryContainer.classList.remove("active-category");
 });
});

const selectedSubcategory = document.querySelector(".selected-subcategory");
const subcategoryContainer = document.querySelector(".subcategory-container");

const subcategoryList = document.querySelectorAll(".subcategory");

selectedSubcategory.addEventListener("click", () => {
  subcategoryContainer.classList.toggle("active-subcategory");
});

subcategoryList.forEach(s => {
  s.addEventListener("click", () => {
    selectedSubcategory.innerHTML = s.querySelector("option").innerHTML;
    subcategoryContainer.classList.remove("active-subcategory");
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