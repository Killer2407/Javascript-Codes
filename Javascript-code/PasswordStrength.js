//Hackerrank question to find the password strength.

function findPasswordStrength(password) {
        // Write your code here
        var numbersegments = 0;
        var vowel = 0;
        var consonant = 0;
        
        var password = password.toLowerCase();
        for (var index = 0; index < password.length; index++) {
            if(password.charAt(index) == 'a' || password.charAt(index) == 'e' || password.charAt(index) == 'i' || password.charAt(index) == 'o' || password.charAt(index) == 'u') {
                vowel++;
            }
            else if (password.charAt(index) >= 'a' && password.charAt(index) <= 'z')
            consonant++;
            
            if(vowel >= 1 && consonant >= 1) {
                numbersegments++;
                vowel=0;
                consonant = 0;
            }
        }
        return numbersegments;
    
    }
    
    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
        const password = readLine();
    
        const result = findPasswordStrength(password);
    
        ws.write(result + '\n');
    
        ws.end();
    }