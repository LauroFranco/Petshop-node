const http = require('http');
const url = require('url')
const petshop = require('./petshop');


let server =http.createServer((req,res) =>{
    let urlCompleta = url.parse(req.url , true);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(urlCompleta.pathname=="/")
         res.write("estou na pagina inicial!");
    else if(urlCompleta.pathname=="/home")
        res.write("voce esta no sistema petshop");
    else if(urlCompleta.pathname=="/pet/adicionar"){
        if( petshop.adicionarPet(urlCompleta.query.nome))
            res.end(`foi adicionado o pet ${urlCompleta.query.nome}`)
        else
            res.end("não foi adicionado o pet")
    }
})

server.listen(3000 , 'localhost');