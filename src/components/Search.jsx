import React, { useState } from "react";
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
import { Link } from "react-router-dom";

function Search() {

  const [cars, setCars]=useState();
  const [make, setMake]=useState();
  const [price, setPrice]=useState();

  return (
    <div
      className="md:flex flex-col md:flex-row p-2 md:p-3 bg-white
     rounded-md md:rounded-full gap-10 px-5 items-center w-[60%]"
    >
      <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Uesd</SelectItem>
          <SelectItem value="Certified Pre-Owend">Certified Pre-Owend</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />
      
      <Select onValueChange={(value)=>setMake(value)}>
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
      <Select onValueChange={(value)=>setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) =>(
            <SelectItem value={price.price}>{price.price}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>
        <CiSearch
          className="text-[50px] p-3 bg-primary 
        rounded-full text-white hover:scale-105 transition-all cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default Search;
