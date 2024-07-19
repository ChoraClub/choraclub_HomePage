const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { subscribeNewsletterTemplate } from "./template/SubscribeMailTemplate"
import { BASE_URL } from "@/config/constants";

export async function sendMail({ to, name, subject, body }) {
  const { SMTP_EMAIL, SMTP_PASSWORD, DKIM_PRIVATE_KEY } = process.env;

  console.log("to", to);
  console.log("name", name);

  let transport;
  try {
    transport = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      // ignoreTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
      dkim: {
        domainName: "dev@chora.club",
        keySelector: "google._domainkey",
        privateKey: DKIM_PRIVATE_KEY
      }
    });
  } catch (error) {
    console.log("error in creating transport", error)
  }

  try {
    const testResult = await transport.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: `${name} <${SMTP_EMAIL}>`,
      to,
      subject,
      html: body,
      // headers: {
      //   "X-Entity-Ref-ID": "newsletter123",
      //   "List-Unsubscribe": `<${BASE_URL}/api/unsubscribe/${to}> <mailto:dev@chora.club?subject=unsubscribe>`,
      // },
      // list: {
      //   unsubscribe: {
      //     url: `${BASE_URL}/api/unsubscribe/${to}`,
      //     comment: "Unsubscribe from this newsletter"
      //   }
      // }
    });

    console.log("sendResult", sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileNewsletterTemplate() {
  const template = handlebars.compile(subscribeNewsletterTemplate);
  const htmlBody = template();
  return htmlBody;
}
