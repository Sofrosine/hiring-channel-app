const model = require("../Models/user");
const form = require("../Helpers/form");
const model2 = require("../Models/loginEngineer/loginEngineer");
const nodemailer = require("nodemailer");

module.exports = {
  getUser: (req, res) => {
    model
      .getUser()
      .then(response => {
        // Resolve
        form.success(res, response);
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  },
  forgotPassword: async (req, res) => {
    // const {email, password} = req.query
    // model2.loginEngineer(email)
    // .then(response => {
    //   const userEmail = response[0].email
    //   const userPassword = response[0].password

    const main = async () => {
      let userEmail = "sigitwijaya997@gmail.com";
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vegetabeli.id@gmail.com",
          pass: "vegetabeli123"
        }
      });

      let info = await transporter.sendMail({
        from: "vegetabeli.id@gmail.com",
        to: `${userEmail}`,
        subject: "Reset your password for vegetabeli",
        html: `<p>Hello,</p><br><p>Follow this link to reset your <a href="#">vegetabeli</a> password for your ${userEmail} account.</p><br>`
      });

      console.log(`Message sent: ${info.messageId}`);
      console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);  
      form.success(
        res,
        `Message sent: ${
          info.messageId
        }, Preview URL ${nodemailer.getTestMessageUrl(info)}`
      );
    };
    main().catch(console.error);

    // })
    // .catch(err => {
    //   //Reject
    //   console.log(err)
    // })
  }
};
