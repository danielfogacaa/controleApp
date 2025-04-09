import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  console.log("name", name);
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function getRootState() {
  return navigationRef.current?.getRootState();
}
