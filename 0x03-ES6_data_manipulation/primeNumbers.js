#!/usr/bin/env node 
// find all prime numbers from  a give array using filter

const array = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
, 11, 12, 13, 14, 15]

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

function isEven(num) {
    if (num % 2 == 0) {
        return num > 1;
    } else {
        return false;
    }
}
function isPositive(num) {
    if ( num > 0) {
        return num;
    }
}

console.log(array.filter(isPrime));
console.log(array.filter(isEven));

/// filter 
const arr = array.filter(isPositive);
const initialValue = 40;

const sumWithIntial = arr.reduce(
    (total, value) => total + value,initialValue);

    console.log(`SumwithInital ${sumWithIntial}`);

