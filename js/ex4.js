console.log("Flowers's Output from HW 3 Example 4");

const num1 = prompt("Please enter a number:"); 
const num2 = prompt("Please enter a second number:"); 

const add1 = num1 + num2;
const sub1 = num1 - num2;
const mul1 = num1 * num2;
const div1 = num1 / num2;
const mod1 = num1 % num2;

if ((isNaN(num1)) && (isNaN(num2))) {
    alert(`${num1}, ${num2} are not numbers.`);
} 
else if ((isNaN(num1)) || (isNaN(num2))) {
    alert(`${num1}, ${num2}: One of these is not a number.`);
}

else {
alert(`${add1}\n
${sub1}\n
${mul1}\n
${div1}\n
${mod1}\n`);
}