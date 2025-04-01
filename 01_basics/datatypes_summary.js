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

// Stack(primitive) Heap(Non-primitive)

let myytname="Sumi"
let anoname-myytname
anoname="chaiorcode"

console.log(myytname);
console.log(anoname);

let userone={
    email:"sumi@google",
    upi:"sumi@ybl"
}
let user2=userone
user2.email="user@google"
console.log(userone.email)
console.log(user2.email)
