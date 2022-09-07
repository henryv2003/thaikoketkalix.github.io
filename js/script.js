
window.addEventListener("load", function(){
 /*------------ page loader -------------------------*/
 document.querySelector(".page-loader").classList.add("fade-out");
 setTimeout(function(){
    document.querySelector(".page-loader").style.display="none";
 },600);
 /*------------ Animation on this scroll ------------*/
 AOS.init();
})

/*----------------------toggle navbar---------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");
}

/*----------- close nav when clicking item------------------*/
document.addEventListener("click", function(e){
      if(e.target.closest(".nav-item")){
          toggleNav();
      }

});

/*----------------------sticky header------------------------*/
window.addEventListener("scroll", function(){
   if(this.pageYOffset < 60){
       document.querySelector(".header").classList.add("sticky");

   }
   else{
    document.querySelector(".header").classList.remove("sticky");
   }
});


/*---------------------- buffe tabs ------------------------------*/
const menuTabs = document.querySelector(".buffe-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("buffe-tab-item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       menuTabs.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const menuSection = document.querySelector(".buffe-section");
       menuSection.querySelector(".buffe-tab-content.active").classList.remove("active");
       menuSection.querySelector(target).classList.add("active");
       // animation on scroll
       AOS.init();
   }
}) 

/*----------------------  menu tabs------------------------------*/

const menuTabs1 = document.querySelector(".meny-tabs");
menuTabs1.addEventListener("click", function(e){
   if(e.target.classList.contains("meny-tab-item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       menuTabs1.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const menuSection = document.querySelector(".meny-section");
       menuSection.querySelector(".meny-tab-content.active").classList.remove("active");
       menuSection.querySelector(target).classList.add("active");
      
   }
}) 

