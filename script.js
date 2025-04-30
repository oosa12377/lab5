let current = 1;
let timer;

function showImage(num) {
  document.getElementById("img1").classList.remove("show");
  document.getElementById("img2").classList.remove("show");
  document.getElementById("img3").classList.remove("show");

  if (num == 1) {
    document.getElementById("img1").classList.add("show");
  } else if (num == 2) {
    document.getElementById("img2").classList.add("show");
  } else if (num == 3) {
    document.getElementById("img3").classList.add("show");
  }
}

function next() {
  current = current + 1;
  if (current > 3) {
    current = 1;
  }
  showImage(current);
}

function previous() {
  current = current - 1;
  if (current < 1) {
    current = 3;
  }
  showImage(current);
}

function start() {
  timer = setInterval(next, 2000);
}

function stop() {
  clearInterval(timer);
}

//-------------------------------------------

//==================================================
let btn = document.getElementById("btn");
let nameInput = document.getElementById("txt1");
let gradeInput = document.getElementById("txt2");
let table = document
  .getElementById("studentTable")
  .getElementsByTagName("tbody")[0];
let span = document.getElementById("span");
let filter = document.getElementById("filter");
let sort = document.getElementById("sort");

btn.onclick = function () {
  let name = nameInput.value.trim();
  let grade = gradeInput.value.trim();
  let deptRadios = document.getElementsByName("department");
  let department = "";

  for (let i = 0; i < deptRadios.length; i++) {
    if (deptRadios[i].checked) {
      department = deptRadios[i].value;
      break;
    }
  }

  span.style.display = "none";

  if (
    name == "" ||
    isNaN(grade) ||
    grade < 0 ||
    grade > 100 ||
    isRepeated(name)
  ) {
    span.innerText = "Invalid input or name exists";
    span.style.display = "inline";
    return;
  }

  name = name[0].toUpperCase() + name.slice(1).toLowerCase();

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = name;

  let td2 = document.createElement("td");
  td2.innerText = grade;

  let tdDept = document.createElement("td");
  tdDept.innerText = department;

  let td3 = document.createElement("td");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function () {
    table.removeChild(tr);
  };
  td3.appendChild(delBtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(tdDept);
  tr.appendChild(td3);
  table.appendChild(tr);

  nameInput.value = "";
  gradeInput.value = "";
};
