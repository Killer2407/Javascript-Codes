
 function Master() {

    @param {string[]} wordlist
      @param {Master} master
      @return {integer}
      this.guess = function(word) {
          ...
      };
  };

var findSecretWord = function (wordlist, master){
        //console.log("wordlist", wordlist, master);
        function match(a,b) {
            let matches = 0;
            for(let i = 0; i < a.length; i++) {
                if(a[i] === b[i]) matches++;
            }
            return matches;
            }

            for (let k = 0; k < 10; k++) {
                const map = new Map();
                const flag = wordlist[Math.floor(Math.random()* 10 % wordlist.length)]
                for(let i = 0; i < wordlist.length; i++) {
                    const dist = match(flag, wordlist[i]) 
                    if(map[dist] == null) {
                        map[dist] = [wordlist[i]]
                        continue;
                    }
                    map[dist].push(wordlist[i])
                }
                const dist = master.guess(flag);
                wordlist = map[dist]
            }
};

findSecretWord("hamada", ["hamada", "khaled"])