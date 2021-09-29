import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import "./Header.css";
import CartContext from "../../store/cart_context";

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);

   const numberOfCartItems = cartCtx.item.reduce((CurNumber, item) => {
     return CurNumber + item.amount;
  }, 0);

  return (
      <button className="cart_button" onClick={props.onClick}>
        <span className="icon"><CartIcon/></span>
        <span> Your Cart</span>
        <span className="cart_item_number">{numberOfCartItems}</span>
      </button>
  );
}

export default HeaderCartButton;