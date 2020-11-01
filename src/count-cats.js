const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for (let array of matrix){
    for (let element of array){
      if(element == "^^") result++;
    }
  }
  return result;
};
