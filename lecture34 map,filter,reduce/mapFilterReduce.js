// let student = {
//     name: "ayan",
//     rollNo: 34,
//     subject: ['math', 'english', 'hindi']
// }

// let { subject , name , rollNo}=student
// console.log(subject);

// let{...hello}=student
// console.log(hello);

//how to rename key

// let {subject: manna}=student  //change the name of key
// console.log(manna);

// assigning default value
// let { subject: manna , totalMarks=500, ...variable}=student
// console.log(totalMarks);


// let obj1={
//     name: "ayan",
//     phone: 7602671510
// }

// let  obj2 ={
//     address: "india",
//     adharacard: 539293883384,
//     name:'yash'                 // over write ho gaya
// }

// let obj3= {...obj1, ...obj2}  //using spread for objects use {} insted of []
// // console.log(obj3);


// const arr=[1, 2, ,3]
// arr[1]=['str', 'value']
// console.log(arr);

const obj = {
    name: "ayan",
    rollNo: 40,
    address: null
}

// obj={
//     class:'XII'    // replace the whole object
// }
obj.name = "sumit"

// console.log(obj);
// console.log(obj.address);

//optional chaining "?"
// console.log(obj.address?.street);  // whenever doubt of an 

// // console.log(obj?.address);

// splice---->Add , Delete, Replace

let arr1 = [1, 2, 3, 4, 5, 6]
// arr1.shift() //delete the first element of an array an returns it
// console.log(arr1);

// splice(start, deletcount)
// arr1.splice(1,3)  // delet particular elements

// arr1.splice(3,0,"manna") // ( replacing index, number of items removed, the element i want to add)

// console.log(arr1);

//slice----> trim array

// arr1.slice(1,3)
// console.log(arr1);
// console.log(arr1.slice(1,3)); // it doesnot return anything
// console.log(arr1.indexOf(5)); // the index of a particular element

// let res = arr1.find((value)=>{
//         return value ===7;            // find kisi element ko find karta hai based on your condition
// })

// console.log(res);

arr3 = [1, 2, 3, 4, 5, 6, [7, 8, 9, [10, 12, 13]]]


// console.log(arr3);
// console.log(arr3.flat(Infinity)); // array will be unboxed


//mutability

let arr4 = [67, 56, 54, 98, 76]
let arrcopy = arr4
let arrcopy2 = [...arr4]  // spread operator
// arrcopy2.pop()          // arr4 me vi change kar diya
// console.log(arr4)
// console.log(arrcopy2);


// map filter reduce (immutable methods)(all are array methods)

let originalPrice = [545, 276, 728]
let discountPrice = []

for (value of originalPrice) {
    discountPrice.push(value * 0.9)
}

// console.log(originalPrice);
// console.log(discountPrice);


// const dicountedPrice2= originalPrice.map((value)=>{
//     return value* 0.9

// })


let students = [
    {
        name: 'ayan',
        roll: 34,

    },
    {
        name: "diya",
        roll: 15
    },
    {
        name: 'sumit',
        roll: 20
    },
    {
        name: "andrew",
        roll: 50
    },
    {
        name: "rahul",
        roll: 40
    }

]

// console.log(students);

// const studenNames= students.map((student)=> student.name)
// const studentRoll = students.map((student)=> student.roll)
// console.log(studenNames);
// console.log(studentRoll);

// let boostsRoll =students.map((student)=>{
//     return {...student, roll: student.roll +10}
// })

// let boostsRoll =students.map((student)=> ({...student, roll: student.roll +10}))
// let sortedStudent =[] 


// students.map((student)=> {
//     if(student.roll <=20){
//         sortedStudent.push(student)
//     }
// })

// const sortedStudent = students.filter((student) => student.roll < 20)

// console.log(sortedStudent);


// let sortedMArks =students.map(student => student.roll<20); //returns bool array of same length
// console.log(sortedMArks);

// chaining --->(applying multiple filter or map)

let notEligible = students.filter(student => student.roll>30).map((student) => student.name)
console.log(notEligible);

//chaining process == filter--> map--> reduce

//reduce ---> return single value(num, bool, obj, arr)

// let marks =[47, 46,29,76, 27]
// let totalmarks = 0

// // marks.forEach((mark) => totalmarks+=mark)

// // console.log(totalmarks);
// const totalMarks =marks.reduce((accumulator, currentValue)=>{
//      return accumulator+currentValue
   
// },0)
// console.log(totalmarks);
// .reduce(accumulattor, currentvalue)


const attendence= ["present", "present", "absent", "present", "absent"]

// let obj1={}

// attendence.forEach((value)=>{
//     if(obj1[value]){
//         obj1[value] = obj1[value]+1

//     }else{
//         obj1[value]=1
//     }
// })

// console.log(obj1);
 