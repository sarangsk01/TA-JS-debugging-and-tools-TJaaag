//Testing Framework
function test(message,callback){
    try{
        callback();
        console.log("✅",message);
    }catch(error){
        console.error(error);
        console.log("❌",message);
    }
}

//Assertion Library
function expect(actual){
    return{
        toEqual: function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeEqual:function(expected){
            if(typeof actual !== expected){
                throw new Error(`${typeof actual} is not equal to ${expected}`);
            }
        }
    };
}
// Test for addition
function testAdd(){
    result = add(2,4);
    expected = 6;
    expect(result).toEqual(expected);
}
test("add 2 and 4",testAdd);

// Test for multiply
function testMultiply(){
    result = multiply(10,20);
    expected = 200;
    expect(result).toEqual(expected);
}
test("multiply 10 and 20",testMultiply);

// function for addition
function add(numA,numB){
    return numA + numB;
}
// 5 Tests for addition
test("add 2 and 4 to be equal 6",() =>{
    expect(add(2,4)).toEqual(6);
});
test("add 10 and 20 to be equal 30",() =>{
    expect(add(10,20)).toEqual(30);
});
test("add 20 and 30 to be equal 50",() =>{
    expect(add(20,30)).toEqual(50);
});
test("add 30 and 40 to be equal 70",() =>{
    expect(add(30,40)).toEqual(70);
});
test("add 40 and 50 to be equal 90",() =>{
    expect(add(40,50)).toEqual(90);
});

// function for addition
function multiply(numA,numB){
    return numA * numB;
}
// 5 Tests for multiplication
test("multiply 2 and 4 to be equal 8",() =>{
    expect(multiply(2,4)).toEqual(8);
});
test("multiply 10 and 20 to be equal 200",() =>{
    expect(multiply(10,20)).toEqual(200);
});
test("multiply 20 and 30 to be equal 600",() =>{
    expect(multiply(20,30)).toEqual(600);
});
test("multiply 30 and 40 to be equal 1200",() =>{
    expect(multiply(30,40)).toEqual(1200);
});
test("multiply 40 and 50 to be equal 2000",() =>{
    expect(multiply(40,50)).toEqual(2000);
});