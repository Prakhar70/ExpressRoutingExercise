const express = require('express');
const { PORT, EMAIL } = require('./config/server.config');
const router = require('./routes');// it will directly take index.js no need to mention './routes/index.js'
const customRouter = require('./routes/customrouter')

const app = express();

app.use('/', router);
app.use('custom', customRouter);//localhost:3000/custom/custom2

app.listen(PORT, ()=>{
    console.log(`Started server at  ${PORT} ${EMAIL}`);
});

/**
 * 
 * How will you manage these kind of routes using express router?
 * 
 * localhost: 3000/api/v1/products/:id
 * localhost: 3000/api/v1/categories/:id
 * localhost: 3000/api/v1/products/:id
 * localhost: 3000/api/v2/categories/:id
 */