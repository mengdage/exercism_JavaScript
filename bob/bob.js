function Bob() {

}

Bob.quesType = {
  question: 'question',
  yell: 'yell',
  nothing: 'nothing',
  default: 'default'
}

Bob.response = {
  [Bob.quesType.question]: 'Sure.',
  [Bob.quesType.yell]: 'Whoa, chill out!',
  [Bob.quesType.nothing]: 'Fine. Be that way!',
  [Bob.quesType.default]: 'Whatever.'
};

function determine(sentence) {
  const trimed = sentence.trim();
  const questionMark = '?';

  // check if the input is nothing
  if(!trimed) {
    return Bob.quesType.nothing;
  }

  // check if yell
  // contains letters
  // all letters are uppercase
  if(/[A-Z]/.test(trimed) && !/[a-z]/.test(trimed)) {
    return Bob.quesType.yell;
  }

  // check if question
  // not a yell
  // the last letter is `questionMark`
  if(trimed.indexOf(questionMark) === trimed.length-1) {
    return Bob.quesType.question;
  }



  return Bob.quesType.default;

}

Bob.prototype.hey = function(sentence) {
  return Bob.response[determine(sentence)];
};

module.exports = Bob;
