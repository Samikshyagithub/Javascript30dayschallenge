
class Person{
    talk(){
        return'Talking';
    
    }
}

const me=new Person();
const you=new Person();


Person.prototype.talk=function()
{
    return 'New and improved talking';
}


function hi(){
this.age=12;
}
const us= new hi();

class superhuman extends Person{
    fly(){
        return 'Flying';
        
    }
    
}
const our = new superhuman();

/*function Particle(){

    this.x=100;
    this.y=99;
this.show=function(){
    point(this.x,this.y)
}
}

Particle.prototype.show =function()
var p;
p= new Particle();*/
*/
//Classes
class Product{
    constructor (itemName,price,discount,){
        this.itemName =itemName;
        this.price=price;
        this.discount=discount;
        

    }
}
let pencil=new Product('Pencil',20,2);

const Product1=class Product{
    constructor (itemName,price,discount){
        this.itemName =itemName;
        this.price=price;
        this.discount=discount;
        

    }
   // get getDiscountValue(){
   //     return this.discount;
//    }
  //  set setDiscountValue(value){
    //     this.discount=value;
  //  }
};
let chair=new Product1('chair',499,20)







