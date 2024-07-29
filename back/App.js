const express = require('express');
const { connectDb, Form } = require('./models/Mongo');
const cors = require('cors');
require('dotenv').config();

 const app = express();

 connectDb();


 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(cors());

 app.post("/", async (req, res) =>{
    const data = req.body
    const newForm = new Form(data)

    try {
      await newForm.save()
      res.status(200).send("Ok")
    } catch (error) {
      console.log(error);
    }
 })                                                                                                  
 
 app.get("/", (req, res) =>{
  res.json('Hello')
 })

const port = process.env.PORT || 5000;

 app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
 })