const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var result = "";
  var additional = str;
  if(options.separator === undefined){
    options.separator = "+";
  }
  if(options.additionSeparator === "undefined"){
    options.additionSeparator = "|";
  }
  if(options.additionRepeatTimes !== undefined){
    for(let j=0; j<options.additionRepeatTimes; j++){
      if(j === 0){
        additional += "" + options.addition;
      }else{
        additional += "" + options.additionSeparator + options.addition;
      }
    }
  }else if (options.addition !== undefined){
    additional += "" + options.addition;
  }
  result = additional;
  if(options.repeatTimes !== undefined){
    for (let i=1; i<options.repeatTimes; i++){
      result += "" + options.separator + additional;
    }
  }
  return result;
};