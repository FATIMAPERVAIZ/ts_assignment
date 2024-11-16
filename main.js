"use strict";
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
    return Math.pow(a, b);
}
console.log(`2 raised to the power of 3 is: ${power(2, 3)}`);
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const year = 2024;
console.log(isLeapYear(year) ? `${year} is a leap year` : `${year} is not a leap year`);
