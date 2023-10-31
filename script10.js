// Practice Exercise for Chapter 10

// Variable containing a new date object with the current date and time
let todaysDate = new Date();

// Grab the value of the current month from todaysDate
let currMonth = todaysDate.getMonth();

// Upgrade todaysDate to a string in the local date format
todaysDate = todaysDate.toLocaleDateString();

// Write the value of todaysDate to the web document
document.getElementById("today").textContent = todaysDate;

// Logic that puts a message in the document if we are in a special month
if(currMonth === 9) {
	document.getElementById("special").textContent = "Happy Halloween!";
} else if(currMonth === 5) {
	document.getElementById("special").textContent = "Get resy for summer!";
} else {
	document.getElementById("special").textContent = "No special announcements this month.";
}

// Array variable containing the list of attendees
let roster = new Array("Tim", "Hector", "Samantha", "Jody", "Chris", "Alex", "Meghan", "Brian", "Jake", "Lisa");

// Sort the array in alphabetical order
roster.sort();

// Variable that will collect all of the loop data
let rosterHTML = "";

// Loop through the roster array, use the counter variable as the index for each person and add a line break after each name
for(let x = 0; x < roster.length; x++) {
	rosterHTML += roster[x] + "<br/>";
}

// When the loop is done, write the value of rosterHTML to the web document
document.getElementById("attendance").innerHTML = rosterHTML;

// Variable to hold onto a random number that works within the array's values
let rando = Math.floor(Math.random() * roster.length);

// Write the random person from the array to the web document
document.getElementById("coffee").textContent = roster[rando];