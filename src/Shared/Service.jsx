import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;
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

const CreateSendBirdUser = async (userId, nickName, profileUrl) => {
  try {
    // First, check if the user already exists
    const existingUser = await axios.get(
      `https://api-${SendBirdApplicationId}.sendbird.com/v3/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Token": SendBirdApiToken,
        },
      }
    );

    // If the user exists, return the existing user or handle accordingly
    return existingUser.data;
  } catch (error) {
    // If the user does not exist, proceed with creation
    if (error.response && error.response.status === 404) {
      // User not found, create the user
      return axios.post(
        `https://api-${SendBirdApplicationId}.sendbird.com/v3/users`,
        {
          user_id: userId,
          nickname: nickName,
          profile_url: profileUrl,
          // issue_access_token: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Token": SendBirdApiToken,
          },
        }
      );
    } else {
      // For other errors, rethrow the error or handle it accordingly
      throw error;
    }
  }
};

const CreateSendBirdChannel = (users, title) => {
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/group_channels",
    {
      user_ids: users,
      name: title,
      is_distinct: true,
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
  CreateSendBirdChannel,
};
