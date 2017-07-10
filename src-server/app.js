const express = require('express');
const app = express();

app.use(express.static('build'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use((req, res, next) => {
    res.header("Content-Type",'application/json');
    next();
});

app.get('/api/hello', function (req, res) {
    setTimeout(() => { res.send('Hello World!'); }, 5000);
});

app.get('/api/bogus', (req, res) => {
    res.send(JSON.stringify([
        {
            id: 1,
            name: 'TIFF',
            description: 'Toronto International Film Festival',
            date: '2015-09-10'
        },
        {
            id: 2,
            name: 'The Martian Premiere',
            description: 'The Martian comes to theatres.',
            date: '2015-10-02'
        },
        {
            id: 3,
            name: 'SXSW',
            description: 'Music, film and interactive festival in Austin, TX.',
            date: '2016-03-11'
        }
    ]));
});

const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});