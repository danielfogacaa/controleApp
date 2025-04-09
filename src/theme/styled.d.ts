import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      background: string;
      backgroundLight: string;
      onBackground: string;
      title: string;
      subTitle: string;
      textContrast: string;
      textTheme: string;
      border: string;
      card: string;
      error: string;
    };
    sizes: {
      title: number;
      subTitle: number;
      text: number;
      smallText: number;
    };
  }
}
