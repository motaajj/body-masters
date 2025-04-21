// document.querySelectorAll(`input`).forEach((e)=>{
//     e.onclick = ()=>{
//         e.style.border = `none`;
//     }
// })

let cartHolder = document.querySelector(`.cart-holder`);
let cartNumber = document.querySelector(`.cart-number`);
let Expiry = document.querySelector(`.Expiry`);
let cvv = document.querySelector(`.cvv`);
let button = document.querySelector(`button`);

cartHolder.onkeyup = ()=>{
    if(Number(cartHolder.value)){
        cartHolder.title = `just add strings`;
        cartHolder.value = ``;
    } else{
        cartHolder.style.color = `white`;
    }
    if(cartHolder.value.length < 10){
        cartHolder.style.borderColor = `red`;
        cartHolder.title = `please add the name in the card`;


    } else {
        cartHolder.style.borderColor = `green`;
        cartHolder.title = `this is good`;


    }
}


cartNumber.onkeyup = ()=>{
    if(Number (cartNumber.value)){
        
    } else if( typeof cartNumber.value == `string`) {
        cartNumber.value = ``;
        cartNumber.title = `just add Numbers`;

    }
    if(cartNumber.value.length < 16){
        cartNumber.style.borderColor = `red`;
        cartNumber.title = `please add the numbers in your card`;

    } else {
        cartNumber.style.borderColor = `green`;
        cartNumber.title = `this is good`;


    }
}

let rex = /\w+\/\w+/ig
let z = `22/22`;
console.log(rex.test(z))

Expiry.onkeyup = ()=>{
   
        let v = Expiry.value;
        Expiry.value = v
        .replace(/^(\d{2})(?:\/?)(\d{1,2})$/, `$1/$2`);

        if(Expiry.value.length < 5 && /\w+\//ig.test(Expiry.value) == false ){
            Expiry.style.borderColor = `red`;
            Expiry.title = `please insert the date of your card`;

        } else {
            Expiry.style.borderColor = `green`;
            Expiry.title = `this is good`;

    
        }
        
       
}


document.querySelector(`button`).onclick = ()=>{

}




cvv.onkeyup = ()=>{
    if(Number(cvv.value)){

    } else if(typeof cvv.value == `string`){
        cvv.value = ``;
    }
     

    if(cvv.value.length < 3){
        cvv.style.borderColor = `red`;
        cvv.title = `please put password (3 Numbers)`;
    } else {
        cvv.style.borderColor = `green`;
        cvv.title = `this is good`;


    }
}


document.querySelector(`select`).onchange = ()=>{
    document.querySelector(`select`).style.borderColor = `green`;
}

Expiry.onmousemove = ()=>{
    if(/\w+\/\w\w/ig.test(Expiry.value) == false){
        Expiry.value = ``;
        Expiry.style.borderColor= `red`;
    } else {
        Expiry.style.borderColor= `green`;

    }
}

button.onclick = ()=>{
    
    if(cartHolder.value.length < 10 || cartNumber.value.length < 16 || document.querySelector(`select`).value ==
    `-choose-` || Expiry.value.length < 5 || cvv.value.length < 3 || /\w+\//ig.test(Expiry.value) == false ){
        return false

    }
 
}

console.log(document.querySelector(`select`).value)

document.querySelector(`form`).onsubmit = ()=>{
    location.href  = `user.html`;
}