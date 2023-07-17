const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  //cause index.js run again but in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();

  //   // Fork workers on behalf of your SERVER CPU Cores
  //   for (let i = 0; i < numCPUs; i++) {
  //     if (i === 4) break;
  //     cluster.fork();

  //     console.log(i, "- Instance Created ");
  //   }
} else {
  //I'm child mode asct like a server
  const express = require("express");
  const app = express();
  const PORT = 4000;

  // for blocking the code
  //block thread for given duration in millisecond.
  function DoWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }
  app.get("/", (req, res) => {
    DoWork(5000);
    res.send("Hello");
  });

  //fast Router
  app.get("/fast", (req, res) => {
    res.send("This is fast route!!");
  });

  app.listen(PORT);
}
