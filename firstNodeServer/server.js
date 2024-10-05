let http=require('http')

const server=http.createServer((req,res)=>{
  console.log(req.url,req.headers,req.method) 

if(req.url === '/info')
{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>kg-coding </title></head>')
  res.write("<body><h1>We Provide all the courses free of cost.</h1></body>")
 res.write('</html>')
 return res.end();
}else if(req.url === '/products')
{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Product</title></head>')
  res.write("<body><h1>here so many products are available in the market.</h1></body>")
 res.write('</html>')
 return res.end();
}else if(req.url === '/cloths')
{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Cloths</title></head>')
  res.write("<body><h1>there are so many cloths types you will see in the market.</h1></body>")
 res.write('</html>')
 return res.end();
}else{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Complete-Coding</title></head>')
  res.write("<body><h1>I am Server Response</h1></body>")
 res.write('</html>')
 res.end();
}
  // process.exit()
})

const PORT=3001;
server.listen(PORT,()=>console.log(`server is runing on http://localhost:${PORT}`));