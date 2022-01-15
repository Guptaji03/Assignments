var arr =[6,3,5,4,9]

var divisible =arr.filter((a)=> a%3==0);

var multiply =divisible.map((a)=> a**3);

var sum= multiply.reduce((a,b)=> b+a,0 )

console.log(sum)