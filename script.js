/*
// 1. Let's go on vacation

let planeTicket = 150;
let money = 450;
let vacationTime = false;

if ((money >= planeTicket) && vacationTime) {
    console.log("true");
} else {
    console.log("false");
}
// Instructor Solution: console.log(money >= planeTicket && vacationTime)

// 2. Multiple choice question - no coding

// 3. Can I buy a soda?

let money1 = 1;
let costOfSoda = 1;

if (money1 < costOfSoda) {
    console.log('I need to earn some more money!');
} else {
    console.log('I can buy a soda!');
}

// 4. Multiple choice question - no coding

// 5. Module - Is that your finalAnswer?
// Using the variable num1 and num2, create a variable finalAnswer that is the remainder of num1 divided by num2.

let num1 = 7
let num2 = 5

let finalAnswer = num1 % num2
console.log(finalAnswer)

// Instructor Solution:
// var finalAnswer = num1 % num2;
// console.log(finalAnswer);

// 6. Multiple choice question - no coding

// 7. Print the smaller number, if same, print same

let num3 = 2
let num4 = 2

if (num3 === num4) {
    console.log("same");
} else if (num3 < num4) {
    console.log(num3);
} else {
    console.log(num4);
}

// 8. Multiple choice question - no coding

// 9. Number Comparison

let myNumber = 7

if (num1 === myNumber) {
    console.log(num1 + ' is equal to my number, ' + myNumber);
} else if (num1 < myNumber) {
    console.log(num1 + ' is smaller than my number, ' + myNumber);
} else {
    console.log(num1 + ' is larger than my number, ' + myNumber);
}

var num10 = 37;

if (num10) {
   console.log("Parakeet");
} else {
   console.log("Parrot");
}

// 11. Print the larger number, if same print "num1 is equal to num2"

if (num1 === num2) {
    console.log('num1 is equal to num2');
} else if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// 12. Multiple choice question - no coding

// 13. Nested Statement

if (num1 >= num2) {
    if (num3 >= num4) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");

// 14. Multiple choice question - no coding

// 15. What is my Letter Grade?

let numberGrade = 61
let letterGrade

if (numberGrade >= 90) {
    letterGrade = "A";
    console.log(letterGrade);
} else if (numberGrade >= 80) {
    letterGrade = "B";
    console.log(letterGrade);
} else if (numberGrade >= 70) {
    letterGrade = "C";
    console.log(letterGrade);
} else if (numberGrade >= 60) {
    letterGrade = "D";
    console.log(letterGrade);
} else {
    letterGrade = "F";
    console.log(letterGrade);
}

// 16. Multiple choice question - no coding

// 17. Day of the week

let numberOfDay = 1

switch(numberOfDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("The number of day is invalid.");
}

// 18. Multiple choice question - no coding

// 19. Which month is it?

let monthNumber

switch(monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}

// Boolean Operators
// 1. Are they the same

str1 = 'hello'
str2 = 'Hello'

console.log(str1 === str2);

// 3. Equal or Strictly Equal

let a = 2;
let b = 2;
let c = "2";

console.log(a == b);
console.log(a == c);
console.log(a === c);

// 5. Greater Than & Less Than

num1
num2

console.log(num1 > num2);
console.log(num1 < num2);

// 7. Greater Than or Equal

let age = 120
let canDrive = false

console.log(age >=16)

// 9. Grade Comparison: Did I pass? Did I get an A?

let myGrade = 72
let passingGrade = 70

console.log(myGrade >= passingGrade);
console.log(myGrade >= 90);

// 11. Logical AND & OR
let a = 100
let b = 50
let c = 60
let d = 40

console.log(a > b || (b > d && c > d))

// 13. Is it the weekend?
let day = "saturday"

console.log(day === "Sunday" || day === "Saturday")

// 15. Not Equal
let var1 = 8
let var2 = 8

console.log(var1 !== var2);

// 17. Equality Comparison
let num1 = 23
let num2 = 32

if (num1 === num2) {
    console.log("num1 is equal to num2");
}

// 19. Old Enough to Drive?
let age = 16
let canDrive = false

if (age >= 16) {
    canDrive = true;
    console.log(canDrive);
}

// Loops
// 1. Looping Around

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 3. Final Countdown!
for (let i = 3; i > 0; i--) {
    console.log(i);
} 
console.log("It's the final countdown!");

// 5. Loop from 0 to x
// Write a for loop that prints the numbers 0 to the given variable x using console.log().

let x = 1

for (let i = 0; i <= x; i++) {
    console.log(i);
}

// 7. Loop from 1 to 100
// Write a for loop that loops from 1 to 100. If the iteration count is even, print the iteration count and "foo" using console.log().

for (let i = 1; i <=100; i++) {
    if (i % 2 === 0) {
        console.log(i + " foo");
    }
}

// 9. while Loop
// Write a while loop using the already declared variable userNumber.
// - check if userNumber is btwn 1 and 100
// - if it is, create a while loop that prints all integers starting with userNumber and ending with 100
// - if not, print "Your number was not between 1 and 100." to the console.
// Had to Google and use AI to help write this. Needed to nest the while loop inside an if statement; kept trying to nest if statement in while loop.

let userNumber = 99

let i = userNumber
if (i >= 1 && i <= 100) {
    while (i <= 100) {
    console.log(i);
    i++;
    }
} else {
    console.log("Your number was not between 1 and 100.");
}

Instructor Solution:
var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}

// 11. Multiplication Table: using the already declared variable num, create a for loop that prints out a multiplication table for num from 1 through 10.

let num = 10
let i = num

for(let i = 1; i <=10; i++){
    console.log(num + " x " + i + " = " + (num * i))
}

Instructor Solution:
for(var i = 1; i <= 10; i++) {
    console.log(num +" x " + i + " = " + (num*i) );
}

// 13. do while Loop: create a do while loop that will print the already declared variable userNumber.
// - after printing, add 6 to userNumber each time through the loop
// - stop the loop once userNumber is greater than or equal to 100
// - use console.log() to print the requested info

let userNumber = 9

do {
    console.log(userNumber);
    userNumber+=6;
} while (userNumber <= 100);

Instructor Solution:
do {
    console.log(userNumber);
    userNumber = userNumber + 6;
} while(userNumber <= 100);

// 15. for Loop: write a for loop that prints every third number from 0 up to and including 99, using console.log ().
// - use the modulo operator (%) to check if number is divisible by 3

for (let i = 0; i <= 99; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

Instructor Solution:
for(var i = 0; i <= 99; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

// 17. Fill Up a Bowl with Rice: Using the supplied variables requiredCupsOfRice and currentCupsOfRice, create a loop of your choice that will add cups of rice to a bowl.
// - the value of currentCupsOfRice has been declared and initialized to 0, and will represent the current number of cups in bowl
// - for every iteration, increment currentCupsOfRice by 1
// - each time a cup of rice is added, print "The bowl contains " + currentCupsOfRice + " cups of rice."
// - once the number of cups required has been reached, print "We have enough rice!"
// - Note: we don't need to know if the bowl is empty

let currentCupsOfRice = 0
let requiredCupsOfRice = 3

if (currentCupsOfRice <= requiredCupsOfRice) {
    while (currentCupsOfRice < requiredCupsOfRice) {
        currentCupsOfRice += 1;
        console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
    }
} console.log("We have enough rice!");

Instructor Solution:
while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');
*/

// 19. Let's play a game: This is an ADVANCED problem!
// Using a for loop, and the two already declared variables points and pointsReset, create a game.
// Rules of this Game:
// - the game will consist of 100 turns
// - on an even turn (if the number of turns is even), 5 points are added to your score
// - on an odd turn (if the number of turns is odd), you gain 3 points instead
// - if ever your score is equal to 125, your points total will reset back down to 25 points. This will only be allowed to happen once (use the variable pointsReset to keep track)
// - the game will run as long as both of the following 2 conditions are true:
//    1) the game has made it through 100 turns or less
//    2) you reach 290 points or more, whichever comes first

let pointsReset = false
let points = 0

for (let turns = 0; points <= 290 && turns <= 100; turns++) {
    if (points === 125 && pointsReset === false) {
        points = 25;
        pointsReset = true;
    } else if (turns % 2 === 0) {
        points += 5;
    } else {
        points += 3;
    }
    console.log("Turns: " + turns + " Score: " + points);
}
/*
Instructor Solution:
for (var i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if (i % 2 === 0){
        points = points + 5;
    } else {
        points = points + 3;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}
*/