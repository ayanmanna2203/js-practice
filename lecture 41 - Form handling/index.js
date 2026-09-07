const form = document.querySelector("form")
const charcount = document.querySelector("#charcount")
const username = document.querySelector("#name")
const bio = document.querySelector("#bio")
const country = document.querySelector("#Country")
const checkbox = document.querySelector("#checkbox")
const pashint = document.querySelector("#hint")
const password = document.querySelector("#pass")
const errormassage = document.querySelector(".errormassage")
const mail = document.querySelector("#email")
const successmsg = document.querySelector("#successmsg")
// function isValidUsername(username){
//      if(username.value.trim().length=== 0){
//         errormassage.textContent = "enter your name"
//         return false
//      }

//      return true

// } 

function showerror(input, errormassage){
    input.parentElement.querySelector(".errormassage").textContent = errormassage
}

function clearError(input){
    input.parentElement.querySelector(".errormassage").textContent = ""
}


function validUsername(username){
    if(username.value.trim().length === 0){
        showerror(username , "Please Enter your Name")
        return false
    }
    if(username.value.trim().length < 3){
        showerror(username , "username must be at least 3 character")
        return false
    }

    clearError(username)
    return true
}

function validPassword(password){
    if(password.value.trim().length === 0){
        showerror(password , "Please Enter your password")
        return false
    }
    if(password.value.trim().length < 8){
        showerror(password , "password must be atleast 8 character")
        return false
    }

    clearError(password)
    return true
}


function vaildEmail(mail){
    if(mail.include('@') ){
        clearError(mail)
    }
    else{
        showerror(mail , "Enter a valid mail id")
    }

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // const password = document.querySelector("#pass").value

    const isUserValid = validUsername(username);
    const ispassValid = validPassword(password)
    // const ismailValid = vaildEmail(mail);
    // if(ismailValid == true){
    //     console.log("form isvalid");
    // }
    // else{
    //     console.log("form invalid");
    // }

    // if(username.value.trim().length=== 0){
    //     console.log("Enter  Your Name");
    //     // alert("please enter your name")
    //     errormassage.textContent = "please enter your name"
    //     return
    // }
    if(isUserValid === true && ispassValid ===true){
        successmsg.classList.remove("hidden")
    }
    else{
        successmsg.classList.add("hidden")
    }

    console.log({ username: username.value, password: password.value, mail: mail.value });
})



bio.addEventListener("input",(e) =>{
    const remaining =150 - bio.value.length;
    charcount.textContent = `${remaining} charecters remaining`
})

// username.addEventListener("input", (e)=>{
//     console.log("change event", username.value);
// })

// username.addEventListener("input", (e)=>{ 
//     console.log("inut event" , username.value);
// })

// checkbox.addEventListener("change", (e) =>{
//     console.log(checkbox.checked);
// })

// country.addEventListener("change", (e) =>{
//     console.log(country.value);
// })

// username.addEventListener("focus", (e)=>{
//     console.log("focus");
// })
// username.addEventListener("blur", (e)=>{
//     console.log("blur");
// })

// password.addEventListener("focus", (e)=>{
//     pashint.classList.remove("hidden")
// })
// password.addEventListener("blur", (e)=>{
//     pashint.classList.add("hidden")
// })





 