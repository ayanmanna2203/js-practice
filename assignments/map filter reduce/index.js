

// let arr =["laptop" , "mobile" , "headphones"]

// let upperarr = arr.map(item => item.toUpperCase())
// console.log(upperarr);

// const arr =["100" , "200" , "300"]
// let addsymbol = arr.map(items => `${"$"}${items}`)
// console.log(addsymbol);

// let details =[
//     {
//         name:"Rahul",
//         email : "rahul@example.com"
//     },
//     {
//         name:"Priya",
//         email: "priya@eample.com"
//     }
// ]

// let detailNames = details.map( users => users.name)
// console.log(detailNames);

// let prizes =[ 100 , 200 , 300]
// console.log("original:",prizes);

// const newPrizes = prizes.map( amount => amount*1.1)
// console.log(newPrizes);


// let arr =[
//     {
//         name: "Laptop", 
//         price: 50000

//     },
//     {
//         name:"Mouse",
//         price:500
//     }
// ]

// let stockUpdate = arr.map(product =>({
//     ...product,
//     instock:true
// }))

// console.log(stockUpdate);

// let arr = ["HTML", "CSS" , "JavaScript"]
// arr.forEach(element => {
//     console.log(element);
    
// });

// let arr =["html" , "css" , "javascript"]
// let upperArr = arr.map(element =>  element.toUpperCase())

// console.log(upperArr);

// let arr= ["Rahul" , "Priya" , "Aman"]
// let addUser = arr.map(items => `${"User: "}${items}`)
// console.log(addUser);

// let arr = [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: false }
// ]

// let users = arr.filter(names => names.name )
// console.log(users);


// let arr = [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "student" }
// ]
// let user = arr.filter(member => member.name==="Rahul")
// console.log(user);


// let arr =[
//  { name: "Mouse", price: 500 },
//  { name: "Keyboard", price: 1500 }
// ]
// let required = arr.filter(item => item.price>1000)
// console.log(required);

// let arr = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

// let gmails = arr.filter(mails => mails.includes("@gmail.com"))
// console.log(gmails);

// let prices = [ 500 , 1200 , 300]
// let sumPrizes = prices.reduce((sum , price) => sum +price , 0)
// console.log(sumPrizes);

// let items =["Laptop", "Mouse", "Keyboard"]

// let counts = items.reduce((acc) => acc+1 , 0 )
// console.log(counts);

// let items = [
//  { name: "Laptop", quantity: 1 },
//  { name: "Mouse", quantity: 2 }
// ]

// let itemCount = items.reduce((sum, element) => element.quantity +sum , 0)
// console.log(itemCount);

// let arr =[
//  { amount: 500 },
//  { amount: 1000 },
//  { amount: 750 }
// ]

// let SumPrize = arr.reduce((sum , prize) => sum +prize.amount , 0)

// console.log(SumPrize);

let arr = ["HTML", "CSS", "JavaScript"]

let mergeArr = arr.reduce((str, Element) => str + "," + Element)
console.log(mergeArr);