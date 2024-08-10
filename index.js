var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });
var menu=document.getElementById("menu-icon")
  var closenav = document.getElementById("closenav")
  var sidenav = document.getElementById("sidenav")
closenav.addEventListener("click",()=>{
  sidenav.style.transform="translateX(100%)"
})
  menu.addEventListener("click",()=>{
    sidenav.style.display="block"
    sidenav.style.transform="translateX(0)"
  })