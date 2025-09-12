//animations

const obs=new IntersectionObserver((ent)=>{
    ent.forEach((ent)=>{
        if(ent.isIntersecting){
            console.log(ent.target)
            ent.target.classList.add("show")
        }else{
            ent.target.classList.remove("show")
        }
    })
},{})



const elementos = document.querySelectorAll(".contentLeft")
elementos.forEach(el => obs.observe(el))


const elementos1 = document.querySelectorAll(".contentRight")
elementos1.forEach(el => obs.observe(el))

const elementos2 = document.querySelectorAll(".project")
elementos2.forEach(el => obs.observe(el))