/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
 * that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does 
not map to any letters

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 */

export default class LetterCombinations {

    constructor() {}

    generate(digits) {
        if (digits == "") {
            return [];
        }

        let combos = [];
        for (let d = 0; d < digits.length; d++) {
            combos[d] = this.findNumbers(digits[d]);
        }

        let output = combos[0];
        for (let x = 1; x < combos.length; x++) {
            output = this.formOutput(output, combos[x]);
        }
        return output;
    }

    findNumbers(digit) {
        if (digit == "2") {
            return ["a", "b", "c"];
        } else if (digit == "3") {
            return ["d", "e", "f"];
        } else if (digit == "4") {
            return ["g", "h", "i"];
        } else if (digit == "5") {
            return ["j", "k", "l"];
        } else if (digit == "6") {
            return ["m", "n", "o"];
        } else if (digit == "7") {
            return ["p", "q", "r", "s"];
        } else if (digit == "8") {
            return ["t", "u", "v"];
        } else if (digit == "9") {
            return ["w", "x", "y", "z"];
        } else {
            return [];
        }
    }

    formOutput(output, entries) {
        let copy = output;
        output = [];
        for (let x = 0; x < copy.length; x++) {
            for (let y = 0; y < entries.length; y++) {
                output.push(copy[x] + entries[y]);
            }
        }
        return output;
    }

} 