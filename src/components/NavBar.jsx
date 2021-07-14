/* eslint-disable jsx-a11y/anchor-is-valid */

import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
import { ReactComponent as BinanceSvg } from "../assets/svg/binance-coin-bnb-logo 1.svg";

const NavBar = () => {
  return (
    <div className="container__nav">
      <nav className="navbar__left">
        <div className="header__logo">
          <LogoSvg className="navbar__logo" />
          <h2>yourlogo</h2>
        </div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a href="#">Home</a>
          </li>
          <li className="navbar__link">
            <a href="#">Discover</a>
          </li>
          <li className="navbar__link">
            <a href="#">History</a>
          </li>
        </ul>
      </nav>
      <div className="navbar__right">
        <button
          className="button navbar__button navbar__button--connect"
          href="#"
        >
          Connect Wallet
        </button>
        <button
          className="button navbar__button navbar__button--white"
          href="#"
        >
          <BinanceSvg />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
