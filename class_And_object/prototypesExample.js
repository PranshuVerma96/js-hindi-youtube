const { use } = require("react");

function multipley(num){
  return num*5
}

multipley.power = 2
console.log(multipley(5));
console.log(multipley.power);
console.log(multipley.prototype);

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
 this.score++
}

createUser.prototype.printMe =  function(){
  console.log(`price is ${this.score}`);
  
}

const chai = new  createUser('chai', 45)
const tea =  new createUser('tea',453)

chai.printMe()
tea.printMe()

