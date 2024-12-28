const accountId = 144553
let accountEmail = "devi@google.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2038498"
accountCity = "Bangalore"

console.log(accountEmail);

/*
Prefer not to user var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);