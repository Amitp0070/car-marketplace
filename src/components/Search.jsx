import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";

function Search() {
  return (
    <div
      className="md:flex flex-col md:flex-row p-2 md:p-3 bg-white
     rounded-md md:rounded-full gap-10 px-5 items-center w-[60%]"
    >
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((car, index) => (
            <SelectItem value={car.name}>
              {car.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) =>(
            <SelectItem value={price.price}>{price.price}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <CiSearch
          className="text-[50px] p-3 bg-primary 
        rounded-full text-white hover:scale-105 transition-all cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Search;
