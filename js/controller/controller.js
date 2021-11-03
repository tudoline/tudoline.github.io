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
        if(!this.body.className == "js"){
            return
        }
        let buttons = document.getElementById("menu");
        let navEl = document.getElementsByClassName("menu-navegator")[0]
        buttons.checked = false;
        navEl.classList.add("menu-none")
        buttons.addEventListener("click", e =>{
            e.stopPropagation()
            if(buttons.checked){
                navEl.classList.remove("menu-none")
                console.log(navEl)
                console.log(navEl)
                console.log(buttons.checked)
            }else{
                navEl.classList.add("menu-none")
                // navEl.style.display = "none"
                console.log(buttons.checked)
            }
        });
        document.addEventListener("click", e =>{
            e.stopPropagation()
            navEl.classList.add("menu-none")
            buttons.checked = false
        })

    }
}