console.log("Flowers's Output from HW 3 Example 7");

const time = prompt("Please enter the current time(hr:min:s):");


let timeInput = time.split(':').map(item => item.trim());
let numberArray = [];

length = timeInput.length;

for (let i = 0; i < length; i++)

    numberArray.push(Number(timeInput[i]));

    console.log(numberArray);

if ((numberArray[0] > 23)||(numberArray[1] > 59)||(numberArray[2] > 59)) {
    console.log("One of these entries is not a vaild time interval.")
}

else{

    console.log(`Time input: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);
    
    if (numberArray[2] ===59) {
        numberArray[2] = 0;
        numberArray[1] ++;
        
        if (numberArray[1] ===60) {
            numberArray[1] = 0;
            numberArray[0] ++;

            if (numberArray[0] ===24) {
                numberArray[0] = 0
            }
        }
        
        console.log(`One second later: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);
    }

    else {
        numberArray[2] ++;
        console.log(`One second later: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);
    }

}
