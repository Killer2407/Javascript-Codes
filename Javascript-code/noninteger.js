// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//         var c = string.charAt(i);
//         //indexof method to find the non-repeating character.
//         // But, it wont work if it founds first one it wont find second one.
//         if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//             return c;
//         }
//     }
// }

// var someString = 'aabcbcd';
// console.log(firstNonRepeatedCharacter(someString));


// Approach: Create a reverse and add function to start with a Number,
// reverses its digits, and add the reverse to the original. If the sum is not
// a palindrome, repeating this procedure until it does.

//Iterative function to reverse digits of sum.
function reverse(num) {
    let rev = 0;
    while(num > 0) {
        rev = rev * 10 + num % 10;
        num = parseInt(num/10, 10);
    }
    return rev;
}
//This function is to check whether
//the function is in palindrome or not
function isPalindrome(num) {
    return(reverse(num) === num); 
}
//Reverse and add function
function add(num) {
    let rev = 0;
    while (num <= 4294967295) {
        //Reversing the digit of the number
        rev = reverse(num);
        //Adding the reversed number with the original
        num = num + rev;
        //Checking whether the number is palindrome or not
        if(isPalindrome(num)) {
        console.log(num);
        break;
        }
        else if (num > 4294967295) {
        console.log("No Palindrome");
        }
    }
}
add(195);
add(196);

