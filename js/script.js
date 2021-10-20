(()=>{
"use strict"
const amburg = document.querySelector("#checkd-box");
const nav = document.querySelector(".header-nev-menu");
const main = document.querySelector(".main-index")
amburg.checked = false
nav.classList.add("header-nev-menu-left")
main.addEventListener("click", e =>{
    e.stopPropagation()
    nav.classList.add("header-nev-menu-left")
    amburg.checked = false
})
amburg.addEventListener("click", e =>{
    e.stopPropagation()
    if(amburg.checked){
        nav.classList.remove("header-nev-menu-left")
    }else{
        nav.classList.add("header-nev-menu-left")
    }
})
})();