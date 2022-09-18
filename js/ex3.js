console.log("Flowers's Output from HW 3 Example 3");

const weekDay = prompt("What weekday is it today?"); 
const lowerCase = weekDay.toLowerCase();

switch (lowerCase) {
    case "monday": 
    alert(`You entered: ${weekDay} \nTomorrow is Tuesday.`); 
    break;

    case "tuesday": 
    alert(`You entered: ${weekDay} \nTomorrow is Wednesday.`); 
     break;

    case "wednesday":
    alert(`You entered: ${weekDay} \nTomorrow is Thursday.`);  
    break;

    case "thursday":
    alert(`You entered: ${weekDay} \nTomorrow is Friday.`);  
    break;

    case "friday":
    alert(`You entered: ${weekDay} \nTomorrow is Saturday.`);  
    break;
    
    case "saturday":
    alert(`You entered: ${weekDay} \nTomorrow is Sunday.`); 
    break;

    case "sunday":
    alert(`You entered: ${weekDay} \nTomorrow is Monday.`); 
    break;

    default:
    alert("Not a valid week day!");
    }