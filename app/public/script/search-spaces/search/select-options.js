const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.forEach((e, index)=>{
  e.addEventListener("click", () => {
    optionsContainer[index].classList.toggle("active");
  });
})


  optionsList.forEach((e,index,arr) => {
  e.addEventListener("click", () => {
    console.log(arr)
    selected[i].innerHTML = e.querySelector("label").innerHTML;
    // optionsContainer[index].classList.remove("active");
  });
});
