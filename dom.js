//DOM MANIPULATION 



//GetElementById()
const title = document.getElementById('main.heading');

console.log(title);


var div1=document.getElementById('div1');




//GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');

console.log(listItem);

var unicycle=document.getElementsByClassName('unicycle');






//getElementByTagName()

const listItems = document.getElementsByTagName('li');

console.log(listItems);


var paragraphs=document.getElementsByTagName('p');




//querySelector()
const query=document.querySelector('div');
console.log(query);

var queryUnicycle=document.querySelector('.unicycle');



//querySelectorAll()
const queries=document.querySelectorAll('div');
console.log(queries);



var queryAll = document.querySelectorAll('.unicycle,#div2');





/*const heading=document.querySelector('#main-heading');
heading.style.color ='red';//can be applied only one line
console.log(title);*/


var text="<h2>Hello</h2>";


for(i=0;i<queryAll.length;++i){
queryUnicycle.innerHTML=text;

}


var line=document.getElementById('line');
var attribute=document.getElementById('attribute');
line.style.color='red';
line.style.background='yellow';

attribute.style.boxShadow="2px 2px 5px 1px blue";

console.log(line.style);
console.log(window.getComputedStyle(line));



function changeColor(obj){
    obj.style.color="Peru";
}

document.getElementById("myBtn").onclick=
changeBackgroundColorToMediumOrchid;

function changeBackgroundColorToMediumOrchid(){
    document.querySelector('body').style.background="MediumOrchid";

}

function removeLetterFromH1(){
    var h1=document.querySelector('h1')
    h1.textContent=h1.textContent.slice(0.-1);
}