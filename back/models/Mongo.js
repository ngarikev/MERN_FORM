const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.MONGO_URI

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Failed to connect:", error);
  }
}


  const formSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10,15}$/, 'Phone number must be between 10 and 15 digits']
    },
    msg: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  
  })

const Form = mongoose.model('Form', formSchema)

module.exports = { connectDb, Form }