// Given two strings ‘a’ and string ‘b’, we have to check 
// if they are anagrams of each other or not and return True/False.

async function anagram(str1,str2){
    let result;
    for(let i of str1){
        if(str2.includes(i) && (str1.length == str2.length)){
            result=true
        }
        else{
            result=false;
        }
    }
   
return await result
}
console.log("2")
let res=anagram("6","aabsa");
res.then(_=>console.log(_))
console.log("1")