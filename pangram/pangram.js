function Pangram(input) {
  this.content = input;
}

Pangram.alphabetArr = "abcdefghijklmnopqrstuvwxyz".split('');

Pangram.prototype.isPangram = function() {
  // Change the content to lower case and split it into char array
  const copyArr = this.content.toLowerCase().split('');
  // Check if every item in alphabetArr is in the input
  return Pangram.alphabetArr.every( item => {
    return copyArr.includes(item);
  });
}

Pangram.prototype.isPangram2 = function() {
  // Change the content to lower case and split it into char array
  const copyArr = this.content.toLowerCase().split('');
  // hash table for the 26 ASCII chars
  const hash = new Array(26).fill(false);
  const firstLetter = 'a', lastLetter = 'z';
  const firstLetterCode = firstLetter.charCodeAt(0);

  copyArr.forEach( c => {
    if(c >= firstLetter && c <= lastLetter) {
      hash[c.charCodeAt(0)-firstLetterCode] = true;
    }
  });

  return hash.every( item => item);

};

module.exports = Pangram;
