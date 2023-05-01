

function login(username,password){
    console.log(username,password);
}
login('john','secret');


function UpperCase(str){
    return (str.toUpperCase())
}
const result = UpperCase('javascript');

console.log(result)


function calculateArea(width,height){
    const area = width * height;
    return area;
}
const haha = calculateArea(10,20);
console.log(haha);

//Default parameters

function calculateArea(width,height){
    height=height === undefined?10:height;
    const area = width * height;
    return area;
}
const hehe = calculateArea(10);
console.log(hehe);

//variable scope
/*function download(){
   const filename='xyz';
}
download()
console.log(filename)//wont work because the variables we set inisde the function will only work or can be called inside the function.It wont recpgnize if called outside.
*/

//Expression
const logout = function(){
    console.log('Logged out')
}
logout()

//Callback

function formatText(text,format){
    return typeof format==='function'? format(text) : text.toUpperCase()
}
const re=formatText('Hi',function(text){
   return text.charAt(0).toUpperCase() + text.slice(1)
});
console.log(re)

//IIFE
//(function setup(){
  //  console.log('Setup done!')
//}())



