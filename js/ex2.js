console.log("Flowers's Output from HW 3 Example 2");

const input = prompt("Hello, what is your name and how many units have you completed? \n(Please seperate with a comma.)");
const inputSplit = input.split(",")
const namez = inputSplit[0]
const italicName = namez
const inputNumber = inputSplit[1]

if ((inputNumber >= 0) && (inputNumber <= 30)) {
    let a = "Freshmen";

    alert(`Hello ${inputSplit[0]} \nYour grade standing is ${a}.`);
}
 else if ((inputNumber >= 31) && (inputNumber <= 60)) {
    let b = "Sophomore";
    alert(`Hello ${inputSplit[0]} \nYour grade standing is ${b}.`);
} 
else if ((inputNumber >= 61) && (inputNumber <= 90)) {
    let c = "Junior";
    alert(`Hello ${inputSplit[0]} \nYour grade standing is ${c}.`);
}
else if (inputNumber > 90) {
    let d = "Senior";
    alert(`Hello ${inputSplit[0]} \nYour grade standing is ${d}.`);
}
