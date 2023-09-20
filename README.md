# quick-sort

# Implementation of Neighbor Function for Graph
```
function getNeighbors(node, matrix) {
    const neighbors = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    // Define the four possible directions
    const directions = [
        [-1, 0], // UP
        [1, 0],  // DOWN
        [0, -1], // LEFT
        [0, 1]   // RIGHT
    ];
    
    for (const [dx, dy] of directions) {
        const newRow = node[0] + dx;
        const newCol = node[1] + dy;
        console.log('newRow: ', newRow);
        console.log('newCol: ', newCol);
        // Check if the neighbor is within matrix bounds and has a value of 1
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && matrix[newRow][newCol] === 1) {
            console.log('Value: ', matrix[newRow][newCol])
            neighbors.push([newRow, newCol]);
        }
    }
    
    return neighbors;
}

// Example usage:
const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

console.log(getNeighbors([2, 2], matrix)); // Output: [ [1,2], [3,2], [2,1], [2,3] ]
console.log(getNeighbors([0, 0], matrix)); // Output: [ [1,0], [0,1] ]
console.log(getNeighbors([2, 0], matrix)); // Output: [ [1,0], [3,0], [2,1] ]
```
