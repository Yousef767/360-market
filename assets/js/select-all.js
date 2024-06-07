let allCheck = document.getElementById("select-all");
let allInputs = document.querySelectorAll(".cNames .clientsSelcHd input");
let count = document.getElementById("count");

allCheck.addEventListener("input", () => {
  if (allCheck.checked) {
    if (count) {
      count.innerHTML = `(${allInputs.length})`;
    }
    allInputs.forEach((e) => {
      e.checked = true;
    });
  } else {
    if (count) {
      count.innerHTML = `(${0})`;
    }
    allInputs.forEach((e) => {
      e.checked = false;
    });
  }
});

if (count) {
  allInputs.forEach((e) => {
    e.addEventListener("input", () => {
      if (e.checked) {
        count.innerText = "(" + (+count.innerText[1] + 1) + ")";
      } else {
        count.innerText = "(" + (+count.innerText[1] - 1) + ")";
      }
    });
  });
}
