(()=>{
    "use strict"
    const input = document.getElementById("add-tasck");
    const button = document.querySelector(".inputFiel button")
    const ul = document.getElementsByClassName("todoList")[0];
    const lis = document.getElementsByTagName("li");
    let contador = document.querySelector(".contador");
    let clearAll = document.querySelector(".clear");
    contador.textContent = 0
    let tasck = getSaveData();
    function getSaveData(){
        let tasckData = localStorage.getItem("tasck")
        tasckData = JSON.parse(tasckData)
        return tasckData && tasckData.length ? tasckData:[
            {tesck: "teste 1",creat: Date.now()},
        ];
    }
    function setNewDate(){
        localStorage.setItem("tasck",JSON.stringify(tasck))
    }
    clearAll.addEventListener("click", e =>{
        e.stopPropagation()
        if(!tasck && !tasck.length) return
        tasck = []
        heWrites()
        input.focus()
        setNewDate()
        conta(tasck.length)
    })
    ul.addEventListener("click", e =>{
        const dataEctions = e.target.getAttribute("data-ection");
        if(!dataEctions) return
        let currentLI = e.target
        while(currentLI.nodeName !== "LI"){
            currentLI = currentLI.parentElement;
        }
        const currentIndex = [...lis].indexOf(currentLI)
        const actions = {
            delit: ()=>{
               tasck.splice(currentIndex, 1);
               conta(tasck.length)
               heWrites()
               setNewDate()
            }
        }
        if(actions[dataEctions]){
            actions[dataEctions]()
        }
    })
    function conta(value){
        contador.textContent = value
    }
    function heWrites(){
        ul.innerHTML = ""
        tasck.forEach(el =>{
            ul.appendChild(createElementInTheGift(el));
        })
    }
    function createElementInTheGift(obj){
        const liE = document.createElement("li");
        liE.textContent = obj.tesck
        const spans = document.createElement("span");
        spans.setAttribute("data-ection", "delit")
        const icons = document.createElement("i");
        icons.className = "fas fa-trash"
        icons.setAttribute("data-ection", "delit")
        spans.appendChild(icons)
        liE.appendChild(spans)
        return liE
    }
    function inputValue(name){
        tasck.push({
            tesck: name,
            creat: Date.now()
        })
        setNewDate()
        conta(tasck.length)
    }
    button.addEventListener("click", e=>{
        e.stopPropagation()
        if(!input.value) return
        inputValue(input.value);
        input.value = ""
        input.focus()
        heWrites()
    })
    heWrites()
})();