import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function OwnerDetail({ carDetail }) {
  const { user } = useUser();

  const navigation = useNavigate();

  const OnMessageOwnerButtonClick = async () => {
    const userId = user?.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = carDetail?.createBy.split("@")[0];

    // Create Current User Id
    try {
      await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // Owner user Id
    try {
      await Service.CreateSendBirdUser(
        ownerUserId,
        carDetail?.userName,
        carDetail?.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // Create Channel
    try {
      await Service.CreateSendBirdChannel(
        [userId, ownerUserId],
        carDetail?.listingTitle
      ).then((resp) => {
        console.log(resp);
        console.log("channel created");
        navigation("/profile");
      });
    } catch (e) {}
  };
  return (
    <div className="p-10 border shadow-md rounded-xl mt-6 ">
      <h2 className="font-medium text-2xl mb-3">Owner Details</h2>
      <img
        src={carDetail?.userImageUrl}
        className="w-[80px] h-[80px] rounded-full"
      />
      <h2 className="mt-2 text-xl font-bold">{carDetail?.userName}</h2>
      <h2 className="text-gray-500">{carDetail?.createBy}</h2>
      <Button className="w-full mt-6" onClick={OnMessageOwnerButtonClick}>
        Message Owner
      </Button>
    </div>
  );
}

export default OwnerDetail;
