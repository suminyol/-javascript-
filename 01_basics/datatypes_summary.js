// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.9
const  isLoggedIn=false
const outTemp=null
let userEmail;

const id= Symbol('123')
const anid= Symbol('123')

console.log(id===anid);

const bigNumber=3498765334567889n

// Refrence (Non primitive)

// Array, Objects, Functions

const  heros=["shaktiman", "vk", "ak"]
let myObj={
    name: "Sumi",
    age: 20
}
const myFunc=function(){
    console.log("Hello World");
}

console.log(typeof myFunc);
