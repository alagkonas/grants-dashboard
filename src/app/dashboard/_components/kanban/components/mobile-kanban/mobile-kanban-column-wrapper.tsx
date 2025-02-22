"use client";

import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { SquareChevronUp } from "lucide-react";
import ColumnHeader from "@/app/dashboard/_components/kanban/components/column-header";

type MobileKanbanColumnWrapperProps = PropsWithChildren<{
  columnInfo: string;
  columnTotal: number;
  noData: boolean;
  noDataInfo: string
}>

export const MobileKanbanColumnWrapper = ({
  children,
  columnInfo,
  noDataInfo,
  noData,
  columnTotal
}: MobileKanbanColumnWrapperProps) => {
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
    <div ref={scrollContainerRef} className="flex-1 max-h-[calc(100vh-400px)] overflow-y-auto no-scrollbar  px-4">
      <ColumnHeader columnInfo={columnInfo} columnTotal={columnTotal} />
      <div className="overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {!noData ? (
            <div className="overflow-y-auto no-scrollbar max-h-full">
              {children}
              {isScrollable && (
                <div className="flex h-10 justify-end w-full">
                  <button onClick={scrollToTop}>
                    <SquareChevronUp className="w-7 h-7 text-gray-500 rounded-lg" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center pt-2">
              <span className="text-gray-800 font-semibold">{noDataInfo}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
