import { lightShirtArray, darkShirtArray } from "../constants/prices";

export const calculatedPrice = item => {
  price = pricingRouter(item);

  return price;
};

pricingRouter = item => {
  if (item.type === "lightShirt" || item.type === "darkShirt") {
    price = calculateNormalShirt(item);
  }

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
  const justThePrices = priceArray[0];
  const price = calculateNumberOfColors(printSideOneQuantity, justThePrices);
  return price;
};

calculateNumberOfColors = (printSideOneQuantity, justThePrices) => {
  let price = 0;
  switch (printSideOneQuantity) {
    case 0:
      price = 0;
      break;
    case 1:
      price = justThePrices.prices[0];
      break;
    case 2:
      price = justThePrices.prices[1];
      break;
    case 3:
      price = justThePrices.prices[2];
      break;
    case 4:
      price = justThePrices.prices[3];
      break;
    case 5:
      price = justThePrices.prices[4];
      break;
    default:
      break;
  }
  return price;
};
