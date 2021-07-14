import React from "react";
import ItemCard from "../ItemCard/index";
const ItemGallery = ({ items }) => {
  const ItemCards = items.map((item) => <ItemCard item={item} />);
  return (
    <div className="item_gallery">
      {ItemCards}
    </div>
  );
};

export default ItemGallery;
