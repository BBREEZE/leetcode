/**
 * @param {number[][]} matrix
 */
//  var NumMatrix = function(matrix) {
//    let len = matrix.length
//    this.sums = []
//   for(let i=0;i<len;i++){
//     this.sums[i] = [0]
//     let sum = 0
//     for(let j=0;j<matrix[i].length;j++){
//       sum = sum+matrix[i][j]
//       this.sums[i].push(sum)
//     }
//   }
// };

// /** 
//  * @param {number} row1 
//  * @param {number} col1 
//  * @param {number} row2 
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//   let total = 0
//   for(let i =row1;i<=row2;i++){
//     total = total + this.sums[i][col2+1] - this.sums[i][col1]
//   }
//   return total
// };

/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
  this.sum = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sums = 0
  for(let i =row1;i<row2+1;i++){
    for(let j=col1;j<=col2;j++){
      sums = sums + this.sum[i][j]
    }
  }
  return sums
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */



/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const region = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]])
console.assert(region.sumRegion(2, 1, 4, 3)===8,1)
console.assert(region.sumRegion(1, 1, 2, 2)===11,2)
console.assert(region.sumRegion(1, 2, 2, 4)===12 ,3)