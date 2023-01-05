const express = require("express");
const dotenv = require("dotenv").config();
const Port = process.env.PORT || 5000;
const app = express();
//Enable body parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/openai", require("./routes/openaiRoutes"));
app.listen(Port, () => {
  console.log(`Server started on port: ${Port}`);
});
