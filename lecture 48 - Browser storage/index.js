


// let storage = localStorage.setItem("num", 1)
// let storage2 = localStorage.setItem("num2", 2)
// let storage3 = localStorage.setItem("num3", 3)
// let storage4 = localStorage.setItem("num4", 4)


// let result = localStorage.getItem("num")
// console.log(result);

// let result2 = localStorage.key("0")
// console.log(result2);

// // let result3 = localStorage.removeItem("num")


// document.querySelector("#Clear-local-storage").addEventListener("click", ()=>{
//     localStorage.clear()
// })

// let todos =JSON.parse(localStorage.getItem("todos") ) || []



// const todoForm = document.querySelector("#todoform")
// const todoinput = document.querySelector("#todoinput")
// const todoList = document.querySelector("#todoList")
// // const btn = document.querySelector("button")
// const formBtn = document.querySelector("#form-btn")
// const taskCount = document.querySelector("#task-count")
// const completeCount = document.querySelector("#complete-count")

// let editTodoid = null;




// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const todovalue = todoinput.value.trim();
//     // todos.push(todovalue)
//     // let newtodo = {
//     //     id: Date.now(),
//     //     text: todovalue,
//     //     isCompleted: false
//     // }

//     if(!todovalue){
//         return
//     }
//      if(editTodoid){
//         todos = todos.map((todo)=>{
//             if(todo.id === Number(editTodoid)){
//                 return{
//                     ...todo,
//                     text: todovalue
//                 }
//             }
//             return todo
//         })
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }
//     else{
//            let newtodo = {
//         id: Date.now(),
//         text: todovalue,
//         isCompleted: false
//     }
//      todos.push(newtodo)
//      localStorage.setItem('todos', JSON.stringify(todos));
//     }
//    todoinput.value = ""
//     rendertodo();

    

// })



// function rendertodo() {
//     todoList.innerHTML = ""
//     todos.forEach(function (todo) {
//         addtodo(todo)
//         // localStorage.setItem('todos', JSON.stringify(todos));
//     })
//     formBtn.textContent ="Add"
   
// }

// rendertodo();


// function addtodo(todo) {
//     const li = document.createElement("li")
//     // li.textContent = todo.text
//     // todoList.append(li)
//     li.dataset.id = todo.id
//     li.className = `flex justify-between  gap-5 border px-2 rounded-sm py-2 mt-2`
//     li.innerHTML = `
//       <div class="flex gap-2  flex-wrap ">
//                         <input data-action="toggle" type="checkbox" ${todo.isCompleted === true ? 'checked' : ''} data-id=${todo.id}>
//                         <p class="flex-1 ${todo.isCompleted ? "line-through":""} ">${todo.text}</p>
//                         </div>
//                         <div class="flex gap-2 flex-wrap">
//                             <button data-action="edit" data-id=${todo.id}>Edit</button>
//                             <button data-action="delete" data-id=${todo.id}>Delete</button>
//                         </div>
//     `

//     todoList.append(li)
//     taskCount.textContent = `TASKS(${todos.length})`
//     completeCount.textContent = `COMPLETED:${todos.filter((todo)=> todo.isCompleted).length}`

// }

// todoList.addEventListener('click', (e) => {
//     let li = e.target.closest('li')
//     let btn = e.target.closest('button')
//     let action = e.target.dataset.action;
//     let id = li.dataset.id;
//     let checkbox= e.target.closest('input[type ="checkbox"]')
//     // console.log(id);
//     // console.log(checkbox);

//     if (action === "edit") {
//         // console.log("editing...");
//         // let currentTodo = todos.find((todo)=>{
//         //     if(todo.id === Number(id)){
//         //         return todo
//         //     }
//         // })

//         // todoinput.value = currentTodo.text

//         // formBtn.textContent ="update"

//         startEdit(id)
//         // formBtn.textContent="Add"

//     }
//     if (action === "delete") {
//         deletTodo(e, id)
//         // rendertodo();
//     }

//     if (action === "toggle") {
//         // console.log(action);
//         todos = todos.map((todo) => {
//             if (todo.id === Number(id)) {
//                 return {
//                     ...todo,
//                     isCompleted:!todo.isCompleted   
//                 }

//             }
//             // console.log(todos);
//             return todo;

//         })
//         localStorage.setItem('todos', JSON.stringify(todos));
//         rendertodo()
//         // formBtn.textContent="Add"
//         // console.log(todos);
//     }
// })

// function deletTodo(e, id) {
//     e.target.closest('li').remove()
//     todos = todos.filter((todo) => {
//         if (todo.id !== Number(id)) {
//             return todo
//         }
//     })
//     localStorage.setItem('todos', JSON.stringify(todos));


// }

// function startEdit(id){
//    editTodoid = id;
//     let currentTodo = todos.find((todo)=>{
//             if(todo.id === Number(id)){
//                 return todo
//             }
//         })

//         todoinput.value = currentTodo.text

//         formBtn.textContent ="update"

 
// }




// // console.log(todos);


// fetch("https://api.github.com/users/nishantsaini2331"). 
//     then(data => data.json()).
//     then(data => console.log(data))


async function getUser(username="ayanmanna2203"){
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data =await response.json()
   return data
}

// getUser()

document.querySelector("#github-form").addEventListener("submit", async (e)=>{
    e.preventDefault()

    let username =document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `
        <img src="${data.avatar_url}" alt="">
        <h2>${data.name}</h2>
        <i>username :${data.login} </i>
        <p>Bio : ${data.bio}</p>
        <p>followers :${data.followers} </p>
        <p>following : ${data.following}</p>
        <p>Public repose : ${data.public_repos}</p>`
})

