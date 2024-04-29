var typed= new Typed(".auto-type",{
    strings:["Harshitha"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
});

const navEl=document.querySelector(".navbar");
window.addEventListener('scroll',()=>{
    if(window.scrollY > 70){
        navEl.classList.add('nav-scrolled');
    }
    else if(window.scrollY < 70){
        navEl.classList.remove('nav-scrolled');
    }
});
