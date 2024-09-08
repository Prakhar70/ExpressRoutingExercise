const express = require('express');
const dotenv = require('dotenv');

//Start reading the env variable from  .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Started server at  ${PORT}`);
});
