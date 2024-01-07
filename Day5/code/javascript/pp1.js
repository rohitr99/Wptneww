var arr=[10,20,80,5,50]
console.log("before sorting",arr)
arr.sort((n1,n2)=>{
    if(n1>n2)
    return 1
    if(n2>n1)
        return -1
    else
    return 0
})
console.log(arr)