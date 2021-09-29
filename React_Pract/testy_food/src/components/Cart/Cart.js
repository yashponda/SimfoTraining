import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/cart_context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.item.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount:1});
    }

    const cartItems = (
        <ul className="cart_items">
            {cartCtx.item.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                    onAdd ={cartItemAddHandler.bind(null,item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total_amount">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="close_btn" onClick={props.onClose}>Close</button>
                {hasItems && <button className="order_btn">Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;