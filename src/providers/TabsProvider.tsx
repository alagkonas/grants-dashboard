"use client";

import React, { useCallback, useState } from "react";
import { Tabs } from "@/components/ui/tabs";

export default function TabsProvider({ children, ...rest }: React.PropsWithChildren<React.ComponentProps<typeof Tabs>>) {
  const [activeTab, setActiveTab] = useState<string>("new-grants");
  const handleChangeActiveTab = useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  return (
    <Tabs className="w-full flex flex-col" value={activeTab} onValueChange={handleChangeActiveTab} {...rest}>
      {children}
    </Tabs>
  );
}
