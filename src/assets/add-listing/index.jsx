import Header from "@/components/Header";
import React, { useState } from "react";
import carDetails from "@/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import { Separator } from "@/components/ui/separator";
import features from "@/Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "./../../../configs";
import { CarListing } from "./../../../configs/schema";
import TextAreaField from "./components/TextAreaField";
import IconsField from "./components/IconsField";
import UploadImages from "./components/UploadImages";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
function AddListing() {
  const [formData, setFormData] = useState([]);

  const [featuresData, setfeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate=useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFeatureChange = (name, value) => {
    setfeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast('Please Wait...')

    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featuresData,
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data Saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-14">
        <h2 className="font-bold text-3xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-8">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-1 mb-2 items-center">
                    <IconsField icon={item?.icon} />
                    {item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* features list */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeatureChange(item.name, value)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* Car image */}
          <UploadImages
            triggerUploadImages={triggerUploadImages}
            setLoader={(v) => {setLoader(v);navigate('/profile')}}
          />
          <div className="flex justify-end mt-10">
            <Button type="button"
            disabled={loader}
            onClick={(e) => onSubmit(e)}>
            {!loader?'Submit':<BiLoaderAlt className="animate-spin text-lg" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
