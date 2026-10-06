

let user1={
    name:"Ayan",
    age:24,
    country:"India",
    printName(){
        console.log(`Hii , I am ${this.name} from ${this.country}`)
    }
}

let user2={
    name:"Manna",
    age:24,
  
}

let user3={
    name:"Ram",
    age:24,
   
}


user1.printName()
user1.printName.call(user2, "Amarica")
user1.printName.call(user3)

