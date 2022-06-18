// //What is a promise? 
// /*
// 1. Does promise make my code faster? 
// Ans. No. In fact, I think it makes it slower.
// 2. Does a promise give me new power?
// Ans. No. JS runs exactly the same as always.

// Promises is a Javascript constructor that gives you 
// a few cool method.
// - then
// - catch
// - All
// - race
// - resolve, reject.
// A promise constructor takes 1 arg:
// 1. Callback
// The callback itself has 2 arguments:
// 1. resolve - provided by JS... a callback!
// 2. reject - provided by JS... a callback!
// Now that we are inside the callback, the code starts running!
// */

// const { METHODS } = require("http");

// // const { callbackify } = require("util");



// // let myFirstpromise = new Promise((resolve, reject) => {
// //     console.log("Hey");
// //     const lang = (
// //         'JS',
// //         'Java',
// //         'Go'
// //     )
// //     reject("I did not finish")//Something went wrong
// //     resolve(lang);
    

// // });
// // console.log(myFirstpromise);

// // //The then will go on the promise OUTSIDE of a promise will look at the promise.
// // //It will keep an eye on the promise.
// // //When the resolve callback is run inside of the promise, the then will
// // //fire off its callback.
// // //then takes 1 arg: callback to run.
// // myFirstpromise.then((promiseData) => {
// //     console.log(promiseData);
// // })

// // myFirstpromise.catch((promiseError) => {
// //     console.log(promiseError);
// // });

// // console.log("=========");
// // console.log("I am the last line in the program");
// // console.log("=========");

// function one() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("2 seconds has passed.");
//         },2000)
//     })
// }

// function two() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("1 second has passed");
//         },1000)
//     })
// }

// const promiseOne = one();
// const promiseTwo = two();
// promiseOne.then((messageFromPromise) => {
//     console.log("=====1====")
//     console.log(messageFromPromise);
//     console.log(promiseOne);
// })
// promiseTwo.then((messageFromPromise) => {
//     console.log("=====2====")
//     console.log(messageFromPromise);
//     console.log(promiseTwo);
// })
// console.log(promiseOne);
// console.log(promiseTwo);

// const promiseArray = [promiseOne, promiseTwo];
// console.log(promiseArray);

// // all METHODS....
// // Promise.all takes 1 args:
// //an Array of Promises

// //race Method
// /*Promise.race takes 1 arg:
// an array of promises we run then just like always
// this will run as soon as any promise is resolved.*/
// Promise.race(promiseArray).then((data) => {
//     console.log("All the promises are done");
//     console.log(data)
// })


