import React from "react";
import ItemCard from "../ItemCard/index";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const ItemGallery = ({ type }) => {
  const { items } = useSelector((state) => state.itemReducer);

  console.log("items in item gallery:", items);
  const renderItems = items[type];

  const ItemCards = useMemo(() => {
    return renderItems.map((item) => <ItemCard item={item} />);
  }, [renderItems]);
  return <div className="item_gallery">{ItemCards}</div>;
};
export default ItemGallery;
