import React, { useState } from "react";
import axios from 'axios';
import {
  Button,
  Container,
  Form
} from "react-bootstrap";

function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const data = {
    fname: fname,
    email: email,
    phone: phone,
    msg: msg,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    await axios.post("https://mern-form-api-five.vercel.app", data);
    alert('Data sent');
    console.log(data);
   } catch (error) {
    console.log(error);
   }
  };
  return (
    <>
      <Container className="mt-5">
        <Form  className="" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 w-50 m-auto">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto">
            <Form.Label>Send message</Form.Label>
            <Form.Control
              as="textarea"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="write here..."
            ></Form.Control>
            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default App;
