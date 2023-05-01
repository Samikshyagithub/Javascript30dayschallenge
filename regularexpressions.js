let iamhiding="She is hiding behind the door.";
let hidingRegex = /Hiding|yes/i;
let result= hidingRegex.test(iamhiding);
console.log(result);


let extractStr="Extract the word 'coding' from the string.";
let codingRegex=/coding/;
let answer=extractStr.match(codingRegex);

console.log(answer);

let theStr="Extract extractthe word 'coding' from the string.";
let extractRegex=/extract/ig;
let ans=theStr.match(extractRegex);

console.log(ans);
let bgRegex=/b[aiu]g/;
let quotesample="Be aware of bugs.";
let vowelRegex=/[aeiou]/ig;
let res=quotesample.match(vowelRegex);

console.log(res);

let crowd='P1P2P3CCCP4CC';
let reCriminals=/C+/;
let matchedCriminals=crowd.match(reCriminals);
console.log(matchedCriminals);


