const array=[1,2,3,4,5,6,7,8,9];

// Push
array.push(10)
console.log(array)
//Unshift
array.unshift(0)
console.log(array)
//pop
array.pop()
console.log(array)

//shift
array.shift()
console.log(array)

array[0]='Sam';
console.log(array)

const names=['Smile','Smarika','Ichya'];
console.log(names)
//indexof
names.indexOf('Smarika')
console.log(names.indexOf('Smarika'))

//includes
names.includes('Smile')
console.log(names.includes('Smile'))

let channles=[{
    nam:'Smarika',
    num:1
},{
    nam:'Smile' ,
    num:2
},{
    nam:'Ichya',
    num:3
}]
console.log(channles.find(function(element){
    return element.num===2
}
))
console.log(channles.find((element )=> {
    return element.num===3
}
))


let names1 =['Ram','Shyam','Hari']
let names2=['kandel','paudel','Nepal']

let names3=(names1.concat(names2))

console.log(names3)
console.log(names3.slice(3,5))

//For loop
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
//Join
let student=['s','a','m']
console.log(student.join('_'))


//filter
let cities=[
    {
        name:'ktm', popu:1000} ,
       { name:'kushma',popu:2000
    }
];
console.log(cities.filter(city=>{
    return city.popu >100
}))

