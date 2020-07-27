// const http = require('http');
// const host = 'localhost';
// const port = 8000;
// const server = http.createServer();
// server.on('request', function (request, response) {
//     response.setHeader('Content-Type','text-plain');
//     response.writeHead(200);
//     response.write("Hello ");
//     response.write("World");
//     response.end("!");
// });
// server.listen(port, host, (err) => {
//     if(err) throw err;
//     console.log(`Server is running on http://${host}:${port}`);
// })

// la même chose mais plus court

// const http = require('http');
// const host = 'localhost';
// const port = 8000;
// const server = http.createServer((request, response) => {
//  response.writeHead(200, {
//  'Content-Type':'text-plain'
//  });
//  response.end("Hello World!");
//  });
// server.listen(port, host, (err) => {
// if(err) throw err;
// console.log(`Server is running on http://${host}:${port}`);
// });

// reponse en html

// const http = require('http');
// const host = 'localhost';
// const port = 8000;
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type':'text/html'});
//     let html = `<html><body><h1>Hello world!</h1></body></html>`;
//     response.end(html);
// });   
// server.listen(port, host, (err) => {
//     if(err) throw err;
//     console.log(`Server is running on http://${host}:${port}`);
// });

// reponse avec un fichier html de façon symchrone


// const http = require('http');
// const fs = require('fs');
// const host = 'localhost';
// const port = 8000;
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type':'text/html'});
//     let html = fs.readFileSync('hello.html');
//     response.end(html);
// });   
// server.listen(port, host, (err) => {
//     if(err) throw err;
//     console.log(`Server is running on http://${host}:${port}`);
// });

// reponse avec un fichier html de façon asymchrone

// const http = require('http');
// const fs = require('fs');
// const host = 'localhost';
// const port = 8000;
// const server = http.createServer(function (request, response) {
//     fs.readFile('hello.html',(err, data) => {
//         if(err) throw err;
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         response.end(data);
//     });
// });
// server.listen(port, host, (err) => {
//     if(err) throw err;
//     console.log(`Server is running on http://${host}:${port}`);
// })

// reponse avec un fichier JSON

// const http = require('http');
// const fs = require('fs');
// const host = 'localhost';
// const port = 8000;


// const server = http.createServer(function (request, response) {
//     fs.readFile('hello.html',(err, data) => {
//         if(err) throw err;
//         response.writeHead(200, {
//             'Content-Type': 'text/json'
//         });
//         const task = [
//             {title: "faire mes devoirs"},
//             {title: "lire mon livre"}
//         ]
//         response.end(JSON.stringify(task));
//     });
// });
// server.listen(port, host, (err) => {
//     if(err) throw err;
//     console.log(`Server is running on http://${host}:${port}`);
// })

// reponse en fonction de l'adresse

const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8000;
const server = http.createServer(function (request, response) {
    if(request.url === "/") {
        fs.readFile('hello.html',(err, data) => {
            if(err) throw err;
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    }
    else if(request.url === "/tasks") {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        });
        const tasks = [
            {title: "Faire mes devoirs"},
            {title: "Lire l'article MOZ"}
        ]
        response.end(JSON.stringify(tasks));
    }
});
server.listen(port, host, (err) => {
    if(err) throw err;
    console.log(`Server is running on http://${host}:${port}`);
})
