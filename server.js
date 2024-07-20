const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Specifically parse JSON data & add it to the request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Jee, My name is Nitish");
});

app.post('/api/cars', (req, res) => {
   const { name, brand } = req.body;
   console.log(name);
   console.log(brand);
   res.send("Car submitted successfully.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Connection Successful")})
.catch(()=>{console.log("Recieved an error")});