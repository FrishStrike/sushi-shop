import { IUser } from "@/types/user.interface";
import axios from "axios";

const BASE_URL = "http://localhost:3004/users";

export const getAllUsers = async () => {
  const users = axios.get<IUser[]>(BASE_URL);
  return users;
};

export const setUser = async (data: IUser) => {
  axios.post(BASE_URL, data);
};
