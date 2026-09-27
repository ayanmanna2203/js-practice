

// function Product(name , price){
//     this.name = name
//     this.price = price
//     // console.log(this);
//     return this
// }

//  const p1 = new Product("iphone 18 pro duo" , 200000000)
//  const p2 = new Product("sanmsumng S24 ultra" , 15000000)

// console.log(p1);
// console.log(p2);
// random()

// console.log(this); 

// function outer(){
//     const random =() =>{
//     console.log(this);
// }
// random();
// }

// outer()


// class User{
//     country  = "India"
//     constructor(name){
//         this.name =name
//         console.log("Hello");
//     }
// }

// console.log( new User("Ayan"));


class BankAcc{
    #balance;
    static totalBankAccount=0 ;
    constructor(initialBalance){
        this.#balance = initialBalance
        BankAcc.totalBankAccount++;
    }

    get(){
        console.log(this.#balance);
    }
    withdraw(amount){
        if(amount> this.#balance){
            console.log("Bete tere pas  nahi hai");
            return
        }
        this.#balance = this.#balance - amount
    }

    depostie(amount){
        this.#balance = this.#balance + amount
    }
    static calculateTax(){
        console.log("tax is calculating...");
    }
}

let acc1 = new BankAcc(500)
let acc2 = new BankAcc(500)

let acc3 = new BankAcc(500)
let acc4 = new BankAcc(500)
let acc5 = new BankAcc(500)
// acc1.get()
// acc1.withdraw(500)
// acc1.get()

// acc1.calculateTax()

console.log(BankAcc.totalBankAccount);
