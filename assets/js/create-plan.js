

let showPop = document.getElementById("showPop");
let closeBtn = document.getElementById("close");
let popInner = document.getElementById("popInner");

closeBtn.addEventListener("click", () => {
  popInner.style.display = "none";
});

showPop.addEventListener("click", () => {
  popInner.style.display = "flex";
});
