
let form = document.querySelector("form")
let username = document.querySelector("#name")
let errormsg = document.querySelector("#error")
let submitmsg = document.querySelector("#submit")
let btn = document.querySelector("button")
function validUsername(username) {

    
    if (username === "Ayan Manna") {
        return true;
    }
    else {
        return false;
    }
}
form.addEventListener("submit", (e) => {
    // submitmsg.classList.remove("hidden")
    e.preventDefault();

    if(validUsername == true){
          
    }

      submitmsg.classList.remove("hidden")


})

