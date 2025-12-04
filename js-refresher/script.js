document.writeln("JS refresher")
const hello = []
hello.push("welcome","back","vinayak !")

console.log(hello)

const marks= [45, 78, 90, 32, 56, 88, 60]
//use filter-map  to +5 all passed student(50+) and retrieve
const ans= marks.filter(x=> x>=50).map(x=> x+5)
//limiting to 100 marks range
//map(x=> Math.min(x+5, 100))
console.log(ans)


//q2
const salaries = [20000, 35000, 50000, 12000, 45000]
// alternatively - spread out the map(){ if()...etc}
const a1= salaries.filter(sal=> sal<=25000).map(sal=> sal*1.2)
const a2= salaries.filter(sal=> 25000<sal<=40000).map(sal=>sal*1.1)
const a3= salaries.filter(sal=> sal>40000).map(sal=>sal*1.05)

//spread operator(...); 
//can be used inversely as a combiner in functions
//(rest operator- same syntax- diff context)
const newSal=[...a1,...a2,...a3]
console.log(newSal)
// also
// const salA=[a1.concat(a2,a3)]
// console.log(salA)