const http=require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});

    res.end(`<h1>Welcome to node js server </h1><p> this is basic web server created using node js httpmodule.</p><p>Current time :${new Date().toLocaleString()}</p>`);
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})