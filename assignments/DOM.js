

// let title = document.getElementById("title")
// title.textContent ="Hello Javascript"

// let description = document.querySelector("#description")
// description.textContent="New Description"

// let items= document.querySelector(".item")

// items.classList.add("changeColor")
// //   for (let i = 0; i < items.length; i++) {
// //         items[i].classList.add(".changeColor");
// //     }
// // console.log();

 
let container = document.createElement("div");
container.id= "container"
container.innerHTML =`
    <h2>My Website<h2>
    <p>Welcome to my website!<p>
`

document.body.appendChild(container)

let pic = document.querySelector("#iphonepic")
pic.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXcTqGWg_EQyRoFba5Ag5ppZaN0f-6a86Zy0lrg9IlK-xMKiHIIiU5m1d&s=10")



let btn = document.querySelector("#btn")
btn.classList.add(".button")

btn.classList.remove(".button")
// document.body.appendChild(pic)


let productbtn = document.querySelector("#productBtn")

let id = productbtn.dataset.id;
console.log(id);


let newElement = document.createElement("p")

newElement.textContent = "This paragraph was created using JavaScript"

document.body.appendChild(newElement)

let skills = document.createElement("p")

skills.textContent = "CSS , JavaScript"

skills.append(", HTML")
skills.prepend("React, ")
document.body.appendChild(skills)


let cloneBtn = btn.cloneNode(true)
document.body.appendChild(cloneBtn)

