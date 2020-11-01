const DISCARD_NEXT = "--discard-next";
const DISCARD_PREV = "--discard-prev";
const DOUBLE_NEXT = "--double-next";
const DOUBLE_PREV = "--double-prev";

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('Not an array');
  let result = [];
  for(let i=0; i<arr.length; i++){
    switch (arr[i]){
      case DISCARD_NEXT:
        result.push("empty");
        i++;
        break;
      case DISCARD_PREV:
        result.pop();
        break;
      case DOUBLE_NEXT:
        if(i+1 >= arr.length) break;
        result.push(arr[i+1]);
        break;
      case DOUBLE_PREV:
        if(i === 0 || result[result.length-1] === "empty") break;
        result.push(arr[i-1]);
        break;
      ;
      default: result.push(arr[i]);
    }
  }
  return result.filter(function(item) {
    return item !== "empty"
  });
};
