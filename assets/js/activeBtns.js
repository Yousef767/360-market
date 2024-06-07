let btns = document.querySelectorAll('.abtn');
btns.forEach((e)=>{
  e.addEventListener('click',()=>{
    btns.forEach((e)=>{
      e.classList.remove('activeBtn');
    })
    e.classList.add('activeBtn');
  })
})