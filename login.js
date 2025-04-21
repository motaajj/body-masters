let reg = /05\w+/ig

let ageInput = document.getElementById(`age`);
let er1 = document.querySelector(`.for-user`);
let er2 = document.querySelector(`.for-age`);
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

ageInput.onkeyup =  ()=>{
if(Number(ageInput.value) ){
    er2.style.visibility = `hidden`;

} else if(String(ageInput.value)){
    ageInput.value = ``;
    er2.textContent = `please make sure to put your reel age(numbers)`;
    er2.style.visibility = `visible`;
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
    } if(ageInput.value.length < 2){
        er2.textContent = `please put your real age`;
        er2.style.visibility = `visible`;
        return false

    } if(reg.test(phoneInput.value) == false){
        er3.textContent = `number should begin by 05`;
        er3.style.visibility = `visible`;
        return false
    }  
  }





document.querySelector(`span`).onclick = ()=>{
    location.href = `log.html`;
}