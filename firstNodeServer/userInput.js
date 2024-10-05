let http=require('http')

const fs=require('fs')

const server=http.createServer((req,res)=>{
  // console.log(req.url,req.headers,req.method) 
if(req.url === '/Home')
{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Home</title></head>')
  res.write('<body>')
  res.write('<h1>Enter Your Details.</h1>')
  res.write('<form action="/submit-details" method="POST">');

  res.write('<label for="userName">user Name</label>');
  res.write('<input type="text" id="userName" name="username" placeholder="enter your name..."><br/><br/>');
  res.write('<label for="Gender">Gender : </label><br/>');
  res.write('<input type="radio"  name="gender"  id="male" value="Male">');
  res.write('<label for="male">Male</label><br/><br/>');

  res.write('<input type="radio" id="female"  name="gender"  value="FeMale">');
  res.write('<label for="female">Female</label><br/><br/>');
  res.write('<input type="radio"  name="gender" id="Transgender"value="Transgender">');
  res.write('<label for="Transgender">Transgender</label><br/><br/>');
  res.write('<button type="submit">Submit</button>')
  res.write('</form>');
  res.write('</body>');
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
}

else if(req.url.toLowerCase() === '/submit-details' && req.method ==='POST')
{
fs.writeFileSync('user.txt',"Vishal Nayak");
res.statusCode=302;
res.setHeader('Location','/Home')
return res.end();//powerfull
}

else{
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Complete-Coding</title></head>')
  res.write("<body><h1>I am Server Response</h1></body>")
 res.write('</html>')
 res.end();
}
  // process.exit()
})

const PORT=3000;
server.listen(PORT,()=>console.log(`server is runing on http://localhost:${PORT}`));