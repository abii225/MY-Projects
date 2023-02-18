// Write code related to Volatiers Page
let allHelperData = JSON.parse(localStorage.getItem("Helpers"));

if (allHelperData === null) {
  allHelperData = [];
}
let volunteerData = allHelperData.filter(function (data) {
  return data.type === "Volantier";
});

let DeleteRows = function (e) {
  // console.log(e);
  //taking ls data

  //delete from ls
  let newVolunteers = allHelperData.filter(function (b) {
    return JSON.stringify(e) != JSON.stringify(b);
  });
  allHelperData = newVolunteers;
  localStorage.setItem("Helpers", JSON.stringify(allHelperData));

  //delete from dom;
  volunteerData = allHelperData.filter(function (data) {
    return data.type == "Volantier";
  });
  tbody.innerHTML = "";
  volunteerData.foreach(function (tData) {
    CreateRow(data);
  });
};

//main part
let tbody = document.querySelector("tbody");

let CreateRow = function (data) {
  let tr = document.createElement("tr");
  let cellName = document.createElement("td");
  cellName.textContent = data.name;
  let cellMob = document.createElement("td");
  cellMob.textContent = data.mobile;
  let cellEmail = document.createElement("td");
  cellEmail.textContent = data.email;
  let cellCategory = document.createElement("td");
  cellCategory.textContent = data.category;
  let deleteCell = document.createElement("td");
  deleteCell.textContent = "Delete";
  deleteCell.addEventListener("click", function () {
    DeleteRows(data);
  });

  tr.append(cellName, cellMob, cellEmail, cellCategory, deleteCell);
  tbody.append(tr);
};
//passing indexes of datas.
volunteerData.forEach(function (data) {
  CreateRow(data);
});

//filtering
let filtered = document.getElementById("filter");

filtered.addEventListener("change", function (e) {
  // before filtering clearing table
  tbody.innerHTML = "";
  if (e.target.value === "") {
    volunteerData.forEach(function (data) {
      CreateRow(data);
    });
  } else if (e.target.value !== "") {
    let filterData = volunteerData.filter(function (filter) {
      return e.target.value == filter.category;
    });
    filterData.forEach(function (b) {
      CreateRow(b);
    });
  }
});

// console.log(volunteerData);
// console.log(allHelperData);
