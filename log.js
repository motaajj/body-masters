let reg = /05\w+/ig

let er1 = document.querySelector(`.for-user`);
let phoneInput = document.getElementById(`phone`);
let er3 = document.querySelector(`.for-phone`);
let nameInput = document.getElementById(`username`);
phoneInput.value.match(reg);


nameInput.onkeyup = ()=>{
    
if(Number( nameInput.value) ){
    nameInput.value = ``;
    er1.textContent = `you need to put your reel name`;
    er1.style.visibility = `visible`;
 
} else{
    er1.style.visibility = `hidden`;

}
}






phoneInput.onkeyup =  ()=>{
    if(Number(phoneInput.value)|| phoneInput.value == 0){
        er3.style.visibility = `hidden`;
    
    } else if(String(phoneInput.value)){
        phoneInput.value = ``;
        er3.textContent = `please make sure about your phone number to be 10 numbers`;
        er3.style.visibility = `visible`;
    }
    }
  
    
  document.forms[0].onsubmit = ()=>{
    if(nameInput.value.length < 5){
        er1.textContent = `please put your full name`;
        er1.style.visibility = `visible`;
        return false
    } if(reg.test(phoneInput.value) == false){
        er3.textContent = `number should begin by 05`;
        er3.style.visibility = `visible`;
        return false
    }  
  }


document.querySelector(`span`).onclick = ()=>{
    location.href = `login.html`;
}


