import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = (props) => {
    return (
        <>
            <header>
                <h1> Testy Food </h1>
                <HeaderCartButton onClick={props.onShowCart}/> 
            </header>
            
            <div className="main_img_div" >
                <img className="main_img" src={mealsImage} alt="amazing foods on table" />
            </div>
        </>
    );
}

export default Header;