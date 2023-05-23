const prompt = require('prompt-sync')();
//4
var n;
var m = prompt('Please enter number');
if(m > 0){
    n = 1;
    console.log("N =",n);
}else if(m == 0){
    n = 0;
    console.log("N =",n);
}else{
    n = -1;
    console.log("N =",n);
}