const testCases = [
    [[[
        [-1, 1, 0, -1, 1],
        [1, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
    ]], 2, "Tomatoes will be rotten in 2 days"],
    [[[
        [-1, 1, 0, -1, 1],
        [0, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
    ]], -1, "All tomatoes cannot be rotten"]
]

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    isEmptyQue() {
        return this.size === 0;
    }
}


var nRows;
var nCols;
function main(
    tomatoGrid) {
    // complete this function
    const rotQueue = new Queue();
    nRows = tomatoGrid.length;
    nCols = tomatoGrid[0].length;
    for (let row = 0; row < tomatoGrid.length; row++) {
        for (let col = 0; col < tomatoGrid[row].length; col++) {
            if (tomatoGrid[row][col] === -1) {
                rotQueue.enqueue([row, col]);
            }
        }
    }

    let daysTook = 0
    let dayQueueSize = rotQueue.size;
    while (!rotQueue.isEmptyQue()) {
        if(dayQueueSize === 0) {
            daysTook++;
            dayQueueSize = rotQueue.size;
        }
        const [tmpRow, tmpCol] = rotQueue.dequeue();
        dayQueueSize--;
        if(isValidRowCol([tmpRow, tmpCol+1]) && tomatoGrid[tmpRow][tmpCol+1] === 1){
            tomatoGrid[tmpRow][tmpCol+1] = -1;
            rotQueue.enqueue([tmpRow, tmpCol+1]);
        }
        if(isValidRowCol([tmpRow, tmpCol-1]) && tomatoGrid[tmpRow][tmpCol-1] ===1 ){
            tomatoGrid[tmpRow][tmpCol-1] = -1;
            rotQueue.enqueue([tmpRow, tmpCol-1]);
        }
        if(isValidRowCol([tmpRow+1, tmpCol]) && tomatoGrid[tmpRow+1][tmpCol] ===1){
            tomatoGrid[tmpRow+1][tmpCol] = -1;
            rotQueue.enqueue([tmpRow+1, tmpCol]);
        }
        if(isValidRowCol([tmpRow-1, tmpCol]) && tomatoGrid[tmpRow-1][tmpCol] ===1 ){
            tomatoGrid[tmpRow-1][tmpCol] = -1;
            rotQueue.enqueue([tmpRow-1, tmpCol]);
        }
    }

    for (let row = 0; row < tomatoGrid.length; row++) {
        for (let col = 0; col < tomatoGrid[row].length; col++) {
            if (tomatoGrid[row][col] === 1) {
                console.log(`-1 # index ${row} ${col} tomato can never be rotten`);
                return -1;
            }
        }
    }
    console.log(`${daysTook} # ${daysTook} days to rot all tomatoes`);
    return daysTook;
}

function isValidRowCol(indexs){
    if((indexs[0] >=0) && (indexs[0] < nRows) && (indexs[1] >=0) && (indexs[1] < nCols)) return true;
    return false;
}

testCases.forEach(([input, expectedResult, message]) => {
    console.assert(main(...input) === expectedResult, message)
})

