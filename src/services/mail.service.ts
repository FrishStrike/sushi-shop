import { IUser } from "@/types/user.interface";
import { makeBaseUrl } from "@/utils/makeBaseUrl";
import axios from "axios";

const BASE_URL = `${makeBaseUrl("/api/sendmail")}`;

export const requestSendMail = async (user: IUser) => {
  try {
    const res = await axios.post(BASE_URL, user);
    return res;
  } catch (error) {
    return "Email send error";
  }
};
