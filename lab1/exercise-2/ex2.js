var moment = require("moment");

var getCurrentDate = function () {
  var wrapped = moment().format("LLLL");
  console.log(wrapped);
};

getCurrentDate();
