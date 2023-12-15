const logInBtn = document.querySelector("#logInBtn");
const userName = document.querySelector("#inp");
const res = document.querySelector("#res");

console.log(userName);

function logIn(){
    const val = userName.value;
    if (val === ""){
        alert("plz write your name");
    }else if(val.length > 10){
        alert("too Long");
    }else{
        console.log(val);
    }
    console.log(val);
}
function loginSuccess(){
    const val = userName.value;
    res.innerHTML(val);
    res.classList.remove('hidden');
}   

logInBtn.addEventListener("click", logIn);