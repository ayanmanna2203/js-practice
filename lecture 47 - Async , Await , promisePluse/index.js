


// async function f2(){
//     // console.log("hii");
//     return 11;
// }

// function f1(){
//     // console.log("hello");
//     return 10;
//     // return Promise.resolve(10)
// }


// // f2()
// // f1()
// // f2()

// // console.log(f2());
// f2().then((data)=>{
//     console.log(data);
// })
// console.log(f1());

// console.log("a");

// async function fun3(){
//     console.log("b");
// }

// console.log("c");

// fun3()


// async function fun3() {
//     // console.log("Hello");
//     return "Hello"

// }

// fun3().then(data =>{
//     console.log(data);
// })


// async function fun4() {
//     // fun3().then(data => {
//     //     console.log(data);
//     // })
//     let data = await fun3()
//     console.log(data);

// }

// fun4()


// console.log("1");
// async function fun3(){
//     // console.log("hello");
//     return "hello"
// }

// async function fun4(){
//     // console.log("hii");
//     return "hii"
// }

// async function fun5(){
//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data , data2); 
// }

// console.log("Manna");
// fun5()

// console.log("5");


function searchPizza(cb1) {
    return new Promise(function a(resolve, reject) {
        console.log("Pizza searching....");
        setTimeout(function () {
            console.log("here is the pizza menu");
            // cb1()
            let price = 500;
            //    cb1(price)
            resolve(price)
        }, 2000);


    })


    

}


function addToCart(price) {
    return new Promise(function a(resolve, reject) {
        console.log("Pizza adding to cart....");
        setTimeout(function () {
            console.log("Pizza added to cart");
            // cb2()
            resolve(price)
        }, 3000)
    })
}

function payment(price) {
    return new Promise(function a(resolve, reject) {
        console.log(`paymen initiated , Amount: ${price}`);
        setTimeout(function () {
            console.log(`payment completed , amount: ${price}`);
            resolve()
        }, 5000)
    })
}

// let res =searchPizza()

// res.then(function (price){
//     // console.log(price);
//     return addToCart(price);
// }).then(function(price){
//     return payment(price)
// }).catch(function(){
//     console.log('payment failed try it again');
// })



async function orderfood(){
    try{
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("Bass aa hi gaya");
    }catch(error){
        console.log(error);
    }
}
orderfood()
