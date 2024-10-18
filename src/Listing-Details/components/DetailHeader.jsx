import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import { BsFuelPumpDieselFill } from "react-icons/bs";
function DetailHeader({ carDetail }) {
  return (
    <div>
      {carDetail?.listingTitle?<div>
        <h2 className="font-bold text-4xl">{carDetail?.listingTitle}</h2>
        <p className="text-sm mt-1">{carDetail?.tagline}</p>

        <div className="flex gap-2 mt-3 ">
          <div className="flex gap-1 bg-blue-50 rounded-full p-1 px-3  items-center">
            <FaCalendarCheck className="text-primary h-4 w-4" />
            <p className="text-sm text-primary">{carDetail?.year}</p>
          </div>
          <div className="flex gap-1 bg-blue-50 rounded-full p-1 px-3 items-center">
            <BsSpeedometer className="text-primary h-4 w-4" />
            <p className="text-sm text-primary">{carDetail?.mileage}</p>
          </div>
          <div className="flex gap-1 bg-blue-50 rounded-full p-1 px-3 items-center">
            <GiGearStick className="text-primary h-4 w-4" />
            <p className="text-sm text-primary">{carDetail?.transmission}</p>
          </div>
          <div className="flex gap-1 bg-blue-50 rounded-full p-1 px-3 items-center">
            <BsFuelPumpDieselFill className="text-primary h-4 w-4" />
            <p className="text-sm text-primary">{carDetail?.type}</p>
          </div>
        </div>
      </div>:
      <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse" >

      </div>}
    </div>
  );
}

export default DetailHeader;
