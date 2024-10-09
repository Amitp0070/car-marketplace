import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_KEY;
const FormatResult = (resp) => {
  let result = []; // Change from array to object
  let finalResult = [];

  resp.forEach((item) => {
    const listingId = item.carListings?.id;
    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListings,
        images: [],
      };
    }

    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  // Convert the result object to an array for the final output
  result.forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalResult;
};

const CreateSendBirdUser = (userId, nickName, profileUrl) => {
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/users",
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};

export default {
  FormatResult,
  CreateSendBirdUser,
};
