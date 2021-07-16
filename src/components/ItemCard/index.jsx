import React from "react";

const ItemCard = ({ item, type }) => {
  const {
    name,
    imageUrl,
    numberOfCopies,
    availableOfCopies,
    status,
    sellOrder,
  } = item;
  let itemprice;
  let itemCardContent;
  //available
  if (type !== "customtype...") {
    if (status === 2)
      itemprice = (
        <h4 className="itemcard__price">{`${sellOrder.price} ${
          sellOrder.currencyName
        } ~ ${Math.round(sellOrder.usdPrices * 100) / 100}$`}</h4>
      );
    else {
      itemprice = (
        <div className="item_card__price__status--soon">Coming soon</div>
      );
    }
    itemCardContent = (
      <div className="item_card">
        <div className="item_card__thumbnail">
          <img src={imageUrl} alt={name} />
        </div>
        <h3 title={name} className="item_card__title">
          {name}
        </h3>
        <h4 className="item_card__edition">{`Edition ${availableOfCopies} of ${numberOfCopies}`}</h4>
        {itemprice}
      </div>
    );
  }

  return <div>{itemCardContent}</div>;
};

export default ItemCard;
