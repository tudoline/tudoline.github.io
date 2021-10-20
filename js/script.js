(()=>{
"use strict"
const amburg = document.querySelector("#checkd-box");
const nav = document.querySelector(".header-nev-menu");
amburg.checked = false
nav.classList.add("header-nev-menu-left")
amburg.addEventListener("click", e =>{
    e.stopPropagation()
    if(amburg.checked){
        nav.classList.remove("header-nev-menu-left")
    }else{
        nav.classList.add("header-nev-menu-left")
    }
    console.log("Clicol")
})
nav.classList.add("header-nev-menu-left")
})()