var fs = require('fs');//it can make a txt file and can enter a msg and can help to read that msg from that file
var os = require('os'); //os gives user info

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi' + user.username + '!\n', ()=>{
    console.log('file is created')
});

console.log(fs);//this and down one console can be used to know what functionalities can os and fs can do
console.log(os);

//nodemon run server.js to run this file in terminal use this command 