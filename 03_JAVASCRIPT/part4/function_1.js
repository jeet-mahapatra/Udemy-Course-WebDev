
/* function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

console.log(makeTea("chai"))

// Arrow Function
const feedback = (chai) => {
    return `How the ${chai} was?`;
};
let result = feedback("Masala chai");
console.log(result);
 */


/* 
// JAVASCRIPT EXECUTION CONTEXT
const orderTea = (teaType) => {
    const confirmOrder = ()=>{
        return `Order Confirmed for ${teaType}`
    }

    return confirmOrder();
}

let ans = orderTea("lemon tea")
console.log(ans);
 */



/* let calculateTotal = (price ,quantity) => {
    return (price * quantity);
}

let totalCost = calculateTotal(5,10)
console.log(totalCost);
 */

/* const person = {
    name: "Jeet",

    sayName: function() {
        console.log(person.name);
    }
};

person.sayName();  // Jeet */

/* 
function processFunc(name){
    return `Hi ${name} ,  How are you?`
}

function callback(clb){
    return clb("JEET");
}

let ans = callback(processFunc);
console.log(ans);
 */

 function createTeaMaker(name){
    let score = 100
    return function (teaType){
        return `Making ${teaType} , by ${name} , score is ${score}`;
    }
 }

 let teaMaker = createTeaMaker("JEET");
 console.log(teaMaker);
 let result = teaMaker("Lemon tea");
 console.log(result);
 
 