

import { useDiary } from "../context/DiaryContext";

export function useDiaryEntries() {
  const { entries, addEntry } = useDiary();
  return { entries, addEntry };
}
