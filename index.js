const express =require('express');
const app = express();
const port = 5001;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sparta:aaaa4321@cluster0.mcun02k.mongodb.net/?retryWrites=true&w=majority'
).then(()=> console.log('MongoDB Connected!'))
    .catch(err => console.log(err))

app.get('/', (req,res)=> res.send('Hello World!!'))

app.listen(port,() => console.log(`Example app listening on port ${port}!`))