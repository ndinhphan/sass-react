import React from "react";
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoryGet } from "../../action/categoryActions";
const CategoryCard = ({ category }) => {
  const { name, imageUrl, iconUrl } = category;
  let finalImageUrl = imageUrl;
  let finalIconUrl = iconUrl;
  if (!imageUrl.includes("https"))
    finalImageUrl = `https://nftify.ekoiosblock.com/${imageUrl}`;
  if (!iconUrl.includes("https"))
    finalIconUrl = `https://nftify.ekoiosblock.com/${iconUrl}`;
  return (
    <div className="category_card">
      <div className="category_card__thumbnail">
        <img src={finalImageUrl} alt={`${name} thumbnail`} />
      </div>
      <button className="category_card__button">
        <img
          src={finalIconUrl}
          alt="category_card__button__icon"
          className="category_card__button__icon"
        />
        {name}
      </button>
    </div>
  );
};

const CategoryGallery = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { categoryParam } = useState({
    limit: "8",
    offset: "0",
    objectIds:
      "60d29be5f7a197108f06f128, 60d29be5f7a197108f06f129, 60da7f5a00b1370fbe8e977a, 60d29be5f7a197108f06f12e, 60d29be5f7a197108f06f12f",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryGet(categoryParam));
  }, [categoryParam]);

  // console.log("category in component", categories);

  const categoryCards = useMemo(() => {
    return categories.map((category) => (
      <CategoryCard key={category._id} category={category} />
    ));
  }, [categories]);
  return (
    <section className="category_gallery">
      <h1>Shop by Category</h1>

      <div className="category_gallery__container">{categoryCards}</div>
      <div className="category_gallery__button__container">
        <button className="category_gallery__button--more">Load more</button>
      </div>
    </section>
  );
};

export default CategoryGallery;
