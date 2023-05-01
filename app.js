var life = 100 ; //This is life bar
life= life - 10;//its 90
life=life+30;//Now its 120
var name = "Gamer";//This is name displayed

var checkout = true;
 var box=null;
let a=prompt("Hey whats your age?");
a= Number.parseInt (a) ; //Converting the string to a number
if(a<0) {
    alert("This is an  invalid age");
}
else if (a<9){
    alert("Do not even think of driving");

}

else if (a<18 && a>=9){
alert("Still you cannot drive.");
}

else
alert("You can drive.");
const here = 2;
console.log(a);

console.log("You can", a<18? "not drive" : "haha drive");
