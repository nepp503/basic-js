const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var result = 0;
    for(let el of arr){
      if(Array.isArray(el)){
        var depth = this.calculateDepth(el);
        if(depth > result) result = depth;
      }
    }
    return ++result;
  }
};