

//synchronous js:


// console.log("task-1");

// console.log("task-2");

// console.log("task-3");

// console.log("task-1");
// setTimeout(function cb(){
//     console.log("task-2");
// })
// console.log("task-3");

// console.log("task-1");
// setTimeout(function(){
//     console.log("task-2");
// },3000)

// setTimeout(function(){
//     console.log("task-3");
// },2000)

// setTimeout(function(){
//     console.log("task-4");
// },5000)
 

// console.log("task-5");


// let count =0 
// let id =setInterval(function() {
//     count++;
//     if(count>5){
//         clearInterval(id)
//     }
//     console.log("hii");
// }, 1000);

const body =document.querySelector("body")

let colorStr = "012356789abcdef"

let color= "372648"

body.style.backgroundColor= `#${color}`