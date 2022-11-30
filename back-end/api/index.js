const express = require("express");
const router = require("./routes");
const port = 5051;
const app = express();

router(app);


app.listen(port, () => {
  console.log("servidor rondando http://localhost:5051");
});
