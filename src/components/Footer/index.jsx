import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as DiscordSvg } from "../../assets/svg/Discord.svg";
import { ReactComponent as TwitterSvg } from "../../assets/svg/Twitter.svg";
import { ReactComponent as MediumSvg } from "../../assets/svg/Medium.svg";
import { ReactComponent as TelegramSvg } from "../../assets/svg/Telegram.svg";
import { ReactComponent as InstagramSvg } from "../../assets/svg/Instagram.svg";

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="div container">
        <div className="footer">
          <div className="footer__details">
            <div className="footer__details__logo">
              <div className="footer__details__logo__icon">
                <LogoSvg className="footer__details__logo__icon__svg" />
                <h2>yourlogo</h2>
              </div>
              <div className="footer__details__logo__slogan">
                <h3>The New Creative Economy.</h3>
              </div>
            </div>
            <div className="footer__details__info">
              <div className="footer__details__info__about">
                <h3 className="footer__details__info__about__title">ABOUT</h3>
                <a
                  href="/#"
                  alt=""
                  className="footer__details__info__about__link"
                >
                  About us
                </a>
                <a
                  href="/#"
                  alt=""
                  className="footer__details__info__about__link"
                >
                  Terms of Service
                </a>
                <a
                  href="/#"
                  alt=""
                  className="footer__details__info__about__link"
                >
                  Privacy Policy
                </a>
                <a
                  href="/#"
                  alt=""
                  className="footer__details__info__about__link"
                >
                  FAQs
                </a>
              </div>
              <div className="footer__details__info__contact">
                <h3 className="footer__details__info__contact__title">
                  CONTACT US
                </h3>
                <h4 className="footer__details__info__contact__email">
                  support@nftify.com
                </h4>
                <h4 className="footer__details__info__contact__phone">
                  (+84) 123 456 789
                </h4>
              </div>
            </div>

            <div className="footer__details__socialmedia">
              <h3 className="footer__details__socialmedia__title">
                SOCIAL MEDIA
              </h3>
              <div className="footer__details__socialmedia__icons">
                <TwitterSvg className="footer__details__socialmedia__icons__icon" />
                <MediumSvg className="footer__details__socialmedia__icons__icon" />
                <TelegramSvg className="footer__details__socialmedia__icons__icon" />
                <DiscordSvg className="footer__details__socialmedia__icons__icon" />
                <InstagramSvg className="footer__details__socialmedia__icons__icon" />
              </div>
            </div>
          </div>
          <p>©Copyright [Store name]. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
