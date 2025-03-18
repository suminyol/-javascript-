const accountId=14453
let accountEmail="sumi@google.com"
var accountPassword="12345"
accountCity="Chandigarh"

accountEmail="sumi.bt23@gmail.com"
accountPassword="098765"
accountCity="Jaipur"
let accountState
/*
prefer not to use var b/c of issue in block scope and functional scope 
*/

// accountId=2  //not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
