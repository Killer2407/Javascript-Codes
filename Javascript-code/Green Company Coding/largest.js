function closest(n, m) {

    // find the quotient
    let quotient = parseInt(n / m);

    // 1st possible close number
    let a = m * quotient;
    let b = n * m;
    // 2nd possible close number
    if (b > 0) {
        b = (m * (quotient + 1));
    } else {
        b = (m * (quotient - 1));
    }

    // if true, then a is the required close number
    if (Math.abs(n - a) < Math.abs(n - b))
        return a;

    // else b is the required close number
    return b;
}

let n = 13;
let m = 4;
console.log(closest(n, m)); //12

let c = -15;
let d = 6;
console.log(closest(c, d)); //-18

let e = 0;
let f = 8;
console.log(closest(e, f)); //0

let g = -18;
let h = 0;
console.log(closest(g, h)); //Nan



/*class Solution(object):
def longestPalindrome(self, s):
dp = [[False for i in range(len(s))] for i in range(len(s))]
for i in range(len(s)):
dp[i][i] = True
max_length = 1
start = 0
for l in range(2,len(s)+1):
for i in range(len(s)-l+1):
end = i+l
if l==2:
if s[i] == s[end-1]:
dp[i][end-1]=True
max_length = l
start = i
else:
if s[i] == s[end-1] and dp[i+1][end-2]:
dp[i][end-1]=True
max_length = l
start = i
return s[start:start+max_length]
ob1 = Solution()
s1=input('Input string \n')
if(len(ob1.longestPalindrome(s1))>1):

print(ob1.longestPalindrome(s1))
else:
print('None')

Output:

Input string
rtg
None*/

