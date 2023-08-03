import { IUser } from "@/types/user.interface";
import { makeBaseUrl } from "@/utils/makeBaseUrl";
import axios from "axios";

const BASE_URL = `${makeBaseUrl("/api/sendmail")}`;

export const requestSendMail = async (user: IUser) => {
  const res = await axios.post(BASE_URL, user);
  return res;
};
