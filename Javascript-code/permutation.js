function permutation(str1, str2) {
    //get length of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    //If length of both strings is not same
    //then they cannot be permutated

    if(n1 != n2) {
        return false;
    }
    let ch1 = str1.split('');
    let ch2 = str2.split('');

    //Sort both Strings

    ch1.sort();
    ch2.sort();

    //Compare sorted strings

    for(let i = 0; i < n1; i++) {
        if(ch1[i] != ch2[i]) {
            return false;
        }
    }
    return true;
}

let str1 = "Test";
let str2 = "Ttew";

if (permutation(str1, str2)) {
    console.log("Yes") 
} else {
    console.log("No")
}

/*In the above implementation quicksort is used
which may be O(n^2) in worst case. If we use a O(nlogn)
sorting algorithm like merger sort, then the complexity
becomes O(nLogn)*/