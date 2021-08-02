import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { itemGetHighlight } from "../../action/itemActions";
import ItemCard from "../ItemCard";

const ItemCardDescription = ({ description }) => {
  const [readMore, setReadMore] = useState(false);
  const onClickReadMore = () => {
    setReadMore(!readMore);
  };
  const renderDescription = readMore ? (
    <>
      <div
        className="highlight__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <span
        style={{ cursor: "pointer" }}
        onClick={onClickReadMore}
        className="highlight__readmore"
      >
        Read less
      </span>
    </>
  ) : (
    <>
      <div
        className="highlight__description"
        dangerouslySetInnerHTML={{ __html: description.substring(0, 600) }}
      ></div>
      <span
        style={{ cursor: "pointer" }}
        onClick={onClickReadMore}
        className="highlight__readmore"
      >
        Read more
      </span>
    </>
  );
  return renderDescription;
};

const HighlightItemCard = ({ item }) => {
  const {
    name,
    imageUrl,
    numberOfCopies,
    availableOfCopies,
    sellOrder,
    description,
  } = item;
  // console.log("main highlight item card: ", item);

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
        <ItemCardDescription description={description} />
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
  const dispatch = useDispatch();

  const itemHighlightParam = {
    objectIds: `60e3ca3980ba6406a0841983, 60da99f200b1370fbe8e97fb, 60da967500b1370fbe8e97ef`,
  };
  useEffect(() => {
    dispatch(itemGetHighlight(itemHighlightParam));
  }, []);

  // console.log("highlight items in highlight", highlight);

  const highlightMain =
    highlight[0] !== undefined ? <HighlightItemCard item={highlight[0]} /> : "";
  const renderHighlightSidebar = highlight
    .slice(1)
    .map((item) => <ItemCard key={item._id} item={item} />);
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

export default Highlight;
