/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = [1]; 
        let prev = 1;  

        for (let j = 1; j <= i; j++) {
            let next = (prev * (i - j + 1)) / j; 
            row.push(next);
            prev = next; 
        }

        triangle.push(row);
    }

    return triangle;
};
