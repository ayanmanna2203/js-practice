
let notEligible = students.filter(student => student.roll>30).map((student) => student.name)
console.log(notEligible);