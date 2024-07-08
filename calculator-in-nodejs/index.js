// index.js

// Import the crypto module
const crypto = require("crypto");

// Get the command using process.argv
const operation = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
let degrees = Number(arg1);
let radians = degrees * (Math.PI / 180);

// Handle different operations using a switch statement
switch (operation) {
    case "add":
        // Check if both arguments are numbers
        if (!isNaN(arg1) && !isNaN(arg2)) {
            let num1 = Number(arg1);
            let num2 = Number(arg2);
            // Perform addition and log the result
            console.log(num1 + num2);
        } else {
            console.log("Enter only numbers");
        }
        break;

    case "sub":
        // Check if both arguments are numbers
        if (!isNaN(arg1) && !isNaN(arg2)) {
            let num1 = Number(arg1);
            let num2 = Number(arg2);
            // Perform subtraction and log the result
            console.log(num1 - num2);
        } else {
            console.log("Enter only numbers");
        }
        break;

    case "mult":
        // Check if both arguments are numbers
        if (!isNaN(arg1) && !isNaN(arg2)) {
            let num1 = Number(arg1);
            let num2 = Number(arg2);
            // Perform multiplication and log the result
            console.log(num1 * num2);
        } else {
            console.log("Enter only numbers");
        }
        break;

    case "divide":
        // Check if both arguments are numbers
        if (!isNaN(arg1) && !isNaN(arg2)) {
            let num1 = Number(arg1);
            let num2 = Number(arg2);
            // Perform division and log the result
            console.log(num1 / num2);
        } else {
            console.log("Enter only numbers");
        }
        break;

    case "random":
        let size = Number(arg1);
        // Check if the argument is a number
        if (isNaN(size)) {
            console.log("Enter Numbers only");
        } else {
            // Generate random bytes and log the result
            crypto.randomBytes(size, (err, buf) => {
                if (buf) {
                    const randNum = buf.toString("binary");
                    const length = randNum.length;
                    console.log(randNum);
                    console.log(length);
                } else {
                    console.log(`Error : ${err}`);
                }
            });
        }
        break;

    case "cos":
        // Check if the argument is a valid angle in degrees
        if (!isNaN(degrees)) {
            let cos = Math.cos(radians);
            // Log the cosine of the angle
            console.log(`cos ${arg1} deg : ${cos}`);
        } else {
            console.log("Enter a valid angle in Degrees");
        }
        break;

    case "sin":
        // Check if the argument is a valid angle in degrees
        if (!isNaN(degrees)) {
            let sin = Math.sin(radians);
            // Log the sine of the angle
            console.log(`sin ${arg1} deg : ${sin}`);
        } else {
            console.log("Enter a valid angle in Degrees");
        }
        break;

    case "tan":
        // Check if the argument is a valid angle in degrees
        if (!isNaN(degrees)) {
            let tan = Math.tan(radians);
            // Log the tangent of the angle
            console.log(`tan ${arg1} deg : ${tan}`);
        } else {
            console.log("Enter a valid angle in Degrees");
        }
        break;

    // Handle invalid operation
    default:
        console.log("Invalid operation");
}

console.log();
