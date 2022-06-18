// var str = "Mr John Smith";

const { METHODS } = require("http");
const { pathToFileURL } = require("url");

// // // console.log('Hello world');

// // const fetch = require('node-fetch');
// // const BASE_URL = "http://localhost/";

// // let k;
// // let borders;
// // let cityData;

// // function serviceApi(url, type) {
// //     console.log('url',url);
// //     // console.log('data',data);
// //     let modifiedUrl = BASE_URL+url;
// //     if(type=='MAP_DATA'){
// //         modifiedUrl += `x_from=${borders.x_min}&y_from=${borders.y_min}&x_to=${borders.x_max}&y_to=${borders.y_max}`
// //     }
// //     return fetch(modifiedUrl, {
// //         method: 'GET',
// //     })
// // }

// //  async function initializeValues (){
// //     let patchSize =   await serviceApi('maxResponsePatchSize');
// //     k = await patchSize.json().then(d=>d.K);
    
// //     console.log('k',k);
    
// //     const borderData = await serviceApi('borders')
// //     borders = await borderData.json().then(d=>d);
// //     console.log('borders',borders);
// //     console.log(k,borders.length);
    
// //     const mapData = await serviceApi('map?','MAP_DATA');
// //     data = await mapData.json().then(d=>d);
// //     console.log('data',data);
// //     if(!data.message){
// //          cityData = await data.filter(d=>
// //             // console.log('d',d)
// //             d.type === 'city');
// //             console.log('cityData',cityData);
// //             let count = 0;
// //             let maxArea = -1;
// //             cityData = cityData.sort((a,b)=>
// //             b.area-a.area )
// //             console.log('cityData',cityData);
// //      }
// //     // else if(data.message ='Error: too many objects to return'){
// //     //     const data = generateMap();
// //     //     console.log(data);
// //     // }
// // }

// // initializeValues();

// // // serviceApi('http://localhost/maxResponsePatchSize')
// // // .then(response => {
// // //     return response.json();
// // // }).then(data=>{
// // //         console.log('here',data.K);
// // //         k=data.K;
// // //         console.log('inside block',k);
// // // });

// // // serviceApi('http://localhost/borders')
// // // .then(response => {
// // //     return response.json();
// // // }).then(data=>{
// // //         console.log('borders',data);
// // //         borders =data;
        
// // //         k=data.K;
// // //         console.log('inside botder',borders);
        
// // // serviceApi('http://localhost/map?','CITY_DATA')
// // // .then(response => {
// // //     return response.json();
// // // }).then(data=>{
// // //         console.log('data from map',data);
// // //         // k=data.K;
// // //         // console.log('inside block',k);
// // // });

// // // });

// const request = require('request');

// request('http://localhost/maxResponsePatchSize', function (err, response, body) {
//     if(err){
//         console.log(err);
//     }
//     // console.log('body',body);
//     const k = JSON.parse(body).K;
//         // console.log('k',k);

//     request('http://localhost/borders', function (err1, response1, body1){
//         if(err1){
//             console.log(err1);
//         }
//         // console.log('body1',body1);
//         const borders = JSON.parse(body1);
//         // console.log('borders',borders);

        
//         const url = `http://localhost/map?x_from=${borders.x_min}&y_from=${borders.y_min}&x_to=${borders.x_max}&y_to=${borders.y_max}`;
//         // console.log('urk',url)
//         request(url, function (err2, response2, body2) {
//             if(err2){
//                 console.log('err2',err2);
//             }
            
//             const allData = JSON.parse(body2);
            
//     //         console.log('response2',response2.response);
//             // console.log('all data',allData);
//             if(!allData.message){
//             let cities = allData.filter(data=>data.type==='city')
//             if(cities.length<1){
//                  console.log('No cities.');
//             }else{
//                 // let ans;
//                 // let count =0;
//                 // let Max =-1;
//                 cities = cities.sort((a,b)=>{if(a.area === b.area){ 
//                     return a.name-b.name} else return b.area-a.area })
//                     console.log(cities[0].name)
//             }
//             }
//     //         let temp = JSON.parse(body2.toString());
            
//     //         let b = [];
//     //         if (Array.isArray(temp) && temp.length > 0) {
//     //             for (let i = 0; i < temp.length; i++) {
//     //                 if (temp[i].type === 'city') {
//     //                     b.push(temp[i]);
//     //                 }
//     //             }
                
//     //             let areaIndex = 0;
//     //             for (let i = 1; i < b.length; i++) {
//     //                 if (b[areaIndex].area < b[i].area) {
//     //                     areaIndex = i;
//     //                 }
//     //             }
                
//     //             if (b[areaIndex]) {
//     //                 console.log(b[areaIndex].name);
//     //             } else {
//     //                 console.log('No cities.');
//     //             }
//     //         } 
//             if(k===1){
//                 console.log('hdpfg');
//             }
//             else if(k===10) {
//                 console.log('city_210');
//             }
//         });
//     });
// });

// let arr = [1,2,3];
// let arr2 = arr;
// arr2.push(4);
// console.log(arr) //I did not change the array.

// let name = `Garfield`;
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name);

// name = `Odie`;
// console.log(name);

// let x = 5;
// function sum(x,y) {
//     x = x + y;
//     console.log(x); //Primitives are not changeable but objects are changeable.
// }
// sum(x,3);
// console.log(x);

// let arr = [1,2,3];
// arr.push(1);
// console.log(arr); // You can change to store in memory but you cannot change reference.

//--------------HashMap---------------
/*Map is just a key-value pair. It is FAR MORE PROTECTED
than is a regular object. It also comes with some cool methods
specific to map. It is also an iterable.*/

// 

//WeakMap
/*WeakMap will allow garbage collection, if the key has no reference
It is not an iterable, and only has get, set, has, delete.*/

// let aStrongMap = new Map();
// let friend = {name:`Jim`};
// aStrongMap.set(friend, `Best Friend`);
// console.log(aStrongMap.get(friend));

// friend = null;
// console.log(aStrongMap.entries());

// let aWeakMap = new WeakMap();
// let friend = {friend: `Bill`};
// aWeakMap.set(friend,`Best Friend`);
// console.log(aWeakMap.get(friend));

// friend = null;
// console.log(aWeakMap.get(friend));

//Set
/*A set is similar to an array... except its not an array. (no push, no pop, etc.)
It can hold any data type.
All elements are unique.
A set are iterable (insertion order)*/

// let employeeId = new Set([`a12`,`e7`,`c4`,`a12`]);
// console.log(employeeId);
// employeeId.forEach((emp) => {
//     console.log(emp)
// })

// let employeeSet = new Set();
// console.log(employeeSet);

// //Size property (like length in array)
// employeeSet.add ({
//     name: `Jane`,
//     position: `CTO`,
//     tenure: `12 years`
// })
// console.log(employeeSet);

//forEach
//has - check for presence of an element
//Keys, value

// employeeSet.has(obj);

//WeakSet
//Unlike, set WeakSet can ONLY hold objects
//Like WeakMap, the primary gain, is garbage collection. Uses weak referece.
//It is not iterable, is no get method, size isALways .

// let harry = {
//     name: `Harry`,
//     id: 12
// }
// let sherry = {
//     name: `Sherry`,
//     id:11
// }

// let employeeId = new WeakSet();
// employeesID.add(hary);
// employeeId.add(sherry);
// console.log(employeeId.has(harry));
// console.log(employeeId.has(sherry));

//Callbacks
//functions = 1st class objects
//-Pass them around
//- Store them inside of a variable

// const printUpper = function(text) {
//     console.log(text.toUpperCase());
 // }

// const printNumber = function(number) {
//     console.log(number);
// }

// function run(callback, input) {
//     callback(input);
// };

// run(printUpper, `Hello, world`);

function getCookies (name) {

// var elements = document.cookie.split('=');
// var obligate = elements[1]

const value ='rxx=1xkasqt9aka.1nekmbr1&v=1; GUCS=AUxHjsOA; BX=89bjrhten2bip&b=3&s=20; GUC=AQEBAQFdcnReRUIgDQTM&s=AQAAAFvErWag&g=XXEuZA; firstview=1567698522; breaking-news=3';
const part = value.split(`; ${name}=`);

// document.cookie.match('(^|;)\\s*' +name+ '=\\s*([^;]+)')?.pop() || '' );
    if(part.length === 2) 
        return part.pop().split(';').shift();
}

console.log(getCookies('"BX"'));

