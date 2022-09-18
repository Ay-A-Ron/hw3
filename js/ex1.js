console.log("Flowers's Output from HW 3 Example 1");

const input = prompt("Enter a number from 1-100:")
if (isNaN(input) ) {
    alert(`Sorry, ${input} is not a valid entry.`);
}
else {
    alert(`Thank you! You entered ${input}, a valid number.`);
}