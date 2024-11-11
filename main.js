let menu = document.querySelector('.menu');
let navList = document.querySelector('.navlist');
/* hamburger */
menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-times');
  navList.classList.toggle('show');
})

/*Animation*/
document.querySelectorAll('.head').forEach(e=>{
  e.setAttribute('data-aos', 'zoom-in');
e.setAttribute('data-aos-delay', '200');
e.setAttribute('data-aos-duration', '1000');
})

document.querySelectorAll('section h1').forEach(e=>{
  e.setAttribute('data-aos', 'slide-right');
e.setAttribute('data-aos-delay', '200');
e.setAttribute('data-aos-duration', '1000');
})

document.querySelectorAll('div').forEach(e=>{
  e.setAttribute('data-aos', 'zoom-in');
e.setAttribute('data-aos-delay', '200');
e.setAttribute('data-aos-duration', '1000');
})

document.querySelectorAll('span').forEach(e => {
  e.setAttribute('data-aos', 'slide-right');
  e.setAttribute('data-aos-delay', '200');
  e.setAttribute('data-aos-duration', '1000');
})

document.querySelectorAll('form div label').forEach(e => {
  e.setAttribute('data-aos', 'slide-right');
  e.setAttribute('data-aos-delay', '400');
  e.setAttribute('data-aos-duration', '3500');
})

document.querySelectorAll('.head h1').forEach(e=>{
  e.setAttribute('data-aos', 'slide-right');
e.setAttribute('data-aos-delay', '300');
e.setAttribute('data-aos-duration', '3000');
})

document.querySelectorAll('footer').forEach(e=>{
 
  e.setAttribute('data-aos', 'slide-right');
e.setAttribute('data-aos-delay', '200');
e.setAttribute('data-aos-duration', '1000');
 e.style.transform = 'translateY(100px)';
})

//like job
document.querySelectorAll(".joblist .contain .right span").forEach(e=>{
  e.addEventListener("click",()=>{
 e.classList.toggle("like");
  });
})

/*document.querySelector(".next").addEventListener("click",()=>{
  
  document.querySelector(".step active").previousElementSibling.classList.remove("active");
  document.querySelector(".step").nextElementSibling.classList.add("active");
})*/

