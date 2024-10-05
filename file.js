let fs=require('fs')
fs.writeFile('file.txt',"this is vishal nayak",(err)=>{
  if(err) 
    {
      console.log("error!")
    }
  else{
    console.log("successfully written!")
  }
})