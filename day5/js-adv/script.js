//Array methods
//push - add one or more elements to end of the array

const fruits=[]
fruits.push("apple", "orange", "grapes")

console.log(fruits)

/*
fruits.forEach((fruits, index, arr)=>{
    console.log("favouritw fruit number :" + (index+1) + " :" + " fruit :" + fruits)
})*/

//template literal syntax
fruits.forEach((fruits, index)=>{
    console.log(`favouritw fruit number : ${index+1} : fruit :  ${fruits}`)

})


//map - transforms each item
//return a new array

const numbers = [1,2,3]
const doubled = numbers.map(num=>num * 2)

console.log(numbers)
console.log(doubled)

//reversal
const original = doubled.map(num=> num / 2)
console.log(original)

//filter - Keeps matching items of a condition
//returns a new array
const ages = [10,20,30,40,50]
const adults = ages.filter(age=> age>20)

console.log(adults)

const names = ["Kanshul","shaderone","jithu","knaaps"]
//const filtered1 = names.filter(x=>x[0]=="k" or x[0]=="K")
//console.log(filtered1)

//alternatively
const filtered2 = names.filter(x=>x.toLowerCase().startsWith("k"))
console.log(filtered2)

//find - first matching item
const users = [
    {id:1,name:"joel"},
    {id:2,name:"arun"},
    {id:3,name:"bilal"}
]

/*
const selected=[]
selected.push(users[0], users[1])
console.log(selected)*/
//single-line
users.forEach(user=>console.log(user.name))

//searching for
id=2
console.log(users.find(user=>user.id==2))

//includes- returns boolean
const items= ["pen", "pencil", "paper"]
console.log(items.includes("pen"))

const marks= [20,30,50,70,80,90]
//every- all items must be matching
console.log(marks.every(x=>x>=50))

//some- atleast one matching
console.log(marks.some(x=>x>=50))

//
const prices = [ 1234 ,5678, 1245, 6598]
// let sum = 0
// prices.forEach(x=>{sum+=x})
// console.log("sum :"+sum)

const sum=prices.reduce((total,price)=> total+price,0)
console.log(sum.toFixed(2)) //upto 2 decimal points

//sort
const nums =[5,2,9]
console.log(nums.sort((a,b)=>a-b))

//slice
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
const part = letters.slice(1,6)
console.log(part)


//splice - adds and/or removes array items
const animals = ["cat", "dog", "rabbit"]
animals.splice(1,1)
console.log(animals)

const [first, sec, third] = animals
console.log(first)
console.log(sec)

//array in object
// const book {
//     title: "bookbook",
//     author: ["alice", "mary"]
// }
// console.log(book.authors[0])

//object destructurinng - pulling values of an object easily

const student ={ name: 'Marc', grade: 'A'}

const {name, grade} = student //name,grade)

//javascript object notation // mainly in api calss - data exchange //
const person = {name:"Harish", age:18}
const jsonString =JSON.stringify(person)
console.log(jsonString)

// {"name":"Harish","age":18}

//JSON.parse()- converts JSON string to JS object
const person1 =JSOn.parse(jsonString)
console.log(person1)

