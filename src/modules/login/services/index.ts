import { getPublic } from "@/services/public";
import { IUserInfo, useAuthStore } from "@/store/auth";

interface ResponseData {
  usuario: string;
  email: string;
  telefone: string;
  funcao: string;
  claimType: string;
  claimValue: string;
  tokenJwt: string;
  hash: any;
  hashValue: string;
}

export const logIn = async (user: string, password: string) => {
  const { setTokenJwt, setUserInfo } = useAuthStore.getState();

  const url = `https://adminappfinancas20250308102655.azurewebsites.net/api/v1/Usuario?username=${user}&password=${password}`;
  const response = await getPublic<ResponseData>(url);

  setTokenJwt(response?.data?.tokenJwt || "");
  const userInfo: IUserInfo = {
    userName: response?.data?.usuario || "",
    userEmail: response?.data?.email || "",
    userPhone: response?.data?.telefone || "",
    userRole: response?.data?.funcao || "",
  };
  setUserInfo(userInfo);

  return response?.data;
};
