module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === []) {
        return [];
    } else if (matrix === undefined) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            result.push(matrix[i].reverse());
        } else if (i === 0) {
            result.push(matrix[i]);
        } else {
            result.push(matrix[i]);
        }
    }

    let smallResult = result.flat(2);
    return smallResult;
}
