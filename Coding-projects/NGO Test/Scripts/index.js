// Write code related to Home Page

let formEl = document.querySelector("form");
let nameInp = document.getElementById("name");
let mobInp = document.getElementById("phone");
let emailInp = document.getElementById("email");
let categoryInp = document.getElementById("category");
let typeInp = document.getElementById("type");

let allHelperData = JSON.parse(localStorage.getItem("Helpers"));
if (allHelperData === null) allHelperData = [];

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {
    name: nameInp.value,
    mobile: mobInp.value,
    email: emailInp.value,
    category: categoryInp.value,
    type: typeInp.value,
  };
  allHelperData.push(data);
  localStorage.setItem("Helpers", JSON.stringify(allHelperData));
});
