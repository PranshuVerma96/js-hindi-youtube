const accountId=1323
let accountEmail='pranshu45@gmail.com'
var accontPassward="12345"
accountCity='lakimpur'

// accountId=2  not allowed

console.log(accountId);

accountEmail='acd@gmail.com'
accontPassward='345'
accountCity='banglure'

console.table([accontPassward,accountEmail,accountId,accountCity])

//prefer not to use var :-
// because of issue in blick scope and functional scope

let accountState;
console.log(accountState)
console.log();

