var arr =["sachin","ritesh","anil","ashish","anant","gupta","ankit"]

var length =arr.filter(a=> a.length%2 !==0)

var result=length.reduce((a,b) => b.length+a ,0)

console.log(result)
