/* 
NOTE: while creating backend APIs it's a good practice to keep the response in a constant structure.

*/
const express = require("express");
const { responseBody } = require("./utility/responseBody"); // response body builder for consistency
require("dotenv").config();

const app = express();
app.use(express.json()); // need to parse request body
// express.urlencoded({extended: false}) // uncomment this if you are dealing with html forms.
const PORT = process.env.PORT; // use env variables for hiding sensitive data. env file should not be committed to public repo

// GET request used for fetching a resource
app.get("/get", (req, res) => {
  let responseData = req.query; // contains queryParams
  let { name, data } = req.query; // object destructuring
  try {
    // perform the IO/DB operation here
    res.status(200).send(responseBody(responseData)); // send the response back to client
  } catch (error) {
    console.log(error);
    res.status(500).send(responseBody({}, "something went wrong", false)); // send the response back to client
  }
});

// POST Request used for Creating a Resource
app.post("/post", (req, res) => {
  let responseData = req.body;
  let { data, filters } = req.body; // object destructuring
  try {
    // perform the IO/DB operation here
    res.status(200).send(responseBody(responseData)); // send the response back to client
  } catch (error) {
    console.log(error);
    res.status(500).send(responseBody({}, "something went wrong", false)); // send the response back to client
  }
});

// PUT request used for replacing a Resource
app.put("/put", (req, res) => {
    let responseData = req.body;
  try {
    // perform the IO/DB operation here
    res.status(200).send(responseBody(responseData)); // send the response back to client
  } catch (error) {
    console.log(error);
    res.status(500).send(responseBody({}, "something went wrong", false)); // send the response back to client
  }
});

// PATCH request for updating a resource
app.patch("/patch", (req, res) => {
  try {
    let responseData = req.body;
    // perform the IO/DB operation here
    res.status(200).send(responseBody(responseData)); // send the response back to client
  } catch (error) {
    console.log(error);
    res.status(500).send(responseBody({}, "something went wrong", false)); // send the response back to client
  }
});

// DELETE request for removing a resource
app.delete("/delete", (req, res) => {
    let responseData = req.body;
  try {
    // perform the IO/DB operation here
    res.status(200).send(responseBody(responseData)); // send the response back to client
  } catch (error) {
    console.log(error);
    res.status(500).send(responseBody({}, "something went wrong", false)); // send the response back to client
  }
});

//  server listening on a given PORT
app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
