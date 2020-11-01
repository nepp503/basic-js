const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  let month = date.getMonth();
  date.setMonth(month);
  if(month<2){
    return 'winter';
  }else if(month<5){
    return 'spring';
  }else if(month<8){
    return 'summer';
  }else if(month<11){
    return 'autumn';
  }
  return 'winter';
};
