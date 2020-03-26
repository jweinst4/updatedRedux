export const parseResults = results => {
  let returnedPrice = results[0];
  let props = results[1];

  if (props.shirtType === "lightShirt" || props.shirtType === "darkShirt") {
    let priceToAdd = 0;

    if (props.clothingType === "Tee") {
      priceToAdd = 0;
    } else if (
      props.clothingType === "Jersey" ||
      props.clothingType === "Polo" ||
      props.clothingType === "Sweatshirt"
    ) {
      priceToAdd =
        0.25 * parseInt(props.printSideOneQuantity) +
        0.25 * parseInt(props.printSideTwoQuantity);
    } else if (props.clothingType === "Hooded Sweatshirt") {
      priceToAdd =
        0.5 * parseInt(props.printSideOneQuantity) +
        0.5 * parseInt(props.printSideTwoQuantity);
    }

    let netCostHere =
      parseFloat(props.shirtCost) +
      returnedPrice[0] +
      returnedPrice[1] +
      priceToAdd;
    let profitHere = netCostHere * parseFloat(props.markUp / 100);
    let totalCostHere = netCostHere + profitHere;
    let totalProfitHere = profitHere * parseInt(props.shirtQuantity);

    let parsedResult = [
      netCostHere,
      profitHere,
      totalCostHere,
      totalProfitHere
    ];

    return parsedResult;
  } else if (props.shirtType === "embroidery") {
    let netCostHere =
      parseFloat(props.shirtCost) +
      returnedPrice[0] +
      returnedPrice[1] +
      returnedPrice[2] +
      returnedPrice[3] +
      returnedPrice[4] +
      returnedPrice[5];
    let profitHere = netCostHere * parseFloat(props.markUp / 100);
    let totalCostHere = netCostHere + profitHere;
    let totalProfitHere = profitHere * parseInt(props.shirtQuantity);

    let parsedResult = [
      netCostHere,
      profitHere,
      totalCostHere,
      totalProfitHere
    ];

    return parsedResult;
  } else {
  }
};
