import ItemGallery from "../../components/ItemGallery/index";
import CategoryGallery from "../../components/CategoryGallery/index";
import Highlight from "../../components/Highlight/index";

const Homepage = () => {
  return (
    <div>
      <div className="container container__splash">
        <div className="container container__splash__text">
          <h1>Let's Write Something About Your Store! </h1>
          <p>
            Use overlay text to give your customers insight into your brand.
            Select imagery and text that relates to your style and story.
          </p>
          <a href="/#" className="button splash__button">
            Explore Now
          </a>
        </div>
      </div>

      <div className="container">
        <Highlight />

        <section className="new_arrivals__section">
          <div className="container__section__title">
            <h1>New Arrivals</h1>
            <a href="##">Browse All</a>
          </div>
          {/* type="new" bad */}
          <ItemGallery type="new" />
        </section>

        <section className="coming_soon__section">
          <div className="container__section__title">
            <h1>Coming Soon</h1>
            <a href="##">Browse All</a>
          </div>
          <ItemGallery type="comingsoon" />
        </section>

        <CategoryGallery />
      </div>
    </div>
  );
};

export default Homepage;
