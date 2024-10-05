import React from "react";
import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  console.log(features);
  return (
    <div className="mt-6 ">
      <div className="p-10 bg-white rounded-xl border shadow-md ">
        <h2 className="font-medium text-2xl">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-5">
          {features? features &&
            Object.entries(features).map(([feature, value]) => (
              <div className="flex items-center gap-2">
                <FaCheck className="text-md rounded-full bg-blue-100 text-primary" />
                <h2 key={feature}>{feature}</h2>
              </div>
            )):
            <div className="w-[650px] h-[200px] rounded-xl bg-slate-200 animate-pulse">
            </div>
            }
        </div>
      </div>
    </div>
  );
}

export default Features;
