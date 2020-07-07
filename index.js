// sudo

// take an input of time
// 0 - 23 (hours)
const time = 23;

// Validate input
// We want to ensure it is a number
// and not another data type.
//attempts to convert to a number
const timeNumber = Number(time);

const isTimeNaN = isNaN(timeNumber);

// If not valid, exit exection
// console log a nice error message
// to the user

if (isTimeNaN === true) {
  console.log("Input Time is not valid");
  console.log(time + " " + "is Not a Number");
  return;
}

// Ensure input is between 0 and 23 (inclusive)
if (timeNumber < 0) {
  console.log(timeNumber + " is less than 0");
  console.log("Value must be between 0 and 23.");
  return;
}

if (timeNumber > 23) {
  console.log(timeNumber + " is greater than 23");
  console.log("Value must be between 0 and 23.");
  return;
}

// If valid, continue execution

// ...continue execution

// Print a greeting based on the time of day
// Good Morning 0 and 11
// Good Afternoon 12 and 17
// Good Evening 18 and 23

if (timeNumber >= 0 && timeNumber <= 11) {
  console.log("Good Morning!");
} else if (timeNumber >= 12 && timeNumber <= 17) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

// Exit the program
console.log("End of Program!");
