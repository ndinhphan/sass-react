/* eslint-disable jsx-a11y/anchor-is-valid */

import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as BinanceSvg } from "../../assets/svg/binance-coin-bnb-logo 1.svg";
import React from "react";
import { useState } from "react";
import { Drawer, Button, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Search } = Input;
const SearchBar = ({ style, size }) => {
  return (
    <Search
      className="navbar__right__searchbar"
      style={style ? style : { width: 200 }}
      size={size ? size : "medium"}
      shape="circle"
    />
  );
};

const HamburgerMenuButton = () => {
  const [visible, setVisible] = useState(false);
  const [childrenVisible, setChildrenVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showChildDrawer = () => {
    setChildrenVisible(true);
  };
  const onChildClose = () => {
    setChildrenVisible(false);
  };

  return (
    <>
      <Button
        icon={<MenuOutlined />}
        onClick={showDrawer}
        size="large"
        className="button navbar__right__hamburger"
      ></Button>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ width: "100%" }}
        width={500}
        closable={true}
      >
        <div className="hamburger__container">
          <NavBarLogo />
          <NavBarNavLinks />
          <button
            onClick={showChildDrawer}
            className="button navbar__right__button navbar__right__button--search"
            href="#"
          >
            Search
          </button>
          <NavBarButtons />
        </div>
        <Drawer
          title="Search"
          width={500}
          closable={true}
          onClose={onChildClose}
          visible={childrenVisible}
        >
          <SearchBar size="large" style={{ width: 452 }} />
        </Drawer>
      </Drawer>
    </>
  );
};

const NavBarNavLinks = () => {
  return (
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
  );
};

const NavBarButtons = () => {
  return (
    <>
      <SearchBar />
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
    </>
  );
};

const NavBarLogo = () => (
  <div className="navbar__left__logo">
    <LogoSvg className="navbar__left__logo__svg" />
    <h2>yourlogo</h2>
  </div>
);

const NavBar = () => {
  return (
    <div className="container container__nav">
      <nav className="navbar__left">
        <NavBarLogo />
        <NavBarNavLinks />
      </nav>
      <div className="navbar__right">
        <NavBarButtons />
        <HamburgerMenuButton />
      </div>
    </div>
  );
};

export default NavBar;
