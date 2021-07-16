import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const CategoryCard = ({ category }) => {
  const { name, imageUrl, iconUrl } = category;
  return (
    <div className="category_card">
      <div className="category_card__thumbnail">
        <img src={imageUrl} alt={`${name} thumbnail`} />
      </div>

      <button className="category_card__button">
        <img
          src={iconUrl}
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
  console.log("category in component", categories);

  const categoryCards = useMemo(() => {
    return categories.map((category) => <CategoryCard category={category} />);
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
