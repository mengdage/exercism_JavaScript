function Flattener() {

}

Flattener.prototype.flatten = function(arr) {
  let result = [];
  arr.forEach( item => {
    if(item !== 0 && !item) return;
    if(Array.isArray(item)) {
      result = result.concat(this.flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

module.exports = Flattener;
