console.log("*************** BEGINNER ***************");
console.log("Q1. RETURN THE SUM OF TWO NUMBERS");
/** Create a function that takes two arguments as functions
 * and return their sum.
 */

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

console.log("Q2. CONVERT HOURS INTO SECONDS");
/** Create a function that convets hours into seconds
 */

function hoursIntoSeconds(hours) {
  return hours * 3600;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

console.log("Q3. CALCULATE THE PERIMETER OF A RECTANGLE");
/** Create a function that takes length and width of a
 * rectangle and return it's perimeter.
 */

function calcPerimeter(length, height) {
  return 2 * (length + height);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

console.log("Q4. Calculate the Area of a Triangle");
/** Write a function that takes the base and height of a
 * trinagle and return its area.
 */

function calcTriangleArea(base, height) {
  return 0.5 * (base * height);
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

console.log("Q5. EXTEND A STRING");
/** Write a function that accepts a string and adds 'Frontend'
 * onto the end of it
 */

function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

console.log("Q6. GREATER THAN 100");
/** Given two numbers, return true if the sum of both numbers
 * is greater than 100, otherwise return false.
 */

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

console.log("Q7. LESS THAN OR EQUAL TO ZERO");
/** Write a function that accepts a number and returns true
 * if it is less than or equal to zero, otherwise returns false.
 */

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

console.log("Q8. OPPOSITE BOOLEAN");
/** Given a boolean(true or false), return the opposite boolean.
 */

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

console.log("Q9. IS NOT THE NUMBER 0");
/** Given ANY element, return true if it is NOT the number 0.
 */

function isNotZero(elem) {
  return elem !== 0;
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

console.log("Q10. CALCULATE THE REMAINDER");
/** Given two numbers, return their remainder when divided by
 * each other.
 */

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

console.log("Q11. IS THE NUMBER ODD?");
/** Given two numbers, return true if the number is odd.
 */

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

console.log("Q12. IF A NUMBER IS EVEN, RETURN 1, OTHERWISE RETURN -1");
/** Create a function that takes a number argument and returns
 * 1 if the number is even. If the number is odd, return -1.
 */

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

console.log("Q13. CHECK IF A USER IS LOGGED IN AND SUBSCRIBED");
/** Create a function that takes in two strings. If the first
 * string is equal to 'LOGGED_IN' AND the second string is equal
 * to 'SUBSCRIBED' return true, otherwise, return false.
 */

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn == "LOGGED_IN" && subscribed == "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

console.log("Q14. CHECK IF A USER IS LOGGED IN OR SUBSCRIBED");
/** Create a function that takes in two strings. If the first
 * string is equal to 'LOGGED_IN' OR the second string is equal
 * to 'SUBSCRIBED' return true, otherwise, return false.
 */

function isLoggedInOrSubscribed(loggedIn, subscribed) {
  return loggedIn == "LOGGED_IN" || subscribed == "SUBSCRIBED";
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));

console.log("*************** INTERMEDIATE ***************");
console.log("Q1. FALSEY OR TRUTHY?");
/** Given two values, return the first one if it is falsey,
 * otherwise, return the second one.
 */

function filterOutFalsey(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsey(0, 500));
console.log(filterOutFalsey(false, 100));
console.log(filterOutFalsey(true, "Dog"));

console.log("Q2. RETURN THE LENGTH OF ANY GIVEN ARRAY");
/** Given an array, return its length. */

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

console.log("Q3. GET THE LAST ELEMENT IN AN ARRAY");
/** Given an array, retrun the last element.  */

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

console.log("Q4. FIND THE SUM OF AN ARRAY");
/** Given an array, return the sum of every element. */

function arrSum(arr) {
  let newArr = 0;
  for (i = 0; i < arr.length; i++) {
    newArr += arr[i];
  }
  return newArr;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

console.log("Q5. ADD UP THE NUMBERS FROM A SINGLE NUMBER");
/** Given a number, add up all the numbers from one to the
 * number that is given. e.g. an input of 4 will give you
 * 1 + 2 + 3 + 4, which equals 10.
 */

function arithmeticSequence(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(arithmeticSequence(3));
console.log(arithmeticSequence(4));
console.log(arithmeticSequence(600));

console.log("Q6. CALCULATE THE TIME");
/** Given a number in seconds, return this number in mm:ss
 * format.
 */

function calcTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

console.log("Q7. Find the largest number");
/** Given an array of numbers, return the largest number of that
 * array */

function getMax(arr) {
  let maxNum = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

console.log("Q8. REVERSE A STRING");
/** Given a string, return the reversed string */

function reverseString(string) {
  /* let stringRev = '';
    for(i = string.length - 1; i >= 0; i--) {
        stringRev += string[i];
    };
    return stringRev; */

  return string.split("").reverse().join("");
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

console.log("Q9. TURN EVERY ELEMENT IN AN ARRAY INTO 0");
/** Given an array of elements, return the same length array
 * filled with 0's.
 */

function convertToZeros(arr) {
  /* let newArr = []
    for(let i = 0; i< arr.length; i++){
        newArr[i] = 0;
    };
    return newArr;
    
    return newArr Array(arr.length).fill(0);
    */

  return arr.map((elem) => 0);
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

console.log("Q10. FILTER OUT ALL THE APPLES");
/** Givne an array of fruits, if it's an apple, remove it from
 * the array.
 */

function removeApples(arr) {
  /* let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 'Apple'){
            newArr.push(arr[i]);
        };
    };
    return newArr; */

  return arr.filter((elem) => elem !== "Apple");
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
console.log(removeApples(["Tomato", "Orange", "Banana"]));
console.log(removeApples(["Orange", "Apple", "Banana"]));

console.log("Q11. Filter out all the falsy values");
/** Given an array of values, filter out all the falsy values and
 * only return the truthy values.
 */

function filterOutFalsy(arr) {
  /* let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i]);
        };
    };
    return newArr; */

  return arr.filter((elem) => elem);
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));
console.log(filterOutFalsy(["Tomato", "Orange", "Banana", false]));

console.log("Q12. Truthy to true, Falsy to false");
/** Given an array of truthy and falsy values, return the same
 * array of elements into its boolean value.
 */

function convertToBoolean(arr) {
  /* let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            newArr.push(true);
        }
        else {
            newArr.push(false);
        };
    };
    return newArr; */

  return arr.map((elem) => !!elem);
}

console.log(convertToBoolean([500, 0, "David", "", []]));

console.log("*************** ADVANCED ***************");
console.log("Q1 SHOW RATING");
/** Given a rating, display a star (*) for each full rating and
 * a full-stop(.) for each half rating.
 */

function showRating(num) {
  const wholeNum = Math.floor(num);
  const decimalNum = num - wholeNum;
  console.log(wholeNum, decimalNum);
  let rating = "";
  for (let i = 0; i < wholeNum; i++) {
    rating += "*";
    if (i !== wholeNum - 1) rating += " ";
  }
  if (num == 0) rating = "";
  else if (!decimalNum || wholeNum != 0) rating += " .";
  else rating += ".";

  return rating;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

console.log("Q2. Sort by LOWEST TO HIGHEST PRICE");
/** Given an array of numbers, return the prices sorted by low
 * to high. */

function sortLowToHigh(arr) {
  return arr.sort(/* (a, b) => b - a */);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

console.log("Q3. SORT BY HIGHEST TO LOWEST PRICE");
/** Given an array of objects, return the prices sorted by high to low. */

function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 3, price: 10 },
  ])
);

console.log("Q4. FIND ALL THE POSTS BY A SINGLE USER");
/** Using this API "https://jsonplaceholder.typicode.com/posts"
 * return all the posts by any given user ID.
 */

async function postsByUser(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data.filter(element => element.userId === userId));
};

postsByUser(4);

console.log('Q5. FIRST 6 INCOMPLETE TODOS')
/** Using this API "https://jsonplaceholder.typicode.com/todos"
 * and return the first 6 incomplete todo's from the results.
 */

async function firstSixIncomplete() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data.filter(element => !element.completed).slice(0, 6));
  };

firstSixIncomplete();