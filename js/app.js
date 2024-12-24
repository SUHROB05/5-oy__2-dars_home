
// ///////////////////////////////////////////////  1  M  /////////
// const multiplyValues = (obj, n) => {
//     const res = {};
//     for (let key in obj) {
//         res[key] = obj[key] * n;
//     }
//     return res;
// };

// const obj = { a: 2, b: 3, c: 4 };
// const n = 3;
// console.log(multiplyValues(obj, n));






// ///////////////////////////////////////////////  2  M  /////////
// const books = [
//     { title: "Halqa", author: "Akrom Malik", read: false },
//     { title: "Dunyoning ishlari", author: "O’tkir Hoshimov", read: true },
//     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true },
// ];

// books.forEach((book) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(`${book.author} ning ${book.title} kitobi ${status}`);
// });





// ///////////////////////////////////////////////  3  M  /////////
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'rabbit', 'chicken'];

// const countWords = (arr) => {
//     return arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {});
// };

// console.log(countWords(animals));






// ///////////////////////////////////////////////  4  M  /////////
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 },
// ];

// const ageDifference = (arr) => {
//     const ages = arr.map((person) => person.age);
//     const minAge = Math.min(...ages);
//     const maxAge = Math.max(...ages);
//     return maxAge - minAge;
// };

// console.log(ageDifference(people));








// ///////////////////////////////////////////////  5  M  /////////
// const minMaxWord = (sentence) => {
//     const words = sentence.split(" ");
//     const minWord = words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
//     const maxWord = words.reduce((longest, word) => word.length > longest.length ? word : longest);
//     return { minWord, maxWord };
// };

// console.log(minMaxWord("Men dasturlash kursida o’qiyman"));







// ///////////////////////////////////////////////  6  M  /////////
// const sumToArray = (...nums) => {
//     const sum = nums.reduce((acc, num) => acc + num, 0);
//     return String(sum).split("").map(Number);
// };

// console.log(sumToArray(1, 22, 3));







// ///////////////////////////////////////////////  7  M  /////////
// const objEntries = { a: 2, b: 5, c: 7 };

// const joinEntries = (obj) => {
//     return Object.entries(obj).map(([key, value]) => key + value);
// };

// console.log(joinEntries(objEntries));








// ///////////////////////////////////////////////  8  M  /////////
// const myObj = { a: 1, b: 22 };

// const sumValues = Object.values(myObj).reduce((sum, value) => sum + value, 0);
// const digitSum = String(sumValues)
//     .split("")
//     .reduce((acc, num) => acc + Number(num), 0);

// console.log(sumValues);
// console.log(digitSum);







// ///////////////////////////////////////////////  9  M  /////////
// const digitCount = (num) => String(Math.abs(num)).length;

// console.log(digitCount(12345));






// ///////////////////////////////////////////////  10  M  /////////
// const reverseNumber = (num) => {
//     const reversed = String(num).split("").reverse().join("");
//     return parseInt(reversed) * Math.sign(num);
// };

// console.log(reverseNumber(12345));
// console.log(reverseNumber(-6789));



