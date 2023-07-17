const express = require("express");
const app = express();
const PORT = 4000;

// for blocking the code

function DoWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}
app.get("/", (req, res) => {
  DoWork(5000); //block main thread for 5 sec.
  res.send("Hello");
});

app.listen(PORT);
