# Exercise 03: JavaScript Basics part 1

Title: Simulate a password validation program in JavaScript
Type: Individual Assessment
Score: (15 points)

## What I did
- I first created a function called isNotNumber() which checks if a character is a number which will be used later
- the validatePassword() function checks if a password is valid given the following conditions:
- 1. if the input string and check string are equal
- 2. if the input string has a length of at least 8 characters
- 3. if the string has at least one instance of a number, capital letter, or lowercase letter via the use of numCheck, upCheck, and lowChack counters
- A function to reverse a string via the backward concatenation of letters to an empty string is then created to reverse the input string using a for loop from i = string length -1, to i > -1
- Lastly, a function which stores a new, reversed password to a key-value pair object is created if the input password is valid via the validatePassword() function

