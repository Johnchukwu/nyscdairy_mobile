import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";
const ONBOARD_KEY = "onboarding_done";

export async function saveToken(token: string) {
  return SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function getToken() {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function clearToken() {
  return SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function setOnboardingDone(value: boolean) {
  return SecureStore.setItemAsync(ONBOARD_KEY, value ? "1" : "0");
}

export async function getOnboardingDone() {
  const value = await SecureStore.getItemAsync(ONBOARD_KEY);
  return value === "1";
}
