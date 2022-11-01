const menuToggle = document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");
const onClick=function(){
    menu.classList.toggle("opened");
}
menuToggle.addEventListener("click", onClick);