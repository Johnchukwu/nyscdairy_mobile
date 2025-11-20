

import { createContext, useContext, useState, ReactNode } from "react";

type Entry = {
  id: string;
  title: string;
  content?: string;
  date: string;
};

type Ctx = {
  entries: Entry[];
  addEntry: (e: Entry) => void;
};

const DiaryContext = createContext<Ctx | undefined>(undefined);

export function DiaryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (e: Entry) => {
    setEntries((p) => [...p, e]);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  const ctx = useContext(DiaryContext);
  if (!ctx) throw new Error("DiaryContext missing");
  return ctx;
}
