
import * as SecureStore from "expo-secure-store";

const KEY = "reminder_time";

export async function saveReminderTime(t: string) {
  await SecureStore.setItemAsync(KEY, t);
}

export async function getReminderTime() {
  return SecureStore.getItemAsync(KEY);
}
