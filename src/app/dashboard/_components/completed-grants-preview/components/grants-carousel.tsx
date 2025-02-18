import React from "react";
import { Clock } from "lucide-react";

export default function GrantsCarousel({ cards }: { cards: { amount: number; dueIn: number; foundation: string; organization: string; }[] }) {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-r from-transparent to-gray-50 z-10" />

      <div className="space-x-4 h-full overflow-x-hidden   hidden md:flex">
        {cards.map((_, index) => (
          <div
            key={index}
            className={"flex-shrink-0 transition-opacity duration-300 bg-gradient-to-r to-orange-400 from-orange-300 p-6 text-white rounded-xl"}
          >
            <div className="space-y-4 flex flex-col items-center">
              <div className="bg-white/70 text-gray-800 px-3 py-1 rounded-full text-sm w-fit flex flex-row items-center justify-between ">
                <Clock className="w-4 h-4 mr-2 text-gray-800" />
                Due in 3 days
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <p className="text-3xl font-bold">$25,000</p>
                <h3 className="text-xl font-semibold mt-2">Waiki Wako Foundation Grant</h3>
                <p className="text-sm opacity-90">Looking Out Foundation</p>
              </div>

              <button className="w-1/2 bg-white text-gray-800 px-2 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
                &#127881; Submit now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
