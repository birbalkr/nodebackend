// Fundamentals of javascript
// arrays and objects
//functions return
//async js coding

    var obj = {
        name: "Birbal",
        age: 22,
        city: "delhi",
    }
    
    Object.freeze(obj); // freeze the object to prevent any changes


    console.log(obj.name);

     // update age of obj
    obj.age= 23;

    console.log(obj.age);
    
    


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