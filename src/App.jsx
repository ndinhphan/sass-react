/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/_app.scss";

import nft_art_1 from "./assets/image/nft_art_1.png";
import nft_art_2 from "./assets/image/nft_art_2.png";
import nft_art_3 from "./assets/image/nft_art_3.png";
import nft_art_4 from "./assets/image/nft_art_4.png";
import ItemGallery from "./components/ItemGallery/index";
import CategoryGallery from "./components/CategoryGallery/index";
import Footer from "./components/Footer/index";
import NavBar from "./components/NavBar/index";
import Highlight from "./components/Highlight/index";
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
  },
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
  },
];

function App() {
  const newArrivalsGallery = <ItemGallery items={items} />;
  const comingSoonItems = items.map((item) => ({ ...item, status: "soon" }));
  const comingSoonGallery = <ItemGallery items={comingSoonItems} />;
  const categoryGallery = <CategoryGallery />;
  return (
    <div>
      <div className="container">
        <NavBar />
      </div>
      <div className="container container__splash">
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

      <div className="container">
        <Highlight />
        <section className="new_arrivals__section">
          <h1>New Arrivals</h1>
          {newArrivalsGallery}
        </section>
        <section className="coming_soon__section">
          <h1>Coming Soon</h1>
          {comingSoonGallery}
        </section>
        {categoryGallery}
      </div>
      <Footer />
    </div>
  );
}

export default App;
