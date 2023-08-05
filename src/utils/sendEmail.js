import { transporter } from "@/configs/nodemailer";

export const sendEmail = async (userEmail, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: userEmail.toLowerCase(),
      text: text,
      subject: "code",
    });
  } catch (error) {
    throw new Error("Email error");
  }
};
