/* function add(a,b){
    return a + b;
} */

/* var add = function(a,b){
    retur
} */

//var add = (a,b) => {return a + b};

//var add = (a,b) => a+b;

 

/* var result = add(2,3);
console.log(result); */

/* (function(){
    console.log('jay');
})(); */


/* function callback(){
    console.log('now adding is successfully completed')
} */

const add = function(a,b, callback){
    var result = a + b;
    console.log('result:' + result); //main function work till here
    callback();
}

//add(3,4, callback)

add(2,3, () => console.log('add completed')); 

