// HELPING HANDS
// 
// File: index.js

// 1. Function to calculate the average value of an array
function averageValue(arr) {
  let total = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  average = total / arr.length;
  return average;
}

// 2. Event listener to detect when a button is clicked
document.getElementById('myButton').addEventListener('click', onClick);

// 3. Function to run when the button is clicked
function onClick(event) {
  let numbers = [5, 6, 7, 8, 9, 10];
  let avg = averageValue(numbers);
  alert('The average value of this array is ' + avg);
}

// 4. Function to determine whether an input is a number or not
function isNumber(input) {
  if (typeof input === 'number') {
    return true;
  }
  return false;
}

// 5. Function to add two numbers
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// 6. "For" loop to loop through every character in a given string
function loopThroughString(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

// 7. Function to determine if a given string is a palindrome
function isPalindrome(str) {
  let length = str.length - 1;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] != str[length - i]) {
      return false;
    }
  }
  return true;
}

// 8. Function to convert a given string to lower case
function toLowerCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += char;
    }
  }
  return result;
}

// 9. Function to remove a given element from an array
function removeFromArray(arr, element) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != element) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 10. Function to check if an array contains a given element
function containsElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

// 11. Function to capitalize the first letter of a given string
function capitalizeFirstLetter(str) {
  let result = str.charAt(0).toUpperCase();
  let length = str.length;
  if (length > 1) {
    result += str.substring(1, length);
  }
  return result;
}

// 12. Function to reverse a given string
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

// 13. Function to check if a given number is odd or even
function isOddOrEven(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

// 14. Function to find the maximum value in an array
function maxValue(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// 15. Function to find the minimum value in an array
function minValue(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

// 16. Function to check if an object has a given property
function hasProperty(obj, prop) {
  if (prop in obj) {
    return true;
  }
  return false;
}

// 17. Function to get the keys of a given object
function getObjectKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

// 18. Function to get the values of a given object
function getObjectValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}

// 19. Function to remove all whitespace from a string
function removeWhitespace(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== ' ') {
      result += str.charAt(i);
    }
  }
  return result;
}

// 20. Function to calculate the sum of all elements in an array
function sumElements(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// 21. Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount1 = {};
  let charCount2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in charCount1) {
      charCount1[str1[i]]++;
    } else {
      charCount1[str1[i]] = 1;
    }
    if (str2[i] in charCount2) {
      charCount2[str2[i]]++;
    } else {
      charCount2[str2[i]] = 1;
    }
  }

  if (JSON.stringify(charCount1) === JSON.stringify(charCount2)) {
    return true;
  }
  return false;
}

// 22. Function to get the prime factors of a given number
function getPrimeFactors(num) {
  let primeFactors = [];
  while (num % 2 === 0) {
    primeFactors.push(2);
    num /= 2;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    primeFactors.push(num);
  }

  return primeFactors;
}

// 23. Function to get all the permutations of a given string
function getPermutations(str) {
  let result = [];
  if (str.length === 1) {
    return [str];
  }
  for (let i = 0; i < str.length; i++) {
    const prefix = str[i];
    const suffix = str.slice(0, i) + str.slice(i + 1);
    const permutations = getPermutations(suffix);
    for (let k = 0; k < permutations.length; k++) {
      result.push(prefix + permutations[k]);
    }
  }
  return result;
}

// 24. Function to calculate the factorial of a given number
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// 25. Function to convert a given number to binary
function toBinary(num) {
  if (num === 0) {
    return 0;
  }
  let result = '';
  while (num > 0) {
    result = (num % 2).toString() + result;
    num = Math.floor(num / 2);
  }
  return result;
}

// 26. Function to convert binary into decimal
function binaryToDecimal(bin) {
  let result = 0;
  let power = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    result += parseInt(bin[i]) * Math.pow(2, power);
    power++;
  }
  return result;
}

// 27. Function to get the Fibonacci sequence up to a given number
function getFibonacci(num) {
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else {
    let result = getFibonacci(num - 1);
    let num1 = result[result.length - 1];
    let num2 = result[result.length - 2];
    result.push(num1 + num2);
    return result;
  }
}

// 28. Function to calculate the GCD of two given numbers
function getGCD(num1, num2) {
  let gcd = 1;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

// 29. Function to calculate the LCM of two given numbers
function getLCM(num1, num2) {
  let lcm = 0;
  let biggerNum = Math.max(num1, num2);
  while (true) {
    if (biggerNum % num1 == 0 && biggerNum % num2 == 0) {
      lcm = biggerNum;
      break;
    }
    biggerNum++;
  }
  return lcm;
}

// 30. Function to check if a given number is armstrong
function isArmstrong(num) {
  let result = 0;
  let givenNum = num;
  let digitCount = num.toString().length;
  while (num > 0) {
    let remainder = num % 10;
    result += Math.pow(remainder, digitCount);
    num = Math.floor(num / 10);
  }
  if (result == givenNum) {
    return true;
  }
  return false;
}

// 31. Function to calculate the sum of digits of a given number
function sumOfDigits(num) {
  let sum = 0;
  let givenNumber = num;
  while (num > 0) {
    let remainder = num % 10;
    sum += remainder;
    num = Math.floor(num / 10);
  }
  return sum;
}

// 32. Function to check if a given number is perfect square
function isPerfectSquare(num) {
  let perfectSquare = 0;
  for (let i = 0; perfectSquare < num; i++) {
    perfectSquare = i * i;
  }
  if (perfectSquare === num) {
    return true;
  }
  return false;
}

// 33. Function to calculate the sum of all prime numbers up to a given number
function sumOfPrimes(num) {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result += i;
    }
  }
  return result;
}

// 34. Function to convert a decimal into octal
function decimalToOctal(num) {
  let octal = '';
  let remainder;
  while (num > 0) {
    remainder = num % 8;
    octal += remainder.toString();
    num = Math.floor(num / 8);
  }
  return octal.split("").reverse().join("");
}

// 35. Function to convert an octal into decimal
function octalToDecimal(num) {
  let decimal = 0;
  let power = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    decimal += parseInt(num[i]) * Math.pow(8, power);
    power++;
  }
  return decimal;
}

// 36. Function to convert a decimal into hexadecimal
function decimalToHexadecimal(num) {
  let hexadecimal = '';
  let remainder;
  let hexDigits = ['A', 'B', 'C', 'D', 'E', 'F'];
  while (num > 0) {
    remainder = num % 16;
    if (remainder >= 10) {
      remainder = hexDigits[remainder - 10];
    }
    hexadecimal += remainder.toString();
    num = Math.floor(num / 16);
  }
  return hexadecimal.split("").reverse().join("");
}

// 37. Function to convert a hexadecimal to decimal
function hexadecimalToDecimal(num) {
  let decimal = 0;
  let power = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i], 16);
    decimal += digit * Math.pow(16, power);
    power++;
  }
  return decimal;
}

// 38. Function to calculate the sum of natural numbers up to a given number
function sumOfNatural