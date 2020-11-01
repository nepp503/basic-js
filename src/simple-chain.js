const chainMaker = {
  chain: [],
  getLength() {
    var result = this.chain.filter(function(item) {
      return item !== "~~";
    });
    this.chain = [];
    return result.length;
  },
  addLink(value) {
    if(this.chain.length === 0){
      this.chain.push("( " + value + " )");
    }else{
      this.chain.push("~~");
      this.chain.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    if(position<=0 || typeof position !== "number"){
      this.chain = [];
      throw new Error('');
    }
    if(position === 1){
      this.chain.splice(0, 2);
    }else{
      this.chain.splice((position+position-2), 2);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    var result = this.chain.join('');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;