class VigenereCipheringMachine {
  reverse = true;

  constructor(reverse){
    if(reverse === false){
      this.reverse = false;
    }
  }

  encrypt(encryptMessage, key) {
    var encryptedMessage = "";
    for(var i = 0, j = 0; i < encryptMessage.length; i++){
      var currentLetter = encryptMessage[i];
      var code = currentLetter.charCodeAt();
      if(this.isUpperCase(code)){
        var upperLetter = ((code - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        encryptedMessage += String.fromCharCode(upperLetter+65);
        j++;
      }else if(this.isLowerCase(code)){
        var lowerLetter = ((code - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
        encryptedMessage += String.fromCharCode(lowerLetter+65);
        j++;
      }else{
       encryptedMessage += currentLetter;
      }
    }
    if(!this.reverse) encryptedMessage = encryptedMessage.split('').reverse().join('');
    return encryptedMessage;
  }
  decrypt(encryptMessage, key) {
    var dencryptedMessage = "";
    for(var i = 0, j = 0; i < encryptMessage.length; i++){
      var currentLetter = encryptMessage[i];
      var code = currentLetter.charCodeAt();
      if(this.isUpperCase(code)){
        var upperLetter = ((code - 65) + 26 - (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        dencryptedMessage += String.fromCharCode(upperLetter+65);
        j++;
      }else{
        dencryptedMessage += currentLetter;
      }
    }
    if(!this.reverse) dencryptedMessage = dencryptedMessage.split('').reverse().join('');
    return dencryptedMessage;
  }
  isUpperCase(code) {
    return 65 <= code && code <= 90;
  }
  isLowerCase(code){
    return 97 <= code && code <= 122;
  }
}

module.exports = VigenereCipheringMachine;