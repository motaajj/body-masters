let img = document.getElementById(`user-pic`);
let change = document.querySelector(`#input-file`);

change.onchange = ()=>{

    window.localStorage.setItem(`user`, URL.createObjectURL(change.files[0]));
    img.src = window.localStorage.user;

}

img.src = window.localStorage[`user`];




document.querySelector(`button`).onclick = ()=>{
    location.href = `fitnes.html`;
}