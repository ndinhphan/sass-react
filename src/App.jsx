/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/_app.scss";
import NavBar from "./components/NavBar";

import highlightthumbnail from "./assets/image/highlight_thumbnail.png";

import sidebar_image_1 from "./assets/image/sidebar_item_1.png";
import sidebar_image_2 from "./assets/image/sidebar_item_2.png";

import nft_art_1 from "./assets/image/nft_art_1.png"
import nft_art_2 from "./assets/image/nft_art_2.png"
import nft_art_3 from "./assets/image/nft_art_3.png"
import nft_art_4 from "./assets/image/nft_art_4.png"
import ItemGallery from "./components/ItemGallery";
import CategoryGallery from "./components/CategoryGallery";
import Footer from "./components/Footer";

const items = [
  {
    title: "NFT Art Name 1",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_1,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 2",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_2,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 3",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_3,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 4",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_4,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },{
    title: "NFT Art Name 1",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_1,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 2",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_2,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 3",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_3,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  },
  {
    title: "NFT Art Name 4",
    currentEdition: 20,
    finalEdition: 30,
    thumbnail: nft_art_4,
    status: "available",
    price: 25000,
    currency: "USD",
    difference: 8833.42,
  }
];



function App() {
  const newArrivalGallery = <ItemGallery items={items}/>
  const comingSoonItems = items.map((item)=>({...item, status:"soon"}));
  const comingSoonGallery = <ItemGallery items={comingSoonItems}/>;
  const categoryGallery = <CategoryGallery />
  return (
    <div className="container">
      <NavBar />

      <div className="container__splash">
        <div className="container container__splash__text">
          <h1>Let's Write Something About Your Store! </h1>
          <p>
            Use overlay text to give your customers insight into your brand.
            Select imagery and text that relates to your style and story.
          </p>
          <a href="#" className="button splash__button">
            Explore Now
          </a>
        </div>
      </div>

      <section className="highlight__section">
        <div className="highlight__title">
          <h2>Highlight</h2>
        </div>
        <div className="highlight">
          <img
            className="highlight__thumbnail"
            src={highlightthumbnail}
            alt=""
          />
          <div className="highlight__details">
            <h1>the first customers</h1>
            <ul className="highlight__details__tags">
              <li className="button highlight__details__tags__tag">Art</li>
              <li className="button highlight__details__tags__tag">
                Photography
              </li>
              <li className="button highlight__details__tags__tag">2D</li>
            </ul>
            <div className="highlight__info">
              <h3>Edition 20 of 30</h3>
              <h1>2,000 N1</h1>
              <h2>~ $500.42</h2>
            </div>
            <p className="highlight__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris
            </p>
            <a href="#" className="highlight__readmore">
              Read more
            </a>
            <div className="highlight__options">
              <button className="button button--purple highlight__options__buy">
                Buy Now
              </button>
              <button className="button button--white highlight__options__offer">
                Make Offer
              </button>
            </div>
          </div>
          <div className="highlight__sidebar">
            <div className="highlight__sidebar__item">
              <img
                className="highlight__sidebar__item__thumbnail"
                src={sidebar_image_1}
                alt=""
              />
              <div className="highlight__sidebar__item__description">
                <h3>NFT Art Name 1</h3>
                <p>Edition 20 of 30</p>
              </div>
            </div>
            <div className="highlight__sidebar__item__item">
              <img
                className="highlight__sidebar__item__thumbnail"
                src={sidebar_image_2}
                alt=""
              />
              <div className="highlight__sidebar__item__description">
                <h3>NFT Art Name 2</h3>
                <p>Edition of 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new_arrivals__section">
        <h1>New Arrivals</h1>
        {newArrivalGallery}
      </section>
      <section className="coming_soon__section">
        <h1>Coming Soon</h1>
        {comingSoonGallery}
      </section>

      <section className="shop_category__section">
        <h1>Shop By Category</h1>
        {categoryGallery}
      </section>
      <Footer />
    </div>
  );
}

export default App;
