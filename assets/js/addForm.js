let addFormBtn = document.getElementById("addFormBtn");
let closeBtn = document.getElementById("close");
let popInner = document.getElementById("popInner");
let addInput = document.getElementById("addInput");
let confirmForm = document.getElementById("confirmForm");
let selectInputType = document.getElementById("selectInputType");
let numberOfInputs = document.getElementById("numberOfInputs");
let numberOfInputsInput = document.querySelector("#numberOfInputs input");
let oneLabel = document.getElementById("oneLabel");
let oneLabelInput = document.getElementById("oneLabelInput");
let manyLabels = document.getElementById("manyLabels");
let addedInputs = document.getElementById("addedInputs");

closeBtn.addEventListener("click", () => {
  popInner.style.display = "none";
});

addFormBtn.addEventListener("click", () => {
  popInner.style.display = "flex";
});

selectInputType.addEventListener("input", () => {
  if (selectInputType.value === "radio") {
    numberOfInputs.style.display = "flex";
    manyLabels.style.display = "flex";
  } else {
    numberOfInputs.style.display = "none";
    manyLabels.style.display = "none";
  }
});

numberOfInputsInput.addEventListener("input", () => {
  if (numberOfInputsInput.value.length > 2) {
    numberOfInputsInput.value = numberOfInputsInput.value.slice(0, 2);
  }
  manyLabels.innerHTML = "";
  for (let i = 0; i < +numberOfInputsInput.value; i++) {
    manyLabels.innerHTML += `
  <div class="input">
      <span>Input${i + 1} Label</span>
      <input type="text" placeholder="Input Label">
  </div>
  `;
  }
});
addInput.addEventListener("click", () => {
  if (selectInputType.value !== "0" && oneLabelInput.value !== "") {
    if (selectInputType.value !== "radio") {
      addedInputs.innerHTML += `
      <div class="inD" onclick="removeThis(this)" data-type="${selectInputType.value}" data-label="${oneLabelInput.value}"> ${selectInputType.value} <i class="fa-regular fa-trash-can"></i></div>
      `;
    }

    if (
      selectInputType.value === "radio" &&
      oneLabelInput.value !== "" &&
      numberOfInputsInput.value !== ""
    ) {
      console.log(oneLabelInput);
      let inputsRadioLabel = document.querySelectorAll(
        ".manyLabels .input input"
      );
      let allLabels = [];
      for (let i = 0; i < inputsRadioLabel.length; i++) {
        allLabels.push(inputsRadioLabel[i].value);
      }

      let checkArr = [];
      inputsRadioLabel.forEach((e) => {
        e.value === "" ? checkArr.push(e.value) : "";
      });
      if (checkArr.length < 1) {
        addedInputs.innerHTML += `
        <div class="inD" onclick="removeThis(this)" data-type=${
          selectInputType.value
        } data-label="${oneLabelInput.value}"
          data-labels="${allLabels.join(",")}"
        > ${selectInputType.value} <i class="fa-regular fa-trash-can"></i></div>
        `;
      }
    }
    showMessage("input added");
    selectInputType.value = "0";
    oneLabelInput.value = "";
  } else {
    showMessage("please select input type and add label");
  }
});

let formsInner = document.getElementById("formsInner");
confirmForm.addEventListener("click", () => {
  let checkThereIsSubmit = document.querySelectorAll('[data-type="submit"]');
  if (checkThereIsSubmit.length !== 0) {
    if (checkThereIsSubmit.length > 1) {
      showMessage("can't use two submit buttons");
    }
    if (checkThereIsSubmit.length === 1) {
      let inputsData = document.querySelectorAll("#addedInputs .inD");
      let id = Date.now();
      formsInner.innerHTML += `
    <form class="card-body d-flex flex-direction-column gap-3" id=${
      "form" + id
    }>
      <div class="inputs" id=${id}>
      </div>
    </form>
    `;
      let inputsInner = document.getElementById(id);
      let form = document.getElementById(`${"form" + id}`);
      for (let i = 0; i < inputsData.length; i++) {
        if (
          inputsData[i].dataset.type !== "textarea" &&
          inputsData[i].dataset.type !== "radio" &&
          inputsData[i].dataset.type !== "image" &&
          inputsData[i].dataset.type !== "file" &&
          inputsData[i].dataset.type !== "submit"
        ) {
          inputsInner.innerHTML += `
        <div class="input">
            <span>${inputsData[i].dataset.label}</span>
            <input type="${inputsData[i].dataset.type}" placeholder="${inputsData[i].dataset.label}">
        </div>
        `;
        } else if (inputsData[i].dataset.type === "textarea") {
          inputsInner.innerHTML += `
        <div class="input w-100">
            <span>${inputsData[i].dataset.label}</span>
            <textarea placeholder="${inputsData[i].dataset.label}"></textarea>
        </div>
        `;
        } else if (inputsData[i].dataset.type === "file") {
          inputsInner.innerHTML += `
        <div class="input w-100">
        <span>${inputsData[i].dataset.label}</span>
          <label for=${"file" + id}>
            <i class="fa-light fa-file"></i>
            <span>${inputsData[i].dataset.label}</span>
          </label>
          <input type="file" id="${
            "file" + id
          }" oninput="handlefile(this)" hidden>
        </div>
        `;
        } else if (inputsData[i].dataset.type === "image") {
          inputsInner.innerHTML += `
        <div class="input w-100">
        <span>${inputsData[i].dataset.label}</span>
          <label for=${"file" + id}>
            <i class="fa-light fa-image"></i>
            <span>${inputsData[i].dataset.label}</span>
          </label>
          <input type="file" accept="image/jpg, id="${
            "image" + id
          }" oninput="handlefile(this)" hidden>
        </div>
        `;
        } else if (inputsData[i].dataset.type === "submit") {
          form.innerHTML += `
        <button class="btnApply"> ${inputsData[i].dataset.label} </button>
        `;
        } else if (inputsData[i].dataset.type === "radio") {
          let arrOfLabels = inputsData[i].dataset.labels.split(",");
          inputsInner.innerHTML += `
        <div class="input w-100">
          <span>${inputsData[i].dataset.label}</span>
          <div class="radios" id="${"radios" + id}">
          </div>
        </div>
        `;
          let radiosInner = document.querySelector(`#${"radios" + id}`);
          for (let i = 0; i < arrOfLabels.length; i++) {
            radiosInner.innerHTML += `
          <div class="radio">
            <input type="radio" id="${"radio" + id + 5}" name="${"group" + id}">
            <label for="${"radio" + id + 5}">${arrOfLabels[i]}</label>
          </div>
          `;
          }
        }
      }
    }
    showMessage("form added");
    addedInputs.innerHTML = "";
    popInner.style.display = "none";
  } else {
    showMessage("can't add form without submit button");
  }
});

function handlefile(e) {
  e.previousElementSibling.lastElementChild.innerHTML = e.files[0].name;
}
function removeThis(e) {
  e.remove();
  showMessage("input removed");
}

function showMessage(message) {
  let div = document.createElement("div");
  div.className = "message";
  let span = document.createElement("span");
  span.innerHTML = message;
  document.body.appendChild(div);
  div.appendChild(span);
  setTimeout(() => {
    div.remove();
  }, 2700);
}
