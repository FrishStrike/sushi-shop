import { IUser } from "@/types/user.interface";
import { makeBaseUrl } from "@/utils/makeBaseUrl";
import axios from "axios";

const BASE_URL = `${makeBaseUrl("/api/users")}`;

export const getAllUsers = async () => {
  const users = axios.get<IUser[]>(BASE_URL);
  return users;
};

export const setUser = async (data: IUser) => {
  axios.post(BASE_URL, data);
};
