function Binary(bs) {
  this.binaryString = bs;
}

Binary.prototype.toDecimal = function() {
  // First check if valid
  if(/[^01]/.test(this.binaryString)) {
    return 0;
  }

  return this.binaryString.split('')
            .reduce( (result,digit) => result = result * 2 + (+digit), 0);
}

Binary.prototype.toDecimal2 = function() {
  let result = 0;
  const arr = this.binaryString.split('');
  for(let entry of arr) {
    switch(entry) {
      case '0':
      case '1':
        result = result * 2+(+entry);
        break;
      default:
        return 0;
    }
  }

  return result;
}

module.exports = Binary;
