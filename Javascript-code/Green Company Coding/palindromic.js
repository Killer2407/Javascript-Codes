function PalindromicSubstring(str) {
    let res = "";
    let cur = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while (str[left] && str[left] === str[right]) {
                cur = str.substring(left, right + 1);
                if (cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    if (res.length <= 2) {
        return "none";
    }
    return res;

}
// keep this function call here 
console.log(PalindromicSubstring(readline()));