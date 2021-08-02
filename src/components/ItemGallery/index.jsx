import React from "react";
import ItemCard from "../ItemCard/index";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";
import { itemGetNew, itemGetComingSoon } from "../../action/itemActions";
const ItemGallery = ({ type }) => {
  const { items } = useSelector((state) => state.itemReducer);
  const renderItems = items[type];
  const dispatch = useDispatch();

  const itemNewParam = {
    limit: "8",
    sortField: "sellorder.createdAt",
    sortType: "-1",
    status: "2,4",
  };
  const itemComingSoonParam = {
    limit: "8",
    sortField: "name",
    sortType: "1",
    status: "1",
  };
  useEffect(() => {
    if (type === "new") dispatch(itemGetNew(itemNewParam));
    else dispatch(itemGetComingSoon(itemComingSoonParam));
  }, []);

  // console.log("items in item gallery:", items);
  const ItemCards = useMemo(() => {
    return renderItems.map((item) => <ItemCard key={item._id} item={item} />);
  }, [renderItems]);
  return <div className="item_gallery">{ItemCards}</div>;
};
export default ItemGallery;
