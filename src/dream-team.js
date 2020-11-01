const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let result = "";
  for (let e of members){
    if(typeof e === "string"){
      result += e.trim().charAt(0).toUpperCase();
    }
  }
  return result.split('').sort().join('');
};
