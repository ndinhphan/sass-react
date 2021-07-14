import React from "react";
const ItemCard = ({item}) => {
  const {
    title,
    currentEdition,
    finalEdition,
    thumbnail,
    status,
    price,
    currency,
    difference,
  } = item;
  let itemprice;
  if (status === 'available') itemprice = <h4 className="itemcard__price">{`${price} ${currency} ~ ${difference}`}</h4>;
  else {
    itemprice = (<div className="item_card__price__status--soon">Coming soon</div>)
  }
  return (
    <div className="item_card">
      <img className="item_card__thumbnail" src={thumbnail} alt={title} />
      <h3 className="item_card__title">{title}</h3>
      <h4 className="item_card__edition">{`Edition ${currentEdition} of ${finalEdition}`}</h4>
      {itemprice}
    </div>
  );
};

export default ItemCard;
