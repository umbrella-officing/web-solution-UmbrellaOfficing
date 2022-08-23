const selectedSpace = document.querySelector(".selected-space");
const optionsContainer_space = document.querySelector(".options-container-space");
const searchBox = document.querySelector(".search-box input");

const optionsList_spaces = document.querySelectorAll(".option-space");

selectedSpace.addEventListener("click", () => {
  optionsContainer_space.classList.toggle("active-space");

  searchBox.value = "";
  filterList("");

  if (optionsContainer_space.classList.contains("active-space")) {
    searchBox.focus();
  }
});

optionsList_spaces.forEach(o => {
  o.addEventListener("click", () => {
    selectedSpace.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer_space.classList.remove("active-space");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList_spaces.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

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
