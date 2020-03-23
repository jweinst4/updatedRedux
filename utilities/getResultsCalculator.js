import {
  lightShirtArray,
  darkShirtArray,
  embroideryArray
} from "../constants/prices";

export const calculatedPrice = item => {
  price = pricingRouter(item);

  return price;
};

pricingRouter = item => {
  if (item.type === "lightShirt" || item.type === "darkShirt") {
    price = calculateNormalShirt(item);
  } else if (item.type === "embroidery") {
    price = calculateEmbroideredShirt(item);
  } else {
  }
  return price;
};

calculateEmbroideredShirt = item => {
  console.log("embroidery below");
  let price1 = 0;
  let price2 = 0;
  let price3 = 0;
  let price4 = 0;
  let price5 = 0;
  let price6 = 0;

  const embroideredPriceArrayLocation1 = embroideryArray.filter(function(i) {
    return i.max >= item.location1Stitches && i.min <= item.location1Stitches;
  });

  const embroideredPriceArrayLocation2 = embroideryArray.filter(function(i) {
    return i.max >= item.location2Stitches && i.min <= item.location2Stitches;
  });

  const embroideredPriceArrayLocation3 = embroideryArray.filter(function(i) {
    return i.max >= item.location3Stitches && i.min <= item.location3Stitches;
  });

  const embroideredPriceArrayLocation4 = embroideryArray.filter(function(i) {
    return i.max >= item.location4Stitches && i.min <= item.location4Stitches;
  });

  const embroideredPriceArrayLocation5 = embroideryArray.filter(function(i) {
    return i.max >= item.location5Stitches && i.min <= item.location5Stitches;
  });

  const embroideredPriceArrayLocation6 = embroideryArray.filter(function(i) {
    return i.max >= item.location6Stitches && i.min <= item.location6Stitches;
  });

  console.log(embroideredPriceArrayLocation1);

  if (item.shirtQuantity >= 1 && item.shirtQuantity <= 5) {
    price1 = embroideredPriceArrayLocation1[0].prices[0];
    price2 = embroideredPriceArrayLocation2[0].prices[0];
    price3 = embroideredPriceArrayLocation3[0].prices[0];
    price4 = embroideredPriceArrayLocation4[0].prices[0];
    price5 = embroideredPriceArrayLocation5[0].prices[0];
    price6 = embroideredPriceArrayLocation6[0].prices[0];
  } else if (item.shirtQuantity >= 6 && item.shirtQuantity <= 11) {
    price1 = embroideredPriceArrayLocation1[0].prices[1];
    price2 = embroideredPriceArrayLocation2[0].prices[1];
    price3 = embroideredPriceArrayLocation3[0].prices[1];
    price4 = embroideredPriceArrayLocation4[0].prices[1];
    price5 = embroideredPriceArrayLocation5[0].prices[1];
    price6 = embroideredPriceArrayLocation6[0].prices[1];
  } else if (item.shirtQuantity >= 12 && item.shirtQuantity <= 23) {
    price1 = embroideredPriceArrayLocation1[0].prices[2];
    price2 = embroideredPriceArrayLocation2[0].prices[2];
    price3 = embroideredPriceArrayLocation3[0].prices[2];
    price4 = embroideredPriceArrayLocation4[0].prices[2];
    price5 = embroideredPriceArrayLocation5[0].prices[2];
    price6 = embroideredPriceArrayLocation6[0].prices[2];
  } else if (item.shirtQuantity >= 24 && item.shirtQuantity <= 47) {
    price1 = embroideredPriceArrayLocation1[0].prices[3];
    price2 = embroideredPriceArrayLocation2[0].prices[3];
    price3 = embroideredPriceArrayLocation3[0].prices[3];
    price4 = embroideredPriceArrayLocation4[0].prices[3];
    price5 = embroideredPriceArrayLocation5[0].prices[3];
    price6 = embroideredPriceArrayLocation6[0].prices[3];
  } else if (item.shirtQuantity >= 48 && item.shirtQuantity <= 99) {
    price1 = embroideredPriceArrayLocation1[0].prices[4];
    price2 = embroideredPriceArrayLocation2[0].prices[4];
    price3 = embroideredPriceArrayLocation3[0].prices[4];
    price4 = embroideredPriceArrayLocation4[0].prices[4];
    price5 = embroideredPriceArrayLocation5[0].prices[4];
    price6 = embroideredPriceArrayLocation6[0].prices[4];
  } else if (item.shirtQuantity >= 100 && item.shirtQuantity <= 199) {
    price1 = embroideredPriceArrayLocation1[0].prices[5];
    price2 = embroideredPriceArrayLocation2[0].prices[5];
    price3 = embroideredPriceArrayLocation3[0].prices[5];
    price4 = embroideredPriceArrayLocation4[0].prices[5];
    price5 = embroideredPriceArrayLocation5[0].prices[5];
    price6 = embroideredPriceArrayLocation6[0].prices[5];
  } else if (item.shirtQuantity >= 200 && item.shirtQuantity <= 399) {
    price1 = embroideredPriceArrayLocation1[0].prices[6];
    price2 = embroideredPriceArrayLocation2[0].prices[6];
    price3 = embroideredPriceArrayLocation3[0].prices[6];
    price4 = embroideredPriceArrayLocation4[0].prices[6];
    price5 = embroideredPriceArrayLocation5[0].prices[6];
    price6 = embroideredPriceArrayLocation6[0].prices[6];
  } else if (item.shirtQuantity >= 400 && item.shirtQuantity <= 799) {
    price1 = embroideredPriceArrayLocation1[0].prices[7];
    price2 = embroideredPriceArrayLocation2[0].prices[7];
    price3 = embroideredPriceArrayLocation3[0].prices[7];
    price4 = embroideredPriceArrayLocation4[0].prices[7];
    price5 = embroideredPriceArrayLocation5[0].prices[7];
    price6 = embroideredPriceArrayLocation6[0].prices[7];
  } else if (item.shirtQuantity >= 800 && item.shirtQuantity <= 1599) {
    price1 = embroideredPriceArrayLocation1[0].prices[8];
    price2 = embroideredPriceArrayLocation2[0].prices[8];
    price3 = embroideredPriceArrayLocation3[0].prices[8];
    price4 = embroideredPriceArrayLocation4[0].prices[8];
    price5 = embroideredPriceArrayLocation5[0].prices[8];
    price6 = embroideredPriceArrayLocation6[0].prices[8];
  } else if (item.shirtQuantity >= 1600 && item.shirtQuantity <= 3199) {
    price1 = embroideredPriceArrayLocation1[0].prices[9];
    price2 = embroideredPriceArrayLocation2[0].prices[9];
    price3 = embroideredPriceArrayLocation3[0].prices[9];
    price4 = embroideredPriceArrayLocation4[0].prices[9];
    price5 = embroideredPriceArrayLocation5[0].prices[9];
    price6 = embroideredPriceArrayLocation6[0].prices[9];
  } else if (item.shirtQuantity >= 3200 && item.shirtQuantity <= 5000) {
    price1 = embroideredPriceArrayLocation1[0].prices[10];
    price2 = embroideredPriceArrayLocation2[0].prices[10];
    price3 = embroideredPriceArrayLocation3[0].prices[10];
    price4 = embroideredPriceArrayLocation4[0].prices[10];
    price5 = embroideredPriceArrayLocation5[0].prices[10];
    price6 = embroideredPriceArrayLocation6[0].prices[10];
  } else {
  }

  if (item.location1Stitches === 0) price1 = 0;
  if (item.location2Stitches === 0) price2 = 0;
  if (item.location3Stitches === 0) price3 = 0;
  if (item.location4Stitches === 0) price4 = 0;
  if (item.location5Stitches === 0) price5 = 0;
  if (item.location6Stitches === 0) price6 = 0;

  price = [price1, price2, price3, price4, price5, price6];

  return price;
};

calculateNormalShirt = item => {
  if (item.type === "lightShirt") {
    shirtArray = lightShirtArray;
  } else {
    shirtArray = darkShirtArray;
  }

  const priceArray = shirtArray.filter(function(i) {
    return i.max >= item.shirtQuantity && i.min <= item.shirtQuantity;
  });

  const printSideOneQuantity = item.printSideOneQuantity;
  const printSideTwoQuantity = item.printSideTwoQuantity;
  const justThePrices = priceArray[0];
  const price = calculateNumberOfColors(
    printSideOneQuantity,
    printSideTwoQuantity,
    justThePrices
  );
  return price;
};

calculateNumberOfColors = (
  printSideOneQuantity,
  printSideTwoQuantity,
  justThePrices
) => {
  let price1 = 0;
  let price2 = 0;
  switch (printSideOneQuantity) {
    case 0:
      price1 = 0;
      break;
    case 1:
      price1 = justThePrices.prices[0];
      break;
    case 2:
      price1 = justThePrices.prices[1];
      break;
    case 3:
      price1 = justThePrices.prices[2];
      break;
    case 4:
      price1 = justThePrices.prices[3];
      break;
    case 5:
      price1 = justThePrices.prices[4];
      break;
    default:
      break;
  }

  switch (printSideTwoQuantity) {
    case 0:
      price2 = 0;
      break;
    case 1:
      price2 = justThePrices.prices[0];
      break;
    case 2:
      price2 = justThePrices.prices[1];
      break;
    case 3:
      price2 = justThePrices.prices[2];
      break;
    case 4:
      price2 = justThePrices.prices[3];
      break;
    case 5:
      price2 = justThePrices.prices[4];
      break;
    default:
      break;
  }

  price = [price1, price2];

  return price;
};
