// "use strict";
// import nodemailer from "nodemailer";

import forIn from "lodash/forIn";

export function findFormErrors(form, cleanUp) {
  const newErrors = {};
  cleanUp(form);
  const { email, name, message } = form;

  const requiredBody = {
    email,
    name,
    message,
  };
  forIn(requiredBody, function (value, key) {
    if (!form[key]) {
      newErrors[key] = `Este campo es requerido`;
    } else {
      form[key] = value ? value.trim() : "";
    }
  });

  return newErrors;
}

export async function sendMessage(form) {
  // let testAccount = await nodemailer.createTestAccount();
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  // });
  // let info = await transporter.sendMail({
  //   from: '"Rescate Animal Sender" <honvramirez@gmail.com>',
  //   to: "honvramirez@gmail.com",
  //   subject: `RESCATE ANIMAL: ${form.email}`,
  //   html: `Email: ${form.email} <br/>
  //   Nombre: ${form.name} <br/>
  //   Mensaje: ${form.message}`,
  // });
  // console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
