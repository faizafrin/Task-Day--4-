// question 1. How to compare two Json have the same properties without order
//a. let obj1 = {name:"person1", age:5};
//b. let obj2 = {age:5, name:"person1"};

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var result=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            result=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log(result);
//output:
//true


 
//question 2. 
//use rest countries API URL and display all the countries flag in the console

//step1: create a XHR object
 var request = new XMLHttpRequest();
 //API URL
 //open method
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i =0;i<result.length; i++){
        console.log(result[i].flags);
    }
 }


 //Question 3
 //use the same rest countries and print all countries name, region,sub-region,and population

 /*let request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i=0; i<result.length;i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);

    }
 }
 */