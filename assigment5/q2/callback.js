function op(numbers, operation) {
    const result = [];
    
    for (let num of numbers) {
        result.push(operation(num));  
    }

    return result;
}

//  double
function double(x) {
    return x * 2;
}

// square
function square(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4];

console.log("Doubled:", op(numbers, double));   // [2, 4, 6, 8]
console.log("Squared:", op(numbers, square));   // [1, 4, 9, 16]
