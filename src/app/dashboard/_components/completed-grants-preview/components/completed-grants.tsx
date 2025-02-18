import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GrantsCarousel from "@/app/dashboard/_components/completed-grants-preview/components/grants-carousel";
import MobileCompletedGrantsCarousel from "@/app/dashboard/_components/completed-grants-preview/components/mobile-grants-carousel";

const cards = [
  {
    amount: 25000,
    dueIn: 3,
    foundation: "Waiki Wako Foundation Grant",
    organization: "Looking Out Foundation"
  },
  {
    amount: 30000,
    dueIn: 5,
    foundation: "Second Foundation Grant",
    organization: "Second Foundation"
  },
  {
    amount: 25000,
    dueIn: 3,
    foundation: "Waiki Wako Foundation Grant",
    organization: "Looking Out Foundation"
  },
  {
    amount: 30000,
    dueIn: 5,
    foundation: "Second Foundation Grant",
    organization: "Second Foundation"
  },
  {
    amount: 15000,
    dueIn: 7,
    foundation: "Third Foundation Grant",
    organization: "Third Foundation"
  }
];

export default function CompletedGrants() {
  return (
    <div className="lg:w-3/4 md:w-[95%] h-72 bg-white px-4 py-6 rounded-xl shadow-sm flex flex-row">
      <div className="hidden md:flex flex-col justify-between w-2/5">
        <div>
          <h2 className="text-2xl font-semibold">Let&#39;s get the money!</h2>
          <p className="text-gray-600">Submit the Grants we&#39;ve completed</p>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-4">
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4  text-orange-500" />
            </button>
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </button>
          </div>

          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      <GrantsCarousel cards={cards} />

      <MobileCompletedGrantsCarousel cards={cards} />

    </div>
  );
}
