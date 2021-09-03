const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const blogs = fs.readFileSync('./blogs.html')
const contribute = fs.readFileSync('./contribute.html')
const contactUs = fs.readFileSync('./contactUs.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/blogs'){
        res.end(blogs);
    }
    else if(url == '/contibute'){
        res.end(contibute);
    }
    else if(url == '/contactUs'){
        res.end(contactUs);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });