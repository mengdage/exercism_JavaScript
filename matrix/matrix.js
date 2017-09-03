function Matrix(matrixString) {
  this.matrixString = matrixString;
  this.rows = this.matrixString.split('\n')   // '1 2'
                            .map(row => row.split(' ') // map a string of matrix row to an array of num_string ['1', '2']
                                            .map(s => +s));            // convert string to number [1, 2]

  let rowMax = this.rows.length, colMax = this.rows[0].length;

  this.columns = [];
  for(let colid = 0; colid < colMax; colid += 1) {
    const row = [];
    for(let rowid = 0; rowid < rowMax; rowid += 1) {
      row.push(this.rows[rowid][colid]);
    }
    this.columns.push(row);
  }

}

module.exports = Matrix;
