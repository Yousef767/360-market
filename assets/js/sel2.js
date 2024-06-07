let sel2 = document.getElementById('selC');
let allSel2 = document.querySelectorAll('.clinx .cli .fx input');
let total2 = document.getElementById('selected');
sel2.addEventListener("input", () => {
  if (sel2.checked) {
    if (total2) {
      total2.innerHTML = `(${allSel2.length})`;
    }
    allSel2.forEach((e) => {
      e.checked = true;
    });
  } else {
    if (total2) {
      total2.innerHTML = `(${0})`;
    }
    allSel2.forEach((e) => {
      e.checked = false;
    });
  }
});

if (total2) {
  allSel2.forEach((e) => {
    e.addEventListener("input", () => {
      if (e.checked) {
        total2.innerText = "(" + (+total2.innerText[1] + 1) + ")";
      } else {
        total2.innerText = "(" + (+total2.innerText[1] - 1) + ")";
      }
    });
  });
}