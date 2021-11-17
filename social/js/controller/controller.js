class Controller{
    constructor(erticleEl){
        this.article = document.getElementById(erticleEl);
        this.linksDom();
    }
    linksDom(){
        this.article.addEventListener("click", e =>{
            e.stopPropagation()
            const dataset = e.target.getAttribute("dataset");
            if(!dataset) return
            const creatLink = {
                seductionEl: () =>{
                    location.assign("https://go.hotmart.com/O55128576I")
                },
                dotado: () =>{
                    location.assign("http://mon.net.br/1f8mti")
                },
                sedutor: () =>{
                    location.assign("http://mon.net.br/g0yw4")
                },
                facebook: () =>{
                    location.assign("https://www.facebook.com/mulheerebonita")
                },
                instagram: () =>{
                    location.replace("https://www.instagram.com/belasmulhers100/")
                },
                twiter: () =>{
                    return
                }
            }
            if(creatLink[dataset]) creatLink[dataset]();
        })
    }
}