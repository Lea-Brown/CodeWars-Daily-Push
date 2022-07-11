// My daily Codewars answers. Newest first.


/* Complementary DNA 7kyu
"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */
function DNAStrand(dna) {
    let newString = ""
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            newString += "T"
        } else if (dna[i] === "T") {
            newString += "A"
        } else if (dna[i] === "C") {
            newString += "G"
        } else if (dna[i] === "G") {
            newString += "C"
        } else {
            newString += dna[i];
        }
    }
    return newString;
}

/* Shortest Word 7kyu
Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types. */
function findShort(s) {
    let total = s.split(" ").map(x => {
        return x.length
    })
    total = total.sort(function (a, b) { return a - b })
    return total[0];
}

/* Exes and Ohs 7kyu
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            x++
        } else if (str[i] === "o" || str[i] === "O") {
            o++
        } else {
            // do nothing. Probably a better way to write this.
        }
    }
    return x === o;
}

/* List Filtering 7kyu
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */
function filter_list(l) {
    let numOnly = [];
    l.forEach(x => typeof x === 'number' ? numOnly.push(x) : 0);
    return numOnly;
}

/* Descending Order 7kyu
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */
function descendingOrder(n) {
    return n.toString().split('').sort().reverse().join('') * Math.sign(n);
}

/* Get the Middle Character 7kyu
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.Had to google this one. */
function getMiddle(s) {
    let position;
    let length;
    if (s.length % 2 == 1) {
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1;
        length = 2;
    }
    return s.substring(position, position + length)
}

/* Highest and Lowest 7 kyu
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */
function highAndLow(numbers) {
    let sorted = numbers.split(" ").sort((a, b) => a - b);
    return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}

/* Function 1 - hello world 8kyu
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends? */
function greet() {
    let arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
    let hello = "";
    arr.forEach(x => hello += x)
    return hello;
}

/* Counting sheep... 8 kyu
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
function countSheeps(arrayOfSheep) {
    let totalSheep = 0;
    arrayOfSheep.forEach(sheep => sheep ? totalSheep++ : 0)
    return totalSheep;
}

/* Summation 8 kyu
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
let summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}