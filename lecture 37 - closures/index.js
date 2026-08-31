

// let a=8
// function outer(){
//     var a =6;
//     function inner(){
        
//         console.log(a);
//         //  var a=7;
//     }
//     inner()
// }
//  outer();

function outer(){
    let count = 0;
    function counter(){
        count = count +1;
        console.log(count);
    }
    return counter
}

const counter1= outer();
const counter2 = outer();
counter1()
counter1()  // this will update the previous call
counter2()
counter1()  // same jaga se execution context create hoga
