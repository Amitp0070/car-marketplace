import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { db } from "./../../../../configs";
import { CarImages, CarListing } from "./../../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import CarItem from "@/components/CarItem";
import Service from "@/Shared/Service";
import { FaTrashAlt } from "react-icons/fa";

function MyListing() {
  const { user } = useUser();
  const [carList, setCarListing] = useState([]);

  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);
  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    // Usage
    const resp = Service.FormatResult(result); // Assuming 'result' is the response you want to format
    // console.log("Formatted Response:", resp);
    setCarListing(resp);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-1 bg-gray-50 rounded-xl flex justify-between gap-2">
              <Link
                to={"/add-listing?mode=edit&id=" + item?.id}
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Edit
                </Button>
              </Link>
              <Button variant="destructive">
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListing;
