<<<<<<< HEAD
const http = require('http');
const fs = require('fs')



const server = http.createServer((req,res) => {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is Home Page</h1>");
        res.end();

    }else if(req.url == '/about'){


        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is About Page</h1>");
        res.end();

    }else if(req.url == '/contact'){


        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is Contact Page</h1>");
        res.end();

    }else if(req.url == '/file-write'){


        //asynchronus writeFile
        fs.writeFile('demo.txt','Hello World',(err) => {
            if(err){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Fail");
            res.end();
            }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Success");
            res.end(); 

            }
        })
        
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("Content not found");
        res.end();
    }

});

server.listen(3000,() => {
    console.log('Server is running at 3000 port...')
=======
const http = require('http');
const fs = require('fs')



const server = http.createServer((req,res) => {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is Home Page</h1>");
        res.end();

    }else if(req.url == '/about'){


        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is About Page</h1>");
        res.end();

    }else if(req.url == '/contact'){


        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>This is Contact Page</h1>");
        res.end();

    }else if(req.url == '/file-write'){


        //asynchronus writeFile
        fs.writeFile('demo.txt','Hello World',(err) => {
            if(err){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Fail");
            res.end();
            }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Success");
            res.end(); 

            }
        })
        
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("Content not found");
        res.end();
    }

});

server.listen(3000,() => {
    console.log('Server is running at 3000 port...')
>>>>>>> eac8f8087e1230f38cb1d11080500a9abc7ccffb
})