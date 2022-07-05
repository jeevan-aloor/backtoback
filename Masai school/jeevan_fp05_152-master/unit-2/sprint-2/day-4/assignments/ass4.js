let arr=["A", "Good", "Problem"];
let x=arr.map(function(ele,index){
    return(ele.length)
}).filter(function(ele){
    return(ele%2!=0)
}).reduce(function(acc,ele){
    return(acc+ele)
})
console.log(x)



