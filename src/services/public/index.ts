import { checkNetwork } from "@/utils/utils";
import axios, { AxiosError } from "axios";
import { api } from "../api";

export const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError === true;
};

export const getPublic = async <T>(endpoint: string, params = {}) => {
  const source = axios.CancelToken.source();

  try {
    const response = await api.get<T>(endpoint, {
      cancelToken: source.token,
      params,
    });
    return response;
  } catch (error) {
    if (await checkNetwork()) {
      throw error;
    }
    if (isAxiosError(error) && error?.response?.status === 422) {
      throw error;
    }
  }
};
