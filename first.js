// console.log("i am the best learner!");
// console.log("I am the best Student of prasant sir!")

// let a=6,b=9;
// let data=`Sum: ${a+b} product: ${a*b}`;
// console.log(data)


let fs=require('fs')

fs.writeFile('output.txt',"Writing file",(err)=>{
if(err) console.log('erroe occured!')
  else  console.log("file writing is successfully!")

}
)