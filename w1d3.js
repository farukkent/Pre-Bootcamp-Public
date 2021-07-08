//1

console.log("All integers from 1 to 10")

for (var i = 1; i <= 10; i++) {
  console.log(i)
}


console.log("All integers from 1 to 10")
var num = 1
while(num <= 10) {
  console.log(num)
  num++
}


//2

console.log("All integers from 0 to 255")

for(var i = 0; i <= 255; i++) {
  console.log(i)
}

//with While

console.log("All integers from 0 to 255")
var num = 0
while(num <= 255) {
  console.log(num)
  num++
}

//3


console.log("All odd integers from 1 to 255")

for(var i = 1; i <= 255; i+=2) {
  console.log(i)
}

//with While

console.log("All odd integers from 1 to 255")
var num = 1
while(num <= 255) {
  console.log(num)
  num+=2
}

//4


console.log("All integers from 50 to 0")

for(var i = 50; i >= 0; i--) {
  console.log(i)
}

//with While

console.log("All integers from 50 to 0")
var num = 50
while(num >= 0) {
  console.log(num)
  num--
}

//5

console.log("All integers from 25 to -25")

for (var i = 25; i >= -25; i--) {
  console.log(i)
}


//with While


console.log("All integers from 25 to -25")
var num = 25
while(num >= -25) {
  console.log(num)
  num--
}


//6

console.log(11 % 2 == 0)

console.log("All odd integers from 1 to 255 with modulo")

for(var i = 1; i <= 255; i++) {
  // We have to check if i is odd
  if(i % 2 != 0){
    console.log(i)
  }
}


//with While


console.log(11 % 2 == 0)

console.log("All odd integers from 1 to 255 with modulo")
var num = 1
while(num <= 255) 
{
  if(num % 2 != 0)

  console.log(num)
  num++

}



//7

console.log("Print 1 to 10 with a for loop")

for (var i=1; i<=10; i++)
console.log(i)




console.log("Print 1 to 10 with a while loop")
var num = 1
while(num <= 10) {
  console.log(num)
  num++
}