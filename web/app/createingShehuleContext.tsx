'use client';

import React, { createContext, useState } from 'react';

export type Task = {
  'time-start': string;
  'time-end': string;
  task: string;
};

export const shehuleContext = createContext<
  [Task | null, React.Dispatch<React.SetStateAction<Task[] | null>>] | null
>(null);

const ShehuleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shehlue, setshehlue] = useState<null | Task[]>(null);
  return (
    <shehuleContext.Provider value={[shehlue, setshehlue] as [Task | null, React.Dispatch<React.SetStateAction<Task[] | null>>]}>
      {children}
    </shehuleContext.Provider>
  );
};

export default ShehuleContextProvider;
