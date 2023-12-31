require("dotenv").config();
const express = require('express')


const app = express()
const port =5000;
const connectToDatabase = require('./bd');
connectToDatabase();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require('./Routes/CreateUser'))

app.listen(port, () => {
  console.log(`server is running  on port ${port}`)
})