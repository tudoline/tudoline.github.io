class Controller{
    constructor(erticleEl){
        this.article = document.getElementById(erticleEl);
        this.linksDom();
    }
    linksDom(){
        console.log(this.article.addEventListener("click", e =>{
            e.stopPropagation()
            const dataset = e.target.getAttribute("dataset");
            if(!dataset) return
            const creatLink = {
                dotado: () =>{
                    location.assign("http://mon.net.br/1f8mti")
                },
                sedutor: () =>{
                    location.assign("http://mon.net.br/g0yw4")
                },
                facebook: () =>{
                    location.assign("https://www.facebook.com/mulheerebonita")
                    console.log("click No Facebook")
                },
                instagram: () =>{
                    console.log("click No Instagram")
                    location.replace("https://www.instagram.com/belasmulhers100/")
                },
                twiter: () =>{
                    console.log("click No twiter")
                }
            }
            if(creatLink[dataset]) creatLink[dataset]();
            console.log(dataset)
        }))
    }
}