"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { SquareChevronUp } from "lucide-react";

export const MobileKanbanCardWrapper = ({ children }: React.PropsWithChildren) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkIfScrollable = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setIsScrollable(container.scrollHeight > container.clientHeight);
      }
    };

    checkIfScrollable();

    const resizeObserver = new ResizeObserver(checkIfScrollable);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToTop = useCallback(() => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div ref={scrollContainerRef} className="overflow-y-auto no-scrollbar max-h-[calc(100vh-220px)]">
      {children}
      {isScrollable && (
        <div className="flex h-10 justify-end w-full">
          <button onClick={scrollToTop}>
            <SquareChevronUp className="w-7 h-7 text-gray-500 rounded-lg" />
          </button>
        </div>
      )}
    </div>
  );
};
