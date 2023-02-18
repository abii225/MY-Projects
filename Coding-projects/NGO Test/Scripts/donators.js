// Write code related to Donators Page

let allHelperData = JSON.parse(localStorage.getItem("Helpers"));
if (allHelperData === null) allHelperData = [];

let allDonatorData = allHelperData.filter(function (data) {
  return data.type == "Donator";
});

//table part
let tbody = document.querySelector("tbody");

let deleteRow = function (data) {
  // delete data from ls
  let newAllHelperData = allHelperData.filter(function (obj) {
    return JSON.stringify(obj) != JSON.stringify(data);
  });

  allHelperData = newAllHelperData;
  localStorage.setItem("Helpers", JSON.stringify(allHelperData));

  //   delete data from dom

  allDonatorData = allHelperData.filter(function (data) {
    return data.type == "Donator";
  });
  tbody.innerHTML = "";
  allDonatorData.forEach(function (data) {
    generateRow(data);
  });
};
let generateRow = function (data) {
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  tdName.textContent = data.name;
  let tdMob = document.createElement("td");
  tdMob.textContent = data.mobile;
  let tdEmail = document.createElement("td");
  tdEmail.textContent = data.email;
  let tdCategory = document.createElement("td");
  tdCategory.textContent = data.category;
  let tdDelete = document.createElement("td");
  tdDelete.textContent = "Delete";
  tdDelete.addEventListener("click", function () {
    deleteRow(data);
  });
  tr.append(tdName, tdMob, tdEmail, tdCategory, tdDelete);
  tbody.append(tr);
};
allDonatorData.forEach(function (data) {
  generateRow(data);
});

// filter part
let filterData = document.getElementById("filter");

filterData.addEventListener("change", function (e) {
  tbody.innerHTML = "";
  if (e.target.value === "") {
    allDonatorData.forEach(function (data) {
      generateRow(data);
    });
  } else {
    let filterData = allDonatorData.filter(function (obj) {
      return obj.category == e.target.value;
    });

    filterData.forEach(function (data) {
      generateRow(data);
    });
  }
});
