const AccountId = 23434;
let AccountName = "Trishul"
var AccountEmail = "tri@gmail.com" 
AccountPassword = "abcd1234" // This practice is not recommended as code is not readable, creates confusion
let AccountState; // guess the value

/*
    Do not use var 
    because it gives issues in block and functional scope
*/

// AccountId = 32; // Reassigning is not allowed for const variables
AccountName = "Trishuuu"
AccountEmail = "3@gmail.com"
AccountPassword = "1234abcd"
console.log(AccountId);

console.table([AccountId, AccountName, AccountEmail, AccountPassword, AccountState])