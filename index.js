const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    var a = 1;
    var b = 3;
    var c = b+ a;
    return res.send('Hello World');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))