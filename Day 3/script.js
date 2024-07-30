// Day 3: Control Structures

// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// let num = +prompt("Enter Number");
// if(num>0){
//     console.log("Positive")
// }
// else if(num<0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

// let age = +prompt("Enter age");

// if(age>=18)
// {
//     console.log("eligible to vote")
// }

// else
// {
//     console.log("Not eligible to vote")
// }

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
// let num1=70,num2=50,num3=100
// if(num1>num2 && num1>num3)
// {
//     console.log("number 1 is greater")
// }
// else if(num2>num3 && num2>num1)
// {
//     console.log("number 2 is greater")
// }
// else
// {
//     console.log("number 3 is greater")
// }

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// let daynum=+prompt("Enter the daynum")

// switch(daynum)
// {
//     case 1:
//         console.log("Monday")
//         break

//     case 2:
//         console.log("Tuesday")
//         break

//     case 3:
//         console.log("Wednesday")
//         break

//     case 4:
//         console.log("Thursday")
//         break

//     case 5:
//         console.log("Friday")
//         break

//     case 6:
//         console.log("Saturday")
//         break

//     case 7:
//         console.log("Sunday")
//         break
    
//     default:
//         console.log("Invalid number")    
// }

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

// let score=+prompt("Enter the score")
// switch (true)
// {
//     case score > 90 && score <= 100:
//         console.log("Grade A")
//         break

//     case score > 80 && score <= 90:
//         console.log("Grade B")
//         break

//     case score > 70 && score <= 80:
//         console.log("Grade C")
//         break

//     case score > 60 && score <= 70:
//         console.log("Grade D")
//         break

//     case score > 50 && score <= 60:
//         console.log("Grade E")
//         break

//     case score > 40 && score <= 50:
//         console.log("Grade F")
//         break

//     default:
//         console.log("Fail need improvement")
// }

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// let val=19
// val % 2 == 0 ? console.log("Given val is even"):console.log("Given val is odd")


// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year=2000

if(year % 400 == 0)
{
    console.log("The year is leap year")
}

else if(year % 4 == 0 && year % 100 != 0)
{
    console.log("The year is leap year")
}

else
{
    console.log("The year is not a leap year")
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.


// Achievement:
// By the end of these activities, students will:
// • Implement and understand basic if-else control flow.
// • Use nested if-else statements to handle multiple conditions.
// • Utilize switch cases for control flow based on specific values.
// • Apply the ternary operator for concise condition checking.
// • Combine multiple conditions to solve more complex problems.
