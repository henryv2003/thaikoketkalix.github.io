
// PAGE LOADER
window.addEventListener("load", function(){

document.querySelector(".page-loader").classList.add("fade-out");
setTimeout(function(){
    document.querySelector(".page-loader").style.display="none";
},600);

// ANIMATION ON SCROLL
AOS.init();
})

// TOAST NOTIFICATION
const toasts = new Toasts({
    offsetX:20,
    offsetY:20,
    gap:20,
    width:300,
    timing:'ease',
    duration:'.5s',
    dimOld: false,
    position: 'top-right'
});

toasts.push({
    title: 'SPECIELL NOTIS!',
    content: 'Thaiköket har stängt lördagen den 7 Oktober!',
    style:'success',
});

// TOGGLE NAVBAR
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");
}

// CLOSE NAV WHEN CLICKING ITEM
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }

});

// STICKY HEADER
window.addEventListener("scroll", function(){
    if(this.pageYOffset < 60){
        document.querySelector(".header").classList.add("sticky");

    }
    else{
    document.querySelector(".header").classList.remove("sticky");
    }
});


// BUFFE TABS
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

// MENU TABS
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