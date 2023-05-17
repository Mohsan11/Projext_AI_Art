const express = require("express");
const dotenv = require("dotenv").config();
const Port = process.env.PORT || 5000;
const app = express();
const path = require("path");
const cors = require("cors");
//Enable CORS
app.use(express.json());
app.use(cors());

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set Static Folder
app.use(express.static(path.join(__dirname, "Public")));

app.use("/openai", require("./routes/openaiRoutes"));
app.listen(Port, () => {
  console.log(`Server started on port: ${Port}`);
});
