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

        return spiral(interval, combo, matrix, rows, cols);
    }

    spiral(interval, combo, matrix, rows, cols) {

        if (rows == 0 && cols == 0) {
            return combo;
        }

        for (let x = interval; x <= rows; x++) {
            combo = left(combo, matrix[x], x, cols);
            combo = down(combo, matrix, x + 1, cols, rows);
            combo = right(combo, matrix[rows - x], cols - 1, x);
            combo = up(combo, matrix, x + 1, x, rows);
        }

    }

}