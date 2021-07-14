import React from "react";

import artwork_category_thumbnail from "../assets/image/category_artwork.png";
import cards_category_thumbnail from "../assets/image/category_cards.png";
import collectibles_category_thumbnail from "../assets/image/category_collectibles.png";
import game_category_thumbnail from "../assets/image/category_game.png";
import memes_category_thumbnail from "../assets/image/category_memes.png";
import music_category_thumbnail from "../assets/image/category_music.png";
import photography_category_thumbnail from "../assets/image/category_photography.png";
import sports_category_thumbnail from "../assets/image/category_sports.png";

import { ReactComponent as artwork_category_icon } from "../assets/svg/artwork.svg";
import { ReactComponent as cards_category_icon } from "../assets/svg/cards.svg";
import { ReactComponent as collectibles_category_icon } from "../assets/svg/collectibles.svg";
import { ReactComponent as game_category_icon } from "../assets/svg/game.svg";
import { ReactComponent as memes_category_icon } from "../assets/svg/memes.svg";
import { ReactComponent as music_category_icon } from "../assets/svg/music.svg";
import { ReactComponent as photography_category_icon } from "../assets/svg/photography.svg";
import { ReactComponent as sports_category_icon } from "../assets/svg/sports.svg";

const CategoryCard = ({ category }) => {
  const { name, thumbnail, icon } = category;
  return (
    <div className="category_card">
      <img
        className="category_card__thumbnail"
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      <button className="category_card__button">{name}</button>
    </div>
  );
};

const CategoryGallery = () => {
  const categories = [
    {
      name: "artwork",
      thumbnail: artwork_category_thumbnail,
      icon: artwork_category_icon,
    },
    {
      name: "cards",
      thumbnail: cards_category_thumbnail,
      icon: cards_category_icon,
    },
    {
      name: "collectibles",
      thumbnail: collectibles_category_thumbnail,
      icon: collectibles_category_icon,
    },
    {
      name: "game",
      thumbnail: game_category_thumbnail,
      icon: game_category_icon,
    },
    {
      name: "memes",
      thumbnail: memes_category_thumbnail,
      icon: memes_category_icon,
    },
    {
      name: "music",
      thumbnail: music_category_thumbnail,
      icon: music_category_icon,
    },
    {
      name: "photography",
      thumbnail: photography_category_thumbnail,
      icon: photography_category_icon,
    },
    {
      name: "sports",
      thumbnail: sports_category_thumbnail,
      icon: sports_category_icon,
    },
  ];
  const categoryCards = categories.map((category) => (
    <CategoryCard category={category} />
  ));
  return (
    <section className="category_gallery">
      <div className="category_gallery__container">{categoryCards}</div>
      <div className="category_gallery__button__container">
        <button className="category_gallery__button--more">Load more</button>
      </div>
    </section>
  );
};

export default CategoryGallery;
