import NetInfo from "@react-native-community/netinfo";
import { Toast } from "react-native-toast-notifications";

export const formatCurrency = (value: number) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(value);
};

export const checkNetwork = async () => {
  const networkState = await NetInfo.fetch();

  if (!networkState.isConnected) {
    Toast.show("Verifique sua conexão com a internet e tente novamente!", {
      type: "info",
    });
    return false;
  }
  return true;
};

export const decode = (token: string) => {
  const base64Url = token?.split(".")[1];
  const base64 = base64Url?.replace("-", "+").replace("_", "/");
  const decoded = atob(base64);
  return decodeURIComponent(
    decoded
      .split("")
      .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
      .join("")
  );
};
