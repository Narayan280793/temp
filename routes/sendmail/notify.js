const log = require("../../helper/logger");
var nodemailer = require("nodemailer");
let config = require("../../config.json");
var fs = require("fs");

// router.post('/', (req, res) => {
module.exports = {
  sendMail: (from, to, subject, body) => {
    return new Promise((resolve, reject) => {
      log.debug("/api/sendnotification/");
      // console.log(config.auth.user, config.auth.pass);
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nikhilnirwan2000@gmail.com",
          pass: "rprkeujlbmgjoosa",
        },
      });
      var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: body,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(info.response);
        }
      });
    });
  },
};
// });
// module.exports = router;
// {
//     out: "body",
//     subject: "subject",
//     email: "email",
//     from: ""
// }
