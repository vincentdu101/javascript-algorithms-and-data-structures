import ArrayEasyProblems from "./ArrayEasyProblems";
import ArrayMediumProblems from "./ArrayMediumProblems";
import SpiralOrder from "./SpiralOrder";
import SearchRotatedArray from "./SearchRotatedArray";

export default class ArrayProblems {

    constructor() {
        this.arrayEasyProblems = new ArrayEasyProblems();
        this.arrayMediumProblems = new ArrayMediumProblems();
        this.spiralOrder = new SpiralOrder();
        this.searchRotatedArray = new SearchRotatedArray();
    }

    output() {
        // two sum
        let answer = this.arrayEasyProblems.twoSum([2, 7, 11, 15], 9);
        console.log("Two Sum: ", answer);

        // fibonacci
        answer = this.arrayEasyProblems.fibonacci(4);
        console.log("Fibonacci: ", answer);

        // find duplicate
        answer = this.arrayMediumProblems.findDuplicate([1, 3, 4, 2, 2]);
        console.log("Find Duplicate: ", answer);

        // spiral order
        let input = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ]
        answer = this.spiralOrder.initiate(input);
        console.log("Spiral Order: ", answer);

        // search rotated array
        answer = this.searchRotatedArray.search([4,5,6,7,0,1,2], 0);
        console.log("Search Rotated Array: ", answer);
    }

}