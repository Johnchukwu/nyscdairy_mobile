

import * as Notifications from "expo-notifications";
import { useState } from "react";

export function useReminderSettings() {
  const [time, setTime] = useState<string | null>(null);

  const schedule = async (t: string) => {
    setTime(t);

    const [hour, minute] = t.split(":").map(Number);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Camp Diary",
        body: "Write today’s memory"
      },
      trigger: {
        type: "daily",
        hour,
        minute
      } as Notifications.DailyTriggerInput
    });
  };

  return { time, schedule };
}
