import ArrayEasyProblems from "./arrays/ArrayEasyProblems";
import ArrayMediumProblems from "./arrays/ArrayMediumProblems";

let arrayEasyProblems = new ArrayEasyProblems();
let arrayMediumProblems = new ArrayMediumProblems();

// two sum
let answer = arrayEasyProblems.twoSum([2, 7, 11, 15], 9);
console.log("Two Sum: ", answer);

// fibonacci
answer = arrayEasyProblems.fibonacci(4);
console.log("Fibonacci: ", answer);

// find duplicate
answer = arrayMediumProblems.findDuplicate([1, 3, 4, 2, 2]);
console.log("Find Duplicate: ", answer);