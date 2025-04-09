import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarStyle } from "expo-status-bar";
import { createContext, FC, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

enum ThemeOptions {
  light = "light",
  dark = "dark",
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext({
  theme: ThemeOptions.light,
  toggleTheme: () => {},
});

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ThemeOptions.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const loadTheme = async () => {
      const storageTheme = await AsyncStorage.getItem("@theme");
      setTheme((storageTheme as ThemeOptions) || ThemeOptions.light);
    };
    loadTheme();
  }, []);

  useEffect(() => {
    setTheme((colorScheme as ThemeOptions) || ThemeOptions.light);
  }, [colorScheme]);

  useEffect(() => {
    let selectedTheme =
      theme === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;
    setStatusBarStyle(selectedTheme);
    AsyncStorage.setItem("@theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    let selectedTheme =
      theme === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
