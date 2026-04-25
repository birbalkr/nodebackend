// Fundamentals of javascript
// arrays and objects
//functions return
//async js coding

// ****************** async ******************

async function abc(){
    var api = await fetch(`https://randomuser.me/api/`);
    var res = await api.json();

    console.log(res.results[0].name);
}

abc();

// ****************** objects ******************
    // var obj = {
    //     name: "Birbal",
    //     age: 22,
    //     city: "delhi",
    // }

    // Object.freeze(obj); // freeze the object to prevent any changes


    // console.log(obj.name);

    //  // update age of obj
    // obj.age= 23;

    // console.log(obj.age);
    
// *************** function ***************** 

function abcd(a,b,c){
    return "hello world";
}

var call= abcd();

console.log(call);
// without parameters in function
// console.log(abcd.length);

// when pass parameters in function. function length will give the number of parameters in function
console.log(abcd.length);



// ***************** array ******************

// var arr = [1, 12, 3, 14, 5];
// // foreach map filter find indexOf

// arr.forEach(function (val) {
//     val
//     console.log(val);
    
// })

// var maparr=arr.map(function (val) {
//     return val;
    
// })

// console.log(maparr);


// var filterarr = arr.filter(function (val) {
//     if (val>=12) {return true;}
//     else return false;
// })

// console.log(filterarr);

// var findarr = arr.find(function (val) {
//     if (val>=12) {return true;}
//     else return false;
// })

// console.log(findarr);

// var indexofarr = arr.indexOf(3);
// console.log(indexofarr);