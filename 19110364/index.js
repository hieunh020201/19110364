const express = require('express');
const app = express();
const PORT = 5000;

const studentReq = require('./routes/routes.student')

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use('/', studentReq);

app.listen(PORT);