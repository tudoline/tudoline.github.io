class Controller{
    constructor(body){
        this.body = document.getElementsByClassName(body)[0]
        this.ini()
    }
    ini(){
        this.body.classList.add("js")
        this.menuAmburg()
    }
    menuAmburg(){
        let input = document.getElementById("menu")
        let navEl = this.body.querySelector("nav")
        
        input.checked = false

        navEl.classList.add("menu-none")

        document.querySelector(".menu-amburg label").addEventListener("click",e =>{
            e.stopPropagation();
            if(!input.checked){
                navEl.classList.remove("menu-none")
            }else{
                navEl.classList.add("menu-none")
            }
        })
    }
}