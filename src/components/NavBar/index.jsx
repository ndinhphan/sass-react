/* eslint-disable jsx-a11y/anchor-is-valid */

import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as BinanceSvg } from "../../assets/svg/binance-coin-bnb-logo 1.svg";

// const SearchBar =() =>{

// }

const NavBar = () => {
  return (
    <div className="container container__nav">
      <nav className="navbar__left">
        <div className="navbar__left__logo">
          <LogoSvg className="navbar__left__logo__svg" />
          <h2>yourlogo</h2>
        </div>
        <ul className="navbar__left__navlinks">
          <li className="navbar__left__navlinks__item">
            <a href="#">Home</a>
          </li>
          <li className="navbar__left__navlinks__item">
            <a href="#">Discover</a>
          </li>
          <li className="navbar__left__navlinks__item">
            <a href="#">History</a>
          </li>
        </ul>
      </nav>
      <div className="navbar__right">
        <button
          className="button navbar__right__button navbar__right__button--connect"
          href="#"
        >
          Connect Wallet
        </button>
        <button
          className="button navbar__right__button navbar__right__button--white"
          href="#"
        >
          <BinanceSvg />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
