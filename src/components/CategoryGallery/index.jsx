import React from "react";

import artwork_category_thumbnail from "../../assets/image/category_artwork.png";
import cards_category_thumbnail from "../../assets/image/category_cards.png";
import collectibles_category_thumbnail from "../../assets/image/category_collectibles.png";
import game_category_thumbnail from "../../assets/image/category_game.png";
import memes_category_thumbnail from "../../assets/image/category_memes.png";
import music_category_thumbnail from "../../assets/image/category_music.png";
import photography_category_thumbnail from "../../assets/image/category_photography.png";
import sports_category_thumbnail from "../../assets/image/category_sports.png";

import { ReactComponent as artworkSvg } from "../../assets/svg/artwork.svg";
import { ReactComponent as cardsSvg } from "../../assets/svg/cards.svg";
import { ReactComponent as collectiblesSvg } from "../../assets/svg/collectibles.svg";
import { ReactComponent as gameSvg } from "../../assets/svg/game.svg";
import { ReactComponent as memesSvg } from "../../assets/svg/memes.svg";
import { ReactComponent as musicSvg } from "../../assets/svg/music.svg";
import { ReactComponent as photographySvg } from "../../assets/svg/photography.svg";
import { ReactComponent as sportsSvg } from "../../assets/svg/sports.svg";

const CategoryCard = ({ category }) => {
  const { name, thumbnail } = category;
  const { icon: IconSvg } = category;
  return (
    <div className="category_card">
      <img
        className="category_card__thumbnail"
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      <button className="category_card__button">
        <IconSvg className="category_card__button__icon" />
        {name}
      </button>
    </div>
  );
};

const CategoryGallery = () => {
  const categories = [
    {
      name: "artwork",
      thumbnail: artwork_category_thumbnail,
      icon: artworkSvg,
    },
    {
      name: "cards",
      thumbnail: cards_category_thumbnail,
      icon: cardsSvg,
    },
    {
      name: "collectibles",
      thumbnail: collectibles_category_thumbnail,
      icon: collectiblesSvg,
    },
    {
      name: "game",
      thumbnail: game_category_thumbnail,
      icon: gameSvg,
    },
    {
      name: "memes",
      thumbnail: memes_category_thumbnail,
      icon: memesSvg,
    },
    {
      name: "music",
      thumbnail: music_category_thumbnail,
      icon: musicSvg,
    },
    {
      name: "photography",
      thumbnail: photography_category_thumbnail,
      icon: photographySvg,
    },
    {
      name: "sports",
      thumbnail: sports_category_thumbnail,
      icon: sportsSvg,
    },
  ];
  const categoryCards = categories.map((category) => (
    <CategoryCard category={category} />
  ));
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
