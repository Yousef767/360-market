function removeAllActive(id, el) {
  let all = document.querySelectorAll(`#${id} .sectionsFilt .filt`);
  all.forEach((e) => {
    e.classList.remove("activeFilt");
  });
  el.classList.add("activeFilt");
}

function hideAllInners(id, e) {
  let notesMedia = document.querySelector(`#${id} .notesMedia`);
  let photosMedia = document.querySelector(`#${id} .photosMedia`);
  let auditsMedia = document.querySelector(`#${id} .auditsMedia`);
  if (e.innerHTML === "Notes") {
    notesMedia.style.display = "flex";
    photosMedia.style.display = "none";
    auditsMedia.style.display = "none";
  } else if (e.innerHTML === "Photos") {
    notesMedia.style.display = "none";
    photosMedia.style.display = "flex";
    auditsMedia.style.display = "none";
  } else if (e.innerHTML === "Form") {
    notesMedia.style.display = "none";
    photosMedia.style.display = "none";
    auditsMedia.style.display = "flex";
  }
}

function showNotes(e, id) {
  removeAllActive(id, e);
  hideAllInners(id, e);
}
function showPhotos(e, id) {
  removeAllActive(id, e);
  hideAllInners(id, e);
}
function showAudits(e, id) {
  removeAllActive(id, e);
  hideAllInners(id, e);
}

let closeBtn = document.getElementById('close');
let popInner = document.getElementById('popInner');
let imgSrc = document.getElementById('imgSrc');

function showImg(e){
  popInner.style.display='flex';
  imgSrc.src = e.src;
}
closeBtn.addEventListener('click',()=>{
  popInner.style.display='none';
})
