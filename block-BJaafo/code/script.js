function getTwoNumbers(firstName,lastName){
    return firstName + " "+ lastName;
}
let result = getTwoNumbers("John");
let expected = "John Snow";
if(result !== expected){
    throw new Error("${result} is not equal to ${expected}");
}
let result2 = getTwoNumbers("John","Snow");
let expected2 = "John Snow";
if(result2 !== expected2){
    throw new Error(`${result2} is not equal to ${expected2}`);
}

function getTaxAmount(amount,taxRate){
    return amount + (amount * taxRate);
}
let result3 = getTaxAmount(100);
let expected3 = 105;
if(result3 !== expected3){
 throw new Error("${result3} is not equal to ${expected3}");
 }
 let result4 = getTaxAmount(100,5);
let expected4 = 105;
if(result4 !== expected4){
 throw new Error(`${result4} is not equal to ${expected4}`);
 }
