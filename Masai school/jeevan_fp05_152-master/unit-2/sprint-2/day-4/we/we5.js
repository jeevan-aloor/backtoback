let arr=[1,2,3,4]
let x=arr.filter(function(ele){
    return ele%2==1
}).reduce(function(acc,ele){
    return acc+ele
})
console.log(x)
