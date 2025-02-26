import { MailtrapClient } from "mailtrap"
import nodemailer from "nodemailer";
import { EmailTemplate } from "@/components/email-template";
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'felicity.haley66@ethereal.email',
        pass: 'c7uUveH3uGzhyrUSRn'
    }
});
// const subject = 
export const sendEmailNodemailer = async (email, subject, message) => {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: email, // list of receivers
        subject: EmailTemplate({ subject }), // Subject line
        text: message, // plain text body
        html: message, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "4b75367a74619631627d68e952565337";
// const SENDER_EMAIL = "<SENDER@YOURDOMAIN.COM>";
// const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";
const client = new MailtrapClient({ token: TOKEN });

// const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from Mailtrap!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);


// export const sendEmail = async (subject, message) => {
//     const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
//     client
//     .send({
//       from: sender,
//       to: [{ email: RECIPIENT_EMAIL }],
//       subject: subject,
//       text: message,
//     })
//     .then(console.log)
//     .catch(console.error);
// }


export const sendEmail = async (email, subject, message) => {
    const sender = { name: "Mailtrap Test", email: "SENDER@YOURDOMAIN.COM" };
    client
    .send({
      from: sender,
      to: [{ email: email }],
      subject: subject,
      text: message,
    })
    .then(console.log)
    .catch(console.error);
}