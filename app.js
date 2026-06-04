Q1 //

alert("Wasay")

Q2 //

let num = prompt("Enter Your Name")
alert("Welcome Your Honor " + num)

Q3 //

const age = 14
alert(age)

Q4 //

let num1 = prompt("Enter A number")
if (num1 >= 0) { alert("Your number in Positive") }
else { alert("Your Number is Negative") }
// 
// Q5 //

let num1 = prompt("enter your marks")
if(num1 >= 50){alert("You are pass good job")}
else{alert ("You are a failure")}

Q6 //

let fruits = ["apple","banana","mango","orange","grapes"]
console.log(fruits)

Q7 //

let colors = []
colors.push("red")
colors.push("green")
colors.push("blue")
console.log(colors)

Q8 //

let language = ["HTML","CSS","JS"]
language.pop()
console.log(language)

Q9 //

let name = ["Ali","Ahmed","Sara","Ayesha"]
console.log(name.length)

Q10 //

for (let i = 0; i <= 10; i++) { console.log(i) } 

Q11 //

for (let i = 10; i >= 0; i--) { console.log(i) }

Q12 //

let fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

console.log("<br><br>");

Q13 //

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i)
    }
}

Q14 //

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
let cityName = prompt("Enter a city name:");

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === cityName) {
        console.log
    (cityName + " is available in the array.");
    }
 else {
console.log(cityName + " is not available in the array.");
    }
}

// Q15

let numbers = [];

for (let i = 0; i < 3; i++) {
    numbers[i] = +prompt("Enter number " + (i + 1));
}

let largest = numbers[0];

for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] > largest) {
        largest = numbers[j];
    }
}

alert("Largest number is: " + largest);

// Q16

let numbers = [];

for (let i = 0; i < 3; i++) {
    numbers[i] = +prompt("Enter number " + (i + 1));
}

let smallest = numbers[0];

for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] < smallest) {
        smallest = numbers[j];
    }
}

alert("smallest number is: " + smallest);