const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrixArr) {
    //check
    if (!Array.isArray(matrixArr) || !matrixArr) {
        let error = new Error("Wrong: data isn't array");
        return console.log(error);
    }

    let sumCats = 0;
    matrixArr.forEach((nestedArr) => {
        for (let i = 0; i < nestedArr.length; i++) {
            if (nestedArr[i] === '^^') {
                sumCats++;
            }
        }
    });
    return sumCats;
}

module.exports = {
    countCats,
};
