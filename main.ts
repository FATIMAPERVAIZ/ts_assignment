////////////////////////Chapter 1 solutions/////////////////////////////
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a: number, b: number): number {
    return Math.pow(a, b);
}
console.log(`2 raised to the power of 3 is: ${power(2, 3)}`);
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 
function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const year = 2024;
console.log(isLeapYear(year) ? `${year} is a leap year` : `${year} is not a leap year`);

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function avg(m1: number, m2: number, m3: number): number {
    return (m1 + m2 + m3) / 3;
}

function perc(m1: number, m2: number, m3: number): number {
    const max = 300; // Maximum marks for 3 subjects
    const obtained = m1 + m2 + m3;
    return (obtained / max) * 100;
}

function main(m1: number, m2: number, m3: number): void {
    const average = avg(m1, m2, m3);
    const percentage = perc(m1, m2, m3);

    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

const sub1 = 85;
const sub2 = 90;
const sub3 = 78;

main(sub1, sub2, sub3);

//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
function customIndexOf(str: string, char: string): number {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

const text = "Fatima";
const target = "t";
const index = customIndexOf(text, target);

console.log(`Index of '${target}' in "${text}" is: ${index}`);
//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

function removeVowels(sentence: string): string {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        switch (sentence[i].toLowerCase()) {

            case 'a':

            case 'e':
            case 'i':

            case 'o':

            case 'u':
                // Do nothing for vowels
                break;
            default:
                result += sentence[i]; // Add non-vowel characters to result
        }
    }

    return result;
}

const sentence = "This is a test sentence.";
const withoutVowels = removeVowels(sentence);

console.log(`Original sentence: "${sentence}"`);
console.log(`Without vowels: "${withoutVowels}"`);

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui. 

function countSuccessiveVowels(text: string): number {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        const char1 = text[i];
        const char2 = text[i + 1];

        switch (char1.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (char2.toLowerCase()) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++; // Increment count if two successive vowels are found
                        break;
                }
                break;
        }
    }

    return count;
}


const msg = "Pleases read this application and give me gratuity";
const successiveVowelsCount = countSuccessiveVowels(msg);

console.log(`Number of successive vowels in the sentence: ${successiveVowelsCount}`);
//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
function toMeters(km: number): number {
    return km * 1000; // 1 km = 1000 meters
}

function toFeet(km: number): number {
    return km * 3280.84; // 1 km = 3280.84 feet
}

function toInches(km: number): number {
    return km * 39370.1; // 1 km = 39370.1 inches
}

function toCentimeters(km: number): number {
    return km * 100000; // 1 km = 100000 cm
}

function mainFunction(distanceKm: number): void {
    console.log(`Distance in meters: ${toMeters(distanceKm)} m`);
    console.log(`Distance in feet: ${toFeet(distanceKm).toFixed(2)} ft`);
    console.log(`Distance in inches: ${toInches(distanceKm).toFixed(2)} in`);
    console.log(`Distance in centimeters: ${toCentimeters(distanceKm)} cm`);
}

const distance = 2; // Distance in kilometers
mainFunction(distance);
//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 
function calculateOvertimePay(hoursWorked: number): void {
    const regularHours = 40;
    const overtimeRate = 12; // Rs. 12 per hour

    if (hoursWorked > regularHours) {
        const overtimeHours = hoursWorked - regularHours;
        console.log(`Overtime pay: Rs. ${overtimeHours * overtimeRate}`);
    } else {
        console.log(`No overtime pay, as hours worked are 40 or less.`);
    }
}

const hoursWorked = 45; // Example input
calculateOvertimePay(hoursWorked);
//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 
function calculateCurrencyNotes(amount: number): void {
    amount *= 100;
    const hundredNotes = Math.floor(amount / 100); 
    amount %= 100; 

    const fiftyNotes = Math.floor(amount / 50);
    amount %= 50;

    const tenNotes = Math.floor(amount / 10);
    amount %= 10;

    // Print the result
    console.log(`100 denomination notes: ${hundredNotes}`);
    console.log(`50 denomination notes: ${fiftyNotes}`);
    console.log(`10 denomination notes: ${tenNotes}`);
}

const amount = 370; // Example input in hundreds ( 370 means 37000)
calculateCurrencyNotes(amount);

//////////////////////Chapter 2 Solutions//////////////////////


//----------Q1-------------//
// Array of items
var itemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
];

// Calculate total price of each item and all items
let totalPrice = 0;
itemsArray.forEach(item => {
    let itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    console.log(`${item.name}: ${itemTotal}`);
});

console.log(`Total Price of All Items: ${totalPrice}`);

//----------Q2-------------//
// Sample object
const user = {
    name: "John",
    email: "john@example.com",
    password: "123456",
    age: 25,
    gender: "Male",
    city: "New York",
    country: "USA"
};

// Check if properties exist
console.log("age exists:", "age" in user);
console.log("country exists:", "country" in user);
console.log("firstName exists:", "firstName" in user);
console.log("lastName exists:", "lastName" in user);


//----------Q3-------------//
// Constructor function
// Interface for Person
interface Person {
    name: string;
    age: number;
    gender: string;
}

// Constructor function to create a Person record
function createPerson(name: string, age: number, gender: string): Person {
    return { name, age, gender };
}

// Create multiple records
let person1 = createPerson("Alice", 30, "Female");
let person2 = createPerson("Bob", 25, "Male");

console.log(person1);
console.log(person2);


//----------Q4-------------//

// Constructor function for population record
// Interface for PopulationRecord
interface PopulationRecord {
    name: string;
    gender: string;
    address: string;
    education: string;
    profession: string;
}

// Constructor function to create a PopulationRecord
function createPopulationRecord(
    name: string, 
    gender: string, 
    address: string, 
    education: string, 
    profession: string
): PopulationRecord {
    return { name, gender, address, education, profession };
}

// Create a record
let record1 = createPopulationRecord("John Doe", "Male", "123 Main St", "Bachelor's", "Engineer");

// Save record to localStorage
localStorage.setItem("record1", JSON.stringify(record1));

// Retrieve and log record from localStorage
let savedRecord = JSON.parse(localStorage.getItem("record1") || '{}');
console.log(savedRecord);

