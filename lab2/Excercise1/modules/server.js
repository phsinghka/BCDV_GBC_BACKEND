const wallet = require("./wallet");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  //res.end('Hello World');

  if (req.url.includes("/deposit?amount")) {
    let params = new URLSearchParams(req.url).toString().slice(20);
    wallet.depositAmount(params);
    res.end("Deposit Request received: " + params);
  } else if (req.url === "/deposit") {
    wallet.depositAmount(0);
    res.end("Deposit Request received");
  } else if (req.url === "/balance") {
    var balance = wallet.getBalance();
    res.end(`Balance is $${Number(balance)}`);
  } else if (req.url === "/address") {
    wallet.getAddress();
    res.end("Address Request sent");
  } else {
    res.end("Not a Valid Url");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
