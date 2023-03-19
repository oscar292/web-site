const http = require('http');


http.createServer((req, res) => {


    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv'})

    // res.write('id, nombre\n');
    // res.write('1, Oscar\n');
    res.write('Carcteristicas');

    res.end();

}).listen(8080);


console.log('escuchando el puerto', 8080)