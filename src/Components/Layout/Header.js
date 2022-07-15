import { Fragment } from "react";

import mealsImg from "../../assests/meals.jpeg";
import HeaderCardButton from "./HeaderCardButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="food table" />
      </div>
    </Fragment>
  );
};

export default Header;
