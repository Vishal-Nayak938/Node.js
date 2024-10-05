let http=require('http')

let server=http.createServer((req,res)=>{

res.setHeader('Content-Type','text/html')
res.write('<h1>vishal nayak</h1>')
 return res.end()

})
let PORT=3004;

server.listen(PORT,()=>console.log(`server is runing on http://localhost:${PORT}`));