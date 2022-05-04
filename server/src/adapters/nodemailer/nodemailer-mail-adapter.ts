import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e5dd4dd0b54c3f",
      pass: "08b55c9676c7d5",
    },
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Fred Foo <oi@feedget.com>",
      to: "Alessandro <ale@gmail.com>",
      subject,
      html: body,
    });
  }
}
