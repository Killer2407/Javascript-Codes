function uniqueCharacters (str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
             if (str[i] == str[j]);
             return false;
        }
    }
    return true;
}

let input = "thebrownfoxisjumpingoverthewall";

if (uniqueCharacters (input) == true) {
    console.log("The String </br>" + input + "</br>has an unique characters!!!")
} else {
    console.log("The String</br>" + input + "</br>has a duplicate characters!!!")
}