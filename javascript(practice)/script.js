// ======================
// 1. Variable and console
// ======================
let a = 10;
console.log(a);

// ======================
// 2. Object reference example
// ======================
let object1 = { age: 20 };
let object2 = { age: 30 };
object1 = object2;
console.log(object1.age);

// ======================
// 3. Logical operators
// ======================
a = true;
let b = false;
console.log(a && b);

if (a || b) {
    console.log("At least one is true");
}

// ======================
// 4. Bitwise operators
// ======================
console.log(9 & 5);
console.log(9 | 5);
console.log(9 ^ 5);

// ======================
// 5. Normal function
// ======================
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// ======================
// 6. Arrow function
// ======================
const sum = (a, b, c) => {
    console.log(a + b + c);
};
sum(10, 20, 30);

// ======================
// 7. Function doubling array elements
// ======================
function double(num) {
    return num * 2;
}
let arr = [2, 3, 4, 5, 6, 7];
let doubledArr = arr.map(double);
console.log(doubledArr);

// ======================
// 8. Arrow function tripling array elements
// ======================
const tripleArr = arr.map(n => n * 3);
console.log(tripleArr);

// ======================
// 9. Filter odd numbers
// ======================
function isOdd(num) {
    return num % 2 !== 0;
}
let numbers = [10, 15, 20, 25, 30];
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

// ======================
// 10. Filter multiples of 5
// ======================
let array = [15, 35, 27, 13, 20];
let multiplesOfFive = array.filter(num => num % 5 === 0);
console.log(multiplesOfFive);

// ======================
// 11. Reduce to get product
// ======================
let array1 = [11, 22, 33, 44];
let product = array1.reduce((product, current) => product * current, 1);
console.log(product);

// ======================
// 12. Map → Filter → Reduce example
// ======================
let a1 = [1, 2, 3, 4, 5, 6];
let ans = a1
    .map(n => n * n)
    .filter(n => n % 2 === 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(ans);

// ======================
// 13. Destructuring
// ======================
let bArr = [1, 2, 3, 4, 5];
const [one, two] = bArr;
console.log(two);

// ======================
// 14. Using spread with arrays
// ======================
let num = [0, ...bArr, 7];
console.log(num);

// ======================
// 15. Fixed version of spread array
// ======================
let b1 = [1, 2, 3, 4, 5];
let num2 = [0, ...b1, 0, 7];
console.log(num2);

// ======================
// 16. Spread with objects
// ======================
const obj1 = { x: 3, y: 5 };
const obj2 = { y: 6, z: 7 };
const spread = { ...obj1, ...obj2 };
console.log(spread);

// ======================
// 17. Promise example
// ======================
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Received successfully");
        } else {
            reject("Rejected");
        }
    }, 2000);
});

promise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// ======================
// 18. Fetch API using .then()
// ======================
console.log("Fetching details (using .then)...");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
      console.log("=== User Names (from .then) ===");
      data.map(user => {
          console.log(user.name);
      });
  })
  .catch(err => console.log("Error:", err));

// ======================
// 19. Fetch API using async/await
// ======================
async function fetchAPI() {
    try {
        console.log("=== User Names (from async/await) ===");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const details = await response.json();
        details.map(user => console.log(user.name));
    } 
    catch (error) {
        console.log("Error:", error);
    }
}

fetchAPI(); // call the function

let name="abi"
let age="20";
console.log(`I am ${name} and my age is ${age}`);