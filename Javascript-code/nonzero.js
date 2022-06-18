// var object = function(comb) {
//     if (comb === undefined) return [];
//     var result = [];
//     if(comb.length == 1)
//     return comb;

//     for(var i in comb) {
//         var str = comb[i];
//         result.map(function(j) {
//             result.push([str].concat(j));
//         });
//         result.push([str]);
//     }
//     return result;
// }

// console.log(object(['a','b','c']));
// console.log(object([]));
// console.log(object([{char:'a'},{char:'b'},{char:'c'}]));
// console.log(object([2,5,6]));
// console.log(object(['ab']));

function equalCheck(str1, str2) {
    s1L = str1.length;
    s2L = str2.length;
  
    for (let index = 0; index < s2L; index++) {
      if (str2[index] !== str2[index].toUpperCase()) {
        return 'FALSE';
      }
    }
  
    for (let i = 0; i < s2L; i++) {
      if (str1.toUpperCase().includes(str2[i].toUpperCase()) > 0) {
        return 'TRUE';
      } else {
        return 'FALSE';
      }
    }
  }
  
  console.log(equalCheck('ebCde', 'BCD')); //TRUE
  console.log(equalCheck('eCB', 'ECB')); //TRUE
  console.log(equalCheck('BcdEF', 'BCEF')); //TRUE
  console.log(equalCheck('BCD', 'BCD')); //FALSE
   

// function nonzero(nums) {

//     for(let i= nums.length-1; i>=0; i--){
//         if(nums[i]===0){
//             //adding new item to the end of the array.
//             nums.push(0);
//             //splice changes the content of the array by
//             //replacing xisting element 
//             nums.splice(i,1)
//         }
//     }
//     return nums
// }
// var arr= [0,1,0,3,0,6,0,0,0,34,12];
// console.log(nonzero(arr))
