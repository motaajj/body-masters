window.onscroll = ()=>{
        if(window.scrollY >= 380){
           document.querySelectorAll(`#goals`).forEach((x)=>{
            x.style.transform =  `translateX(0px)`;


           })
        
        }
        if(window.scrollY >= 800){
                document.querySelectorAll(`section`).forEach((w)=>{
                        w.style.opacity = `100%`;
                })
        }

        if(window.scrollY >=1600){
                document.querySelector(`.bodymaster`).style.transform =  `translateX(0px)`;
        }
    
}

 document.querySelectorAll(`li`)[1].onclick = ()=>{
        window.scrollTo(0,1200);
        
 }

 document.querySelectorAll(`li`)[2].onclick = ()=>{
        window.scrollTo(0,600);
        
 }

 document.querySelectorAll(`li`)[3].onclick = ()=>{
        window.scrollTo(0,1900);
        
 }


let subscribe = document.getElementById(`sign`);
subscribe.onclick =()=>{
        window.scrollTo(0,1200);
}


let subs = document.querySelectorAll(`#sub-now`).forEach((w)=>{
        w.onclick = ()=>{
                console.log(w);
                window.location.href = `buy.html`;
        }
})

let login = document.querySelector(`.login`);
login.onclick = ()=>{
        window.location.href = `log.html`;
}