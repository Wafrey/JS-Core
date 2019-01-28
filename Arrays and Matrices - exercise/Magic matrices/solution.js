function solve(arr) {

    let rowSum = 0;

    for (let row = 0; row < arr.length; row++) {

        let currRowSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            currRowSum += arr[row][col];

        }
        if (row === 0) {
            rowSum = currRowSum;
        } else if (rowSum !== currRowSum) {
            return false;
        }

    }

    for (let col = 0; col < arr[0].length; col++) {
        let colsSum = 0;
        for (let row = 0; row < arr.length; row++) {
            colsSum += arr[row][col];

        }
        if (colsSum != rowSum) {
            return false;
        }
    }

    return true;
}