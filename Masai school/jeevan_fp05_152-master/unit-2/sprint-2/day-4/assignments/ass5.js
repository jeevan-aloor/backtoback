let arr=[2, 4, 5, 3, 6, 8];
let x=arr.filter(function(ele,index){
    return(index%2==0 && ele%2==0)

})
console.log(x)
