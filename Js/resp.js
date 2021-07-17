hamburger = document.querySelector('.hamburger')
nav1=document.querySelector('.nav1')
nav2 = document.querySelector('.nav2')
mainbody=document.querySelector('.mainbody')
footer = document.querySelector('.footer1')
cross = document.querySelector('.cross')




hamburger.addEventListener('click', ()=>{
    mainbody.classList.toggle('hide');
    footer.classList.toggle('hide');
    nav1.classList.toggle('hide');
    nav2.classList.toggle('nav2-invisible');
    hamburger.classList.toggle('zeropacity');
    cross.classList.toggle('hide');
})

