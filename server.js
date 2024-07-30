// importamos los módulos 
const http = require('node:http');
const {webPage} = require('./data.js')

/* con mjs sería 
import http from 'node:http';
import {webPage} from './data.js';
*/

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`
         <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${webPage.title}</title>
            <style>
                body{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                h1{
                    color: purple;
                    font-size: 50px;
                }
                footer img{
                    width: 700px;    
                }
                footer p {
                    font-weight: 700;
                    margin: 50px;
                }
            </style>
        </head>
        <body>
            <h1>${webPage.title}</h1>
            <h2>${webPage.subtitle}</h2>
            <p>${webPage.description}</p>
        <footer>
            <p>${webPage.author} - ${webPage.year}</p>
        </footer>
        <img src="${webPage.gifURL}" alt="gif">
        </body>
        </html>
        `);
})

server.listen(0, () =>{
    console.log(`
        server listening on port http://localhost:${server.address().port}
        `)
})
