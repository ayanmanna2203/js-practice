console.log("hello ,Manna");
let product1=[ "iphone", 562947 , 7.5 , 45, 300];

let product= {
    name: "iphone",
    price: 59999,
    avgRating:4.5,
    totRev: 75,
    printproductNAme: function(){
        console.log("iphone 18 pro max");
        
    },
    productPrice(){
        console.log(this.price);
    }
}
console.log(product1);
console.log(product);

console.log(product1[0]);
console.log(product.name);
console.log(product.printproductNAme());
console.log(Object.keys(product));
console.log(Object.values(product));
for( value of product1){  //for array 
    console.log(value);
}

product1.forEach(function (value,index){  // give both index and value for array
    console.log(index,value);
})
for ( value in product){   //use for object
    console.log(value); 
}


product1.forEach( function(value, index) {   //use for array
    console.log(index,value);
})


// const [name , p, rating, customers, dis]=product1; // destructuring of array
// console.log(price);
 


// let {p, printproductNAme, avgRating}=product


// console.log(p, printproductNAme(), avgRating);


for( value of Object.keys(product)){
    console.log(value);
}
for( value of Object.values(product)){
    console.log(value);
}


for([a , b] of Object.entries(product1)){  // another way to print array index and value
    console.log(a,b);
}



arr=[56,73,57,274,81,43,56]


console.log(arr);

console.log(...arr);  // unboxing of an array

console.log(Math.min(...arr));
console.log(Math.min(arr));

let a=[1,2]

let b=[3,4]
let c= [...a, ...b]
console.log(c); // azadi
console.log([a,b])  // nested array

const [n , p ,...hello]=['iphone', 582038, 4.5 , 75, 10]  // rest : bachi hui chiz ko pack kar deta hai

console.log(hello);

function add(...numbers){
    console.log(numbers);
}
 console.log(add(4,5,2,5,2,6,2,6,2));

 function addition(...numbers){
    let total= 0;
    for(value of numbers){
        total+= value;
    }
    return total;
 }

 console.log(addition(4,5,2,5,6,4,6));

