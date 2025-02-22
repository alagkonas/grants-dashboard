import React from "react";

export default function ColumnHeader({
  columnTotal, columnInfo
}: {
  columnInfo: string;
  columnTotal: number
}) {
  return (
    <div className="pt-4 pb-2 px-2 flex flex-col justify-center items-center w-full">
      <h2 className="font-semibold text-gray-800 text-xl">{columnInfo}</h2>
      <p className="text-gray-500 mt-1">
        <span className="text-gray-800 font-semibold text-xl">Total of </span>
        <span className="text-gray-800 font-bold text-2xl">${columnTotal}</span>
      </p>
    </div>
  );
}