// var http = require("http");
// let config = require("../config.json");
// let request = require("request");

// module.exports = function (mobileNumber, otp) {
//   return new Promise((resolve, reject) => {
//     var options = {
//       method: "GET",
//       url:
//         "http://2factor.in//API/V1/" +
//         config.smsKey +
//         "/SMS/" +
//         mobileNumber +
//         "/" +
//         otp +
//         "/welthylife",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//       },
//       form: {},
//     };

//     request(options, function (error, response, body) {
//       if (error) {
//         reject(error);
//       } else {
//         console.log(body);
//         resolve(true);
//       }
//     });
//   });
// };

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

module.exports = function (phone, otp) {
  let twilio = require("twilio")(accountSid, authToken);
  twilio.messages
    .create({
      from: "+19894613565",
      // to: `+91${phone}`,
      to: `+91${phone}`,
      body: `your OTP is ${otp}`,
    })
    .then(function (res) {
      console.log("message has sent!");
    })
    .catch(function (err) {
      console.log(err);
    });
};
