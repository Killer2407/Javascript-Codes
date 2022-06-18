/////////////////////////////////////////////////////////
// need to dispence the minimum bills available bills [50,100,300]
// for totalvalue =1000
//out put [[300,3],[100,1]]



const atm = (bills,amount)=>{
    //console.log('bills',bills,amount);
    let totalValue = amount;
    let ans =[];
    let arr = bills.sort((a,b)=>b-a);
    //console.log('arrr',arr);
    for(let i = 0; i < arr.length; i++) {
        let count =0;
            while(arr[i]<=totalValue){
            console.log('current', arr[i]);
            totalValue -= arr[i];
            count++;
            console.log('remaining',totalValue, count);
            }
            // if(count){
            ans.push([arr[i],count]);
            // }
    }
         console.log('ans',ans);
}

atm([50,100,5],1350)
