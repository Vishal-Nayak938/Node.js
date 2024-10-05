let fs=require('fs')
fs.writeFile("first.txt","hi this is vishal nayak to the front of you!",(err)=>{ if(err)
console.log("error occured")
else console.log('successfully written')
}
)