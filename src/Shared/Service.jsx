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

export default {
  FormatResult
};
