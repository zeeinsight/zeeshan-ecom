import React from "react";
import "./header.css";
import mylogo from "../img/mylogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();


  
  return (
    <>
      <div className="header">
        <Link to="/">
          {/* <p> Zeeshan Shopping</p> */}
         
        </Link>
       
        <div className="header_nav">
          <Link to={!user && "/loginScreen"}>
            <div className="header_options">
              <span className="headerOption_one">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="headerOption_two">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header_options">
            <span className="headerOption_one">Return</span>
            <span className="headerOption_two">Orders</span>
          </div>
          <div className="header_options">
            <span className="headerOption_one">Your</span>
            <span className="headerOption_two">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
              <ShoppingBasketIcon className="Basket" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
