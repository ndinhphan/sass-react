import { useSelector } from "react-redux";

import ItemCard from "../ItemCard";

const HighlightItemCard = ({ item }) => {
  const {
    name,
    imageUrl,
    numberOfCopies,
    availableOfCopies,
    sellOrder,
    description,
  } = item;
  console.log("main highlight item card: ", item);

  return (
    <>
      <div className="highlight__thumbnail">
        <img className="highlight__thumbnail__image" src={imageUrl} alt="" />
      </div>
      <div className="highlight__details">
        <h1>{name}</h1>
        <ul className="highlight__details__tags">
          <li className="button highlight__details__tags__tag">Art</li>
          <li className="button highlight__details__tags__tag">Photography</li>
          <li className="button highlight__details__tags__tag">2D</li>
        </ul>
        <div className="highlight__info">
          <h3>{`Edition ${availableOfCopies} of ${numberOfCopies}`}</h3>
          <h1>{`${sellOrder.price} ${sellOrder.currencyName}`}</h1>
          <h2>~ {`${Math.round(sellOrder.usdPrices * 100) / 100}$`}</h2>
        </div>
        <div
          className="highlight__description"
          dangerouslySetInnerHTML={{ __html: description.substring(0, 600) }}
        ></div>
        <a href="/#" className="highlight__readmore">
          Read more
        </a>
        <div className="highlight__options">
          <button className="button highlight__options__button__buy">
            Buy Now
          </button>
          <button className="button highlight__options__button__offer">
            Make Offer
          </button>
        </div>
      </div>
    </>
  );
};

const Highlight = () => {
  const { items } = useSelector((state) => state.itemReducer);
  const { highlight } = items;
  console.log("highlight items in highlight", highlight);
  let highlightMain = "";
  if (highlight[0] !== undefined) {
    highlightMain = <HighlightItemCard item={highlight[0]} />;
  }
  const renderHighlightSidebar = highlight
    .slice(1)
    .map((item) => <ItemCard item={item} />);
  return (
    <section className="highlight__section">
      <div className="highlight__title">
        <h2>Highlight</h2>
      </div>
      <div className="highlight">
        {highlightMain}
        <div className="highlight__sidebar">{renderHighlightSidebar}</div>
      </div>
    </section>
  );
};

// const Highlight = () => {
//   return (
//     <section className="highlight__section">
//       <div className="highlight__title">
//         <h2>Highlight</h2>
//       </div>
//       <div className="highlight">
//         <div className="highlight__thumbnail">
//           <img
//             className="highlight__thumbnail__image"
//             src={highlightthumbnail}
//             alt=""
//           />
//         </div>
//         <div className="highlight__details">
//           <h1>the first customers</h1>
//           <ul className="highlight__details__tags">
//             <li className="button highlight__details__tags__tag">Art</li>
//             <li className="button highlight__details__tags__tag">
//               Photography
//             </li>
//             <li className="button highlight__details__tags__tag">2D</li>
//           </ul>
//           <div className="highlight__info">
//             <h3>Edition 20 of 30</h3>
//             <h1>2,000 N1</h1>
//             <h2>~ $500.42</h2>
//           </div>
//           <p className="highlight__description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
//             velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
//             commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
//             sed eleifend tristique, tortor mauris
//           </p>
//           <a href="/#" className="highlight__readmore">
//             Read more
//           </a>
//           <div className="highlight__options">
//             <button className="button highlight__options__button__buy">
//               Buy Now
//             </button>
//             <button className="button highlight__options__button__offer">
//               Make Offer
//             </button>
//           </div>
//         </div>
//         <div className="highlight__sidebar">
//           <div className="highlight__sidebar__item">
//             <img
//               className="highlight__sidebar__item__thumbnail"
//               src={sidebar_image_1}
//               alt=""
//             />
//             <div className="highlight__sidebar__item__description">
//               <h3>NFT Art Name 1</h3>
//               <p>Edition 20 of 30</p>
//             </div>
//           </div>
//           <div className="highlight__sidebar__item">
//             <img
//               className="highlight__sidebar__item__thumbnail"
//               src={sidebar_image_2}
//               alt=""
//             />
//             <div className="highlight__sidebar__item__description">
//               <h3>NFT Art Name 2</h3>
//               <p>Edition of 30</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Highlight;
