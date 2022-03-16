// function getTwoNumbers(firstName,lastName){
//     let fullName = firstName + "d"+ lastName;
//     return fullName;
// }
// let result = getTwoNumbers("John","Snow");
// let expected = "John Snow";
// if(result !== expected){
//     throw new Error(`${result} is not equal to ${expected}`);
// }
// console.log(getTwoNumbers("John"));

function getTaxAmount(amount,taxRate){
    return amount + (amount * taxRate);
}
let result = getTaxAmount(100,);
let expected = 105;
if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}