import axios, { AxiosError } from "axios";

import { useAuthStore } from "@/store/auth";
import { checkNetwork } from "@/utils/utils";
import { api } from "../api";

export const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError === true;
};

export const getPrivate = async <T>(endpoint: string, params = {}) => {
  const source = axios.CancelToken.source();
  const tokenJwt = useAuthStore.getState().tokenJwt;
  // const tokenJwt = useAuthStore((state) => state.tokenJwt);

  try {
    const response = await api.get<T>(endpoint, {
      cancelToken: source.token,
      params,
      headers: {
        Authorization: `Bearer ${tokenJwt}`,
      },
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

export const patchPrivate = async (
  endpoint: string,
  data: Record<string, unknown> = {}
) => {
  const tokenJwt = useAuthStore((state) => state.tokenJwt);

  try {
    const response = await api.patch(endpoint, data, {
      headers: {
        Authorization: `Bearer ${tokenJwt}`,
      },
    });
    return response;
  } catch (error) {
    if (await checkNetwork()) {
      throw error;
    }
  }
  return null;
};

export const postPrivate = async (
  endpoint: string,
  data: Record<string, unknown> = {}
) => {
  const tokenJwt = useAuthStore((state) => state.tokenJwt);

  try {
    const response = await api.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${tokenJwt}`,
      },
    });
    return response;
  } catch (error) {
    if (await checkNetwork()) {
      throw error;
    }
  }
};

export const deletePrivate = async (
  endpoint: string,
  data?: Record<string, unknown>
) => {
  const tokenJwt = useAuthStore((state) => state.tokenJwt);

  try {
    const response = await api.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${tokenJwt}`,
      },
      ...(data ? { data } : {}),
    });
    return response;
  } catch (error) {
    if (await checkNetwork()) {
      throw error;
    }
  }
};

export const putPrivate = async (
  endpoint: string,
  data?: Record<string, unknown>
) => {
  const tokenJwt = useAuthStore((state) => state.tokenJwt);

  try {
    const response = await api.put(endpoint, data, {
      headers: {
        Authorization: `Bearer ${tokenJwt}`,
      },
    });
    return response;
  } catch (error) {
    if (await checkNetwork()) {
      throw error;
    }
  }
};

// export interface getPrivateParams {
//   DataInicio: string;
//   DataFinal: string;
// }

// export const getPrivateStatement = (
//   endpoint: string
// ): AxiosPromise<getPrivateResponse> => {
//   const { access_token } =
//     (store.getState() as RootState).auth?.accessToken ?? "";

//   const token =
//     (store.getState() as RootState).account?.selectedAccount?.token
//       ?.AccessToken ?? "";

//   const client_id = CLIENT_ID;
//   return api.get(endpoint, {
//     headers: {
//       access_token,
//       client_id,
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
