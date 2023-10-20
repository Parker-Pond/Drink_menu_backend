require("dotenv").config();

const express = require("express");
const PORT = 8080;
const app = express();


function myFirstMiddleware(req, res, next) {
  console.log("Response revived awaiting response");
  next();
}
app.use(myFirstMiddleware);


// ? MORGAN ADDS INFO TO THE CONSOLE.LOGS ON REQUESTS SEND INTO THE SERVER
const morgan = require("morgan");
app.use(morgan("dev"));



//? CORS HELPS THE SERVER TALK WITH AN EXTERNAL FILE AND PREVENTS SECURITY FROM BLOCKING IT
const cors = require("cors");
app.use(cors());

app.use(express.json());

const client = require("./components/db/client");
client.connect();



//? THIS FUNCTION CONNECTS THE EXTERNAL COMPONENTS AND DIRECTS IT TO THE API FILE TO DIRECTS ITS TRAFFIC
app.use("/api", require("./components/api/index"));

app.listen(PORT, () => {
  console.log(`We are now connected to port ${PORT}.`);
});
