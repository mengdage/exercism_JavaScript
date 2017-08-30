const rules = {
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C'
};
const DnaTranscriber = function() {

};

DnaTranscriber.prototype.toRna = function(nucs) {
  const arr = nucs.split('');
  const result = [];
  for(let nuc of arr) {
    if(rules[nuc]) {
      result.push(rules[nuc]);
    } else {
      throw Error('Invalid input');
    }
  }

  // arr.map( nuc => {
  //   if(rules[nuc]) {
  //     return rules[nuc];
  //   } else {
  //     throw Error('Invalid input')
  //   }
  // })
  return result.join('');
}

module.exports = DnaTranscriber;
