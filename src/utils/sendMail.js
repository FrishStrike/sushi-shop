import { transporter } from "@/configs/nodemailer";

export const sendEmail = async (userEmail, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: userEmail,
      text: text,
    });
  } catch (error) {
    throw new Error("Email error");
  }
};
