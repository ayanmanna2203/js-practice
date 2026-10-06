class User{
        constructor(name , email){
        this.name = name;
        this.email = email;
    }
    login(){console.log("login");}
    logout(){console.log("logut");}

}

class Customer extends User {

    constructor(name , email, password){

        super(name , email, password)
        this.password = password
        // this.name = name;
        // this.email = email;
    }

    buyProduct(){console.log("buy product");}

    addTocart(){console.log("added to cart");}
    // login(){}
    // logout(){}
  



}

class Seller extends User{

    // constructor(name , email){
    //     // this.name = name;
    //     // this.email = email;
    // }

    addProduct(){console.log("add to cart");}
    // login(){}
    // logout(){}

}

class Admin extends User{

    // constructor(name , email){
    //     // this.name = name;
    //     // this.email = email;
    // }

    hideProduct(){}
    // login(){}
    // logout(){}

}

const c1 = new Customer("Ayan", "ayanmanna@gmail.com")
const s1 = new Seller("pappu", "pappu@gmail.com")
const a1 = new Admin("Akash" , "akhash@gmail.com")
console.log(c1);
console.log(s1);
console.log(a1);



class PremiumCustomer extends Customer{
    constructor(name, email , pass){
        super(name , email , pass)
    }
}

const p1 =new PremiumCustomer("Manna", "manna@gmail.com", "098765432")
console.log(p1);