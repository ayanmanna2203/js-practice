"use strict"



// let student = {
//     name: "Ayan",
//     printName: function () {
//         console.log(this.name);
//     }
// }
// student.printName();

// console.log(this);

// console.log(global);  // window === this === globalthis
// function fun1(){       // 
//     console.log(this);
// }
// fun1();

// var a=7

// console.log(this.a);

// function fun1(){
//     console.log("function executed" , this);
// }

// fun1()


// let name1 = "hello"


// console.log(name1);

// let student = {
//     name: "ayan",
//     printName: function () {
//         console.log("hii", this.name);  // if i use student .name it will printboth ayan
//     }
// }

// student.printName();

// let student2 = {
//     name: "pritam",
//     printName: student.printName
// }

// student2.printName();

// var result = student.printName

// result();

// let product ={
//     name :"Iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }

// product.printName()  //error vi nahi mila aur undefined aa gaya instead of using the "user strict"
// let name = "somethimg"
// let product = {
//     name: "iphone",
//     printName: function () {
//         // let name ="something2"
//         const print = () => {

//             console.log(this.name);
//         }
//         print()
//     }
// }

// product.printName()



let nestedFunction = {
    name: "something",
    fun: function () {
        let product = {
            
            printName: function () {
                // let name ="something2"
                const print = () => {

                    console.log(this.name);
                }
                print()
            }
        }

        product.printName()
    }
}

nestedFunction.fun()

