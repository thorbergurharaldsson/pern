//importing express and initializing the app:
import express from "express";
const app = express();

//import the cors middleware:
import cors from "cors";
// import dotenv
import dotenv from "dotenv";
dotenv.config();

// import pg to communicate with the PSQL db
import pkg from "pg";
const { Client } = pkg;

const PORT = 5001; //we will use port 5001

app.use(cors()); //telling express to use the cors middleware

app.get("/", async (req, res) => {
  // create a connection to the database
  const client = new Client();
  await client.connect();
  // querying the database for all rows in the table 'devices'
  const data = await client.query("SELECT * FROM devices");
  // send the data
  res.send(data.rows);
  await client.end();
});

app.listen(PORT, () => {
  //listen to the port we chose above
  //print to the console that the server is listening
  console.log("listening to port: " + PORT);
});
