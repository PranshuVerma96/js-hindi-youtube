function one (){
    const username = 'hitesh'

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
        
        
    }
    // console.log(website);  this is not possible because parent cant not take any  thing from our children
    two();
}
one();

if(true){
    const username = 'hitesh'
    if(username=== 'hitesh'){
        const website = 'crome';
        //console.log(username + website);
        
    }

    // console.log(website);
    
    console.log(username);
    
}
// console.log(username)

// interesting

function addone (value){
    return value +1
}
console.log(addone(8));


// console.log((addTwo(8))); this is error and hosting only line by line
const addTwo = function (num){
    return num +2;
}


