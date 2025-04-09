import { create } from "zustand";

export interface IUserInfo {
  userName: string;
  userEmail: string;
  userPhone: string;
  userRole: string;
}

interface AuthState {
  tokenJwt: string;
  userInfo: IUserInfo;
  //   valueField: string;
  //   disabled: boolean;
  //   valueCopy: string;
  //   valuePixStatement: string | number; // Valor pix extrato - repetir valor
  //   suspiciousKey: boolean;
  //   onboardingPixKey: boolean;
  //   cancelPix: boolean;
  //   saveBeneficiaryPayload: ContactInfo;
  //   transferValue: number;
  setTokenJwt: (token: string) => void;
  setUserInfo: (info: IUserInfo) => void;
  //   setValueCopy: (type: string) => void;
  //   setValuePixStatement: (type: string | number) => void;
  //   setDisabled: (type: boolean) => void;
  //   setSuspiciousKey: (isSuspicious: boolean) => void;
  //   setOnboardingPixKey: (type: boolean) => void;
  //   setCancelPix: (cancelPix: boolean) => void;
  //   setSaveBeneficiaryPayload: (payload: ContactInfo) => void;
  //   setTransferValue: (type: number) => void;
  //   setValueField: (type: string) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  tokenJwt: "",
  userInfo: {} as IUserInfo,
  //   disabled: true,
  //   valueField: "",
  //   valueCopy: "",
  //   valuePixStatement: "",
  //   suspiciousKey: false,
  //   onboardingPixKey: false,
  //   cancelPix: false,
  //   saveBeneficiaryPayload: {} as ContactInfo,
  //   transferValue: 0,
  //   setValuePixStatement: (type) => set({ valuePixStatement: type }),
  setTokenJwt: (token) => set({ tokenJwt: token }),
  setUserInfo: (info) => set({ userInfo: { ...get().userInfo, ...info } }),
  //   setValueCopy: (type) => set({ valueCopy: type }),
  //   setValueField: (type) => set({ valueField: type }),
  //   setDisabled: (type) => set({ disabled: type }),
  //   setSuspiciousKey: (isSuspicious) => set({ suspiciousKey: isSuspicious }),
  //   setOnboardingPixKey: (type) => set({ onboardingPixKey: type }),
  //   setCancelPix: (cancelPix) => set({ cancelPix: cancelPix }),
  //   setSaveBeneficiaryPayload: (payload) =>
  //     set({ saveBeneficiaryPayload: payload }),
  //   setTransferValue: (value) => set({ transferValue: value }),
  reset: () =>
    set({
      tokenJwt: "",
      userInfo: {} as IUserInfo,
    }),
}));
