module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var resultTurns = Math.pow(2, disksNumber)-1;
  var resultSeconds = Math.floor((resultTurns/turnsSpeed)*3600);
  let result = {
    turns: resultTurns,
    seconds: resultSeconds
  }
  return result;
};