import LetterCombinations from "./LetterCombinations";

export default class BacktrackingProblems {

    constructor() {
        this.letterCombinations = new LetterCombinations();
    }

    output() {

        let digits = "23";
        console.log("Letter Combos for 23 is " + this.letterCombinations.generate(digits));
    }

}