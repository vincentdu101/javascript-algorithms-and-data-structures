export default class ArrayEasyProblems {

    constructor() {}

    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    twoSum(nums, target) {
        // loop over the indices ending before the last number
        // in the first loop
        for (var i = 0; i < nums.length - 1; i++) {

            // loop over the indices again but this time include the
            // last number
            for (var j = 0; j < nums.length; j++) {

                // check if the numbers are not the same and if they add
                // up to the target
                if (i != j && nums[i] + nums[j] === target) {
                    
                    // if they do return the numbers
                    return [i, j];
                }

            }

        }
        
        // if we can't find anything then return an empty array
        return [];
    }

    // The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
    // F(0) = 0,   F(1) = 1
    // F(N) = F(N - 1) + F(N - 2), for N > 1.
    fibonacci(N) {
        // if we reach either 0 or 1 just return the number (0 or 1)
        if (N < 2) {
            return N;
        } else {
            // recursive addition by adding the next number and the next next number
            // each stack call will reduce itself to adding 1 multiple times
            return this.fibonacci(N - 1) + this.fibonacci(N - 2);
        }
    }
}