export default class SpiralOrder {

    // Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
    // Input:
    // [
    // [ 1, 2, 3 ],
    // [ 4, 5, 6 ],
    // [ 7, 8, 9 ]
    // ]
    // Output: [1,2,3,6,9,8,7,4,5]
    initiate(matrix) {

        // check for base cases, if 1 or less elements, just
        // return the row
        if (matrix.length == 0) {
            return [];
        }

        if (matrix.length == 1) {
            return matrix[0];
        }

        let rows = matrix.length - 1;
        let cols = matrix[0].length - 1;
        let combo = [];
        let interval = 0;
        
        return this.spiral(interval, combo, matrix, rows, cols);
    }

    spiral(interval, combo, matrix, rows, cols) {

        // check to make sure if we have values in the rows
        if (rows == 0 && cols == 0) {
            return combo;
        }

        // look over the rows to process unvisited values
        // and start from the far left
        for (let x = interval; x <= rows; x++) {
            // for each row and col, go through the entire 
            // row and col
            // start from left to right, then go down, right, and 
            // finally back up
            combo = this.left(combo, matrix[x], x, cols);
            combo = this.down(combo, matrix, x + 1, cols, rows);
            combo = this.right(combo, matrix[rows - x], cols - 1, x);
            combo = this.up(combo, matrix, x + 1, x, rows);
            cols -= 1;
        }

        return combo;
    }

    addEntry(combo, entry) {
        // if we have not visited the entry then add it
        // to the output array
        if ((!!entry || entry == 0) && combo.indexOf(entry) === -1) {
            combo.push(entry);
            console.log("Added Entry: ", entry);
        }
        return combo;
    }

    left(combo, row, start, end) {
        // from start to finish, try to add the entries 
        for (let x = start; x <= end; x++) {
            combo = this.addEntry(combo, row[x]);
        }
        return combo;        
    }

    right(combo, row, start, end) {
        if (start < 0) {
            start = 0;
        }

        // from start to finish, try to add the entries
        for (let x = start; x >= end; x--) {
            combo = this.addEntry(combo, row[x]);
        }

        return combo;        
    }

    down(combo, matrix, start, col, rows) {
        // from start to finish, try to add the entries
        for (let x = start; x <= rows; x++) {
            combo = this.addEntry(combo, matrix[x][col]);
        }

        return combo;        
    }

    up(combo, matrix, end, col, rows) {
        // from start to finish, try to add the entries
        for (let x = rows; x >= end; x--) {
            combo = this.addEntry(combo, matrix[x][col]);
        }

        return combo;        
    }

}