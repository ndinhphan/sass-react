import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
import { ReactComponent as DiscordSvg } from "../assets/svg/Discord.svg";
import { ReactComponent as TwitterSvg } from "../assets/svg/Twitter.svg";
import { ReactComponent as MediumSvg } from "../assets/svg/Medium.svg";
import { ReactComponent as TelegramSvg } from "../assets/svg/Telegram.svg";
import { ReactComponent as InstagramSvg } from "../assets/svg/Instagram.svg";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__details">
        <div className="footer__details__info">
          <div className="footer__details__info__logo">
            <LogoSvg className="footer__details__info__logo" />
            <h2>yourlogo</h2>
          </div>
          <div className="footer__details__info__slogan">
            <h3>The New Creative Economy.</h3>
          </div>
        </div>
        <div className="footer__details__about">
          <h3 className="footer__details__about__title">ABOUT</h3>
          <a href="/#" alt="" className="footer__details__about__link">About us</a>
          <a href="/#" alt="" className="footer__details__about__link">Terms of Service</a>
          <a href="/#" alt="" className="footer__details__about__link">Privacy Policy</a>
          <a href="/#" alt="" className="footer__details__about__link">FAQs</a>
        </div>
        <div className="footer__details__contact">
        <h3 className="footer__details__contact__title">ABOUT</h3>
          <h4 className="footer__details__contact__email">support@nftify.com</h4>
          <h4 className="footer__details__contact__phone">(+84) 123 456 789</h4>
        </div>
        <div className="footer__details__socialmedia">
        <TwitterSvg className="footer__details__socialmedia__icon" />
        <MediumSvg className="footer__details__socialmedia__icon" />
        <TelegramSvg className="footer__details__socialmedia__icon" />
        <DiscordSvg className="footer__details__socialmedia__icon" />
        <InstagramSvg className="footer__details__socialmedia__icon" />

        </div>
      </div>
      <p>©Copyright [Store name]. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
