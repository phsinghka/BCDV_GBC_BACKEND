const events = require("events");
const SHA256 = require("crypto-js/sha256");

var balance = 0;

var eventEmitter = new events.EventEmitter();

const getAddress = function () {
  const address = Math.random(1000);
  console.log(`Wallet Address is ${SHA256(address)}`);
  return `Wallet Address is ${SHA256(address)}`;
};

const deposit = function () {
  console.log("Deposit request received");
};

const transactionReceived = function () {
  console.log("Transaction Recieved ...");
};

eventEmitter.on("deposited", transactionReceived);

const depositAmount = function (amount) {
  balance = Number(balance) + Number(amount);
  eventEmitter.emit("deposited");
  console.log(`Amount: ${amount} deposited`);
};
const getBalance = function () {
  return balance;
};

// var fn = function () {
//   console.log("call me.");
// };

// eventEmitter.on("call", fn);
// eventEmitter.emit("call");

module.exports = {
  getAddress,
  depositAmount,
  deposit,
  getBalance,
};
