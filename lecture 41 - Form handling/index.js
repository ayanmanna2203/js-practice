const form = document.querySelector("form")
const charcount = document.querySelector("#charcount")
const username = document.querySelector("#name")
const bio = document.querySelector("#bio")
const country = document.querySelector("#Country")
const checkbox = document.querySelector("#checkbox")
const pashint = document.querySelector("#hint")
const password = document.querySelector("#pass")
const errormassage = document.querySelector("#errormassage")

// function isValidUsername(username){
//      if(username.value.trim().length=== 0){
//         errormassage.textContent = "enter your name"
//         return false
//      }

//      return true

// } 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = document.querySelector("#email").value
    // const password = document.querySelector("#pass").value

    if(username.value.trim().length=== 0){
        console.log("Enter  Your Name");
        // alert("please enter your name")
        errormassage.textContent = "please enter your name"
        return
    }

    console.log({ username: username.value, password, mail });
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





 