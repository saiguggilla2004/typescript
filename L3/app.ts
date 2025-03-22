function add(num1:number,num2:number,cb:(n1:number)=>void):number{
   let result:number=num1+num2;
   cb(result)
   return result;
}

let ans:number=add(10,20,(result)=>{
    console.log(result);
    
})

console.log(ans);
