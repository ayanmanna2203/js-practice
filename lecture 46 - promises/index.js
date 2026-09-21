

// // console.log("a");
// // const p = new Promise(function(resolve, reject){
    

// //     // resolve('hii')
// //     reject("bye")
// //     // console.log("b");

// // }) // consrtucter

// // console.log("c");

// // console.log(typeof p);
// // console.log(p);

// // p.then(function onfullfilled(val){
// //     console.log(val);
// // }, function onreject(val){
// //     console.log(val);
// // })       

// //********************************** */
// //.then(onfullfilled , onreject)


// //************************************* */
// // .catch( ) is always for reject
// // .catch is for error handling
// //************************************* */

// // const res =  p.then(function(val){
// //     console.log(val);
// // }) 
// //     .then(() => {})
// //     .then()
// //     .then()
// //     .catch(function (val){
// //         console.log(val);
// //     })
// //     .finally(function(){
// //         console.log("ye to hamesha chalega");
// //     })
   
// console.log("a");

// const p2 =new Promise(function f1(resolve,reject){
//     console.log("b");
//     // resolve("hello")  // ye line batati hai ki fulfilled hai ya rejectted hai
//     reject("Bye")
//     console.log("random");
// })
// p2.then(function f2(val){
//     console.log("then");
//     console.log(val);
// }).catch(function f3(){
//     console.log("catch");
// }).finally(function f4(){
//     console.log("finally");
// })
// console.log("c");




// function fun1(callback){
//     console.log("hii");
//     callback()
// }

// function cb(){
//     console.log("this is callback function");
// }

// fun1(cb)





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


    // console.log("Pizza searching....");
    // setTimeout(function()  {
    //     console.log("here is the pizza menu");
    //     // cb1()
    //    let price = 500;
    //    cb1(price)
    // }, 2000);

}


// function addToCart(cb2){
//     console.log("Pizza adding to cart....");
//     setTimeout(function(){
//         console.log("Pizza added to cart");
//         cb2()
//     },3000)
// }

// function payment(price, cb3){
//     console.log(`paymen initiated , Amount: ${price}`);
//     setTimeout(function(){
//         console.log(`payment completed , amount: ${price}`);
//         cb3()
//     },5000)
// }




// searchPizza(function(price){
//     addToCart(function(){
//         payment (price,function(){
//             console.log("bas aa hi gaya pizza");
//         })
//     })
// })


// searchPizza().then(function (price) {
//     console.log(price);
// })


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

let res =searchPizza()

res.then(function (price){
    // console.log(price);
    return addToCart(price);
}).then(function(price){
    return payment(price)
}).catch(function(){
    console.log('payment failed try it again');
})
// console.log("Pizza adding to cart....");
// setTimeout(function(){
//     console.log("Pizza added to cart");
//     cb2()
// },3000)
