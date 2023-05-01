try{
    const user={
        name:"Samikshya",
        age:21,
    };
    console.log(user.name)
    throw new Error ("There is an error");
    
}
catch(error){
    console.log(error);
    console.log("caught");
}
console.log("done");