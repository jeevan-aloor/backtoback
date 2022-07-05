let arr=[1,2,3,4,5,6]
let x=arr.filter(function(ele){
    return ele%3==0
}).map(function(ele){
    return ele**3
}).reduce(function(acc,ele){
    return acc+ele
})
console.log(x)
