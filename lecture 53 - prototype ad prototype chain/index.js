// // let obj  = {}

// // console.log(obj);
// let user = {
//      name: "ayan",
//      age: 12
// }

// let arr = [ 1, 2, 3]

// // console.log(arr.__proto__.__proto__ === user.__proto__);

// Object.prototype.allIndia =function(){
//     console.log("hum leke harenge ajadi");
// }


// console.log(arr.__proto__);

// Array.prototype.PrintItems = function(arr){
//     for(i=0; i<=arr.length ; i++){
//         console.log(arr[i]);
//     }
// }

// arr.PrintItems(arr)

// let color = ['red ' , " green" , "pink"]
// color.PrintItems(color)

// String.prototype.firstTwocCharacters = function(){
//     // console.log("ye function mene banai hai");
//     console.log(this[0]+this[1]);
    
// }

// "AYAN".firstTwocCharacters()
// arr.allIndia()
// "jhgfds".allIndia()


// function random ( ){


// }

// random.allIndia()

// Number(1).allIndia()/

//shadowing


// let user ={
//     Name : " Ayan",
//     tostring(){
//         console.log("ye apna method hai");
//     }
// }

// console.log(user.tostring());

let animal = {
    eat(){
        console.log("eat");

    }
}

let person = Object.create(animal)
person.walk = function(){}

let student = Object.create(person)

student.study = function(){
    console.log("study");
}

console.log(person);
console.log(student);

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("walk"));

