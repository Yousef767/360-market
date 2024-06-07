let closeBtn = document.getElementById('close');
let popInner = document.getElementById('popInner');
let viws = document.querySelectorAll('.viw');

viws.forEach((e)=>{
  e.addEventListener('click',()=>{
    popInner.style.display='flex';
  })
})
closeBtn.addEventListener('click',()=>{
  popInner.style.display='none';
})