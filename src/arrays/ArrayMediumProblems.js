export default class ArrayMediumProblems {

    constructor() {}

    // Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    // There is only one duplicate number in nums, return this duplicate number.
    findDuplicate(nums) {
        // create an object to keep track of visited
        // values
        var cache = {};

        // loop over each of the values, of gives the actual
        // element and not the index 
        for (let i of nums) {
            if (!cache[i]) {
                // if we have not visited the value, store it
                cache[i] = 1;
            } else {
                // if we have visited the value previously
                // then just return it as it is a duplicate
                return i;
            }
        }

        // if we don't find any duplicates, return -1
        return -1;
    }


}