


// function fun1(callback){
//     console.log("hii");
//     callback()
// }

// function cb(){
//     console.log("this is callback function");
// }

// fun1(cb)





function searchPizza(cb1){
    console.log("Pizza searching....");
    setTimeout(function()  {
        console.log("here is the pizza menu");
        // cb1()
       let price = 500;
       cb1(price)
    }, 2000);
    
}


function addToCart(cb2){
    console.log("Pizza adding to cart....");
    setTimeout(function(){
        console.log("Pizza added to cart");
        cb2()
    },3000)
}

function payment(price, cb3){
    console.log(`paymen initiated , Amount: ${price}`);
    setTimeout(function(){
        console.log(`payment completed , amount: ${price}`);
        cb3()
    },5000)
}




searchPizza(function(price){
    addToCart(function(){
        payment (price,function(){
            console.log("bas aa hi gaya pizza");
        })
    })
})

